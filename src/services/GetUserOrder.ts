import { fetchClient } from "../utils/fetchClient";
import { type OrderData } from "../Pages/Customer/Order/Order";


export async function GetUserOrders(): Promise<OrderData[]> {
    const response = await fetchClient('/api/Order', {
        method: 'GET',
    });
    return response;
}

