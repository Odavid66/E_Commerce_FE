import { fetchClient } from "./fetchClient"
import { useQuery } from "@tanstack/react-query"

export interface CartItem {
    id: string
    productId: number
    productImage: string
    productName: string
    productDescription: string
    price: number
    quantity: number
}

const mockCartItems: CartItem[] = [
    {
        id: 'cart-item-1',
        productId: 1,
        productImage: 'https://images.unsplash.com/photo-1523395243481-163f8f5d2dd4?auto=format&fit=crop&w=400&q=80',
        productName: 'Minimal Leather Wallet',
        productDescription: 'Compact full-grain leather wallet with card slots.',
        price: 42.5,
        quantity: 1,
    },
    {
        id: 'cart-item-2',
        productId: 2,
        productImage: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
        productName: 'Everyday Sneakers',
        productDescription: 'Lightweight sneakers designed for all-day wear.',
        price: 89.99,
        quantity: 2,
    },
    {
        id: 'cart-item-1',
        productId: 1,
        productImage: 'https://images.unsplash.com/photo-1523395243481-163f8f5d2dd4?auto=format&fit=crop&w=400&q=80',
        productName: 'Minimal Leather Wallet',
        productDescription: 'Compact full-grain leather wallet with card slots.',
        price: 42.5,
        quantity: 1,
    },
    {
        id: 'cart-item-1',
        productId: 1,
        productImage: 'https://images.unsplash.com/photo-1523395243481-163f8f5d2dd4?auto=format&fit=crop&w=400&q=80',
        productName: 'Minimal Leather Wallet',
        productDescription: 'Compact full-grain leather wallet with card slots.',
        price: 42.5,
        quantity: 1,
    },
    {
        id: 'cart-item-1',
        productId: 1,
        productImage: 'https://images.unsplash.com/photo-1523395243481-163f8f5d2dd4?auto=format&fit=crop&w=400&q=80',
        productName: 'Minimal Leather Wallet',
        productDescription: 'Compact full-grain leather wallet with card slots.',
        price: 42.5,
        quantity: 1,
    },
    {
        id: 'cart-item-1',
        productId: 1,
        productImage: 'https://images.unsplash.com/photo-1523395243481-163f8f5d2dd4?auto=format&fit=crop&w=400&q=80',
        productName: 'Minimal Leather Wallet',
        productDescription: 'Compact full-grain leather wallet with card slots.',
        price: 42.5,
        quantity: 1,
    }
]

export async function GetUserCart(): Promise<CartItem[]> {
    return Promise.resolve(mockCartItems)
}