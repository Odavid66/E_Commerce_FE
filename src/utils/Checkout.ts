import { fetchClient } from "./fetchClient"
import {  type OrderData } from "../Pages/Customer/Order/Order"


export async function Checkout(): Promise<OrderData> {
    const response = await fetchClient('/api/checkout', {
        method: 'POST',
    })
    return response
}