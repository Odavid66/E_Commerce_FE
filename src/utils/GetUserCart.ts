import { fetchClient } from "./fetchClient"

export interface CartItem {
    id: string
    productId: number
    productImage: string
    productName: string
    productDescription: string
    price: number
    quantity: number
}



export async function GetUserCart(): Promise<CartItem[]> {
    const response = await fetchClient('/api/Cart/GetCartByUserId', {
        method: 'GET',
    })
    return response
}