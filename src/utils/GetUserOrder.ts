import { fetchClient } from "./fetchClient";
import { type OrderData } from "../Pages/Customer/Order/Order";


export async function GetUserOrders(): Promise<OrderData[]> {
    const response = await fetchClient('/api/Order/GetUserOrders', {
        method: 'GET',
    });
    return response;
}
