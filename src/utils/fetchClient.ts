// src/utils/fetchClient.ts
import { useAuthStore } from '../store/authStore';

let isRefreshing = false;
let failedQueue: Array<{ resolve: (token: string) => void; reject: (err: any) => void }> = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token as string);
        }
    });
    failedQueue = [];
};

export const fetchClient = async (endpoint: string, customConfig: RequestInit = {}) => {
    const baseUrl = 'https://e-commerce-api-yojz.onrender.com';
    // Always read fresh from the vault
    let token = localStorage.getItem('accessToken'); 

    const config: RequestInit = {
        method: customConfig.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...customConfig.headers,
        },
    };

    if (customConfig.body) {
        config.body = typeof customConfig.body === 'string' 
            ? customConfig.body 
            : JSON.stringify(customConfig.body);
    }

    if (token && config.headers) {
        (config.headers as Record<string, string>).Authorization = `Bearer ${token}`;
    }

    try {
        let response = await fetch(`${baseUrl}${endpoint}`, config);

        // 401 Unauthorized Intercept
        if (response.status === 401) {
            const refreshToken = localStorage.getItem('refreshToken');
            
            if (!refreshToken) {
                useAuthStore.getState().logout();
                throw new Error("No refresh token available. Logging out.");
            }

            // If a refresh is already happening, put this request in the waiting line
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then(newToken => {
                    (config.headers as Record<string, string>).Authorization = `Bearer ${newToken}`;
                    return fetch(`${baseUrl}${endpoint}`, config).then(res => res.json());
                });
            }

            isRefreshing = true;

            try {
                // Execute the refresh against your .NET API
                const refreshResponse = await fetch(`${baseUrl}/api/Account/refresh-token`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    // Adjust this payload based on exactly what your .NET API expects!
                    body: JSON.stringify({ token: token, refreshToken: refreshToken }) 
                });

                if (!refreshResponse.ok) throw new Error("Refresh failed");

                const refreshData = await refreshResponse.json();
                const newAccessToken = refreshData.token;
                const newRefreshToken = refreshData.refreshToken;

                // Update the vault
                localStorage.setItem('accessToken', newAccessToken);
                localStorage.setItem('refreshToken', newRefreshToken);
                
                // Update Zustand so the UI knows we are still safely logged in
                useAuthStore.getState().login(newAccessToken, newRefreshToken);

                processQueue(null, newAccessToken);
                isRefreshing = false;

                // Retry the original request that failed
                (config.headers as Record<string, string>).Authorization = `Bearer ${newAccessToken}`;
                response = await fetch(`${baseUrl}${endpoint}`, config);

            } catch (refreshError) {
                processQueue(refreshError, null);
                isRefreshing = false;
                useAuthStore.getState().logout();
                throw refreshError;
            }
        }

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `HTTP Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};