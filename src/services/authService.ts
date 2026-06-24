import { fetchClient } from '../utils/fetchClient';

// Types
export interface LoginResponse {
  token: string;
  refreshToken: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

// Service functions
export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  return await fetchClient('/api/auth/login', {
    method: 'POST',
    body: { email, password },
  });
};

export const registerUser = async (data: RegisterData): Promise<LoginResponse> => {
  return await fetchClient('/api/auth/register', {
    method: 'POST',
    body: data,
  });
};

export const getUserProfile = async (): Promise<UserProfile> => {
  return await fetchClient('/api/auth/profile', { method: 'GET' });
};
