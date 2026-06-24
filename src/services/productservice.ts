import type { Product } from "../Components/ProductCard/ProductCardComponent";
import { fetchClient } from "../utils/fetchClient";

export const GetProducts = async (category?: number) : Promise<Product[]> => {
    let url = `/api/Product/`;
    if (category) {
    url += `?category=${category}`;
  }
    return await fetchClient (url, {method: 'GET'});
};

export const GetProductById = async (id: number) : Promise<Product> => {
    return await fetchClient (`/api/Product/${id}/`, {method: 'GET'});
};

export const GetProductByCategory = async (categoryId: number) : Promise<Product[]>=> {
    return await fetchClient (`/api/Product/category/${categoryId}/`, {method: 'GET'});
};

export const SearchProduct = async (query: string) : Promise<Product[]> => {
    return await fetchClient (`/api/Product/search?query=${query}`, {method: 'GET'});
};

export const CreateProduct = async(data: {
    name: string;
    price: number;
    stock: number;
    description?: string;
    imageUrl: string;
    category?: string;
}) => {
    return await fetchClient(`/api/Product/`, {
        method: 'POST',
        body: data,
    });
};

export const UpdateProduct = async(productId: number, data: {
    name?: string;
    price?: number;
    stock?: number;
    description?: string;
    imageUrl?: string;
    category?: string;
}) => {
    return await fetchClient(`/api/Product/${productId}/`, {
        method: 'PATCH',
        body: data,
    });
};

export const DeleteProduct = async(id: number) => {
    return await fetchClient(`/api/Product/${id}/`, { method: 'DELETE'});
};
