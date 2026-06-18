import { fetchClient } from "./fetchClient"


export async function DeleteCart(): Promise<void> {
    const response = await fetchClient('/api/Cart/DeleteCart', {
        method: 'DELETE',
    })
    return response
}