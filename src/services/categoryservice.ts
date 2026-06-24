import { fetchClient } from "../utils/fetchClient";

export const GetCategories = async () => {
    return await fetchClient(`/api/Category/`, { method: 'GET'});
}

export const GetCategoryById = async (id: number) => {
    return await fetchClient(`/api/Category/${id}`, {method: 'GET'});
};

export const CreateCategory = async (data: {
    name: string;
    description?: string;
}) => {
    return await fetchClient (`/api/Category/`, {
        method: 'POST',
        body: JSON.stringify(data),
    });
};

export const UpdateCategory = async (id: number, data: {
    name?: string;
    description?: string;
}) => {
    return await fetchClient (`/api/Category/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
    });
};

export const DeleteCategory = async (id: number) => {
    return await fetchClient (`/api/Category/${id}`, {method: 'DELETE'});
};