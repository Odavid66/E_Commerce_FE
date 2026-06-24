import { fetchClient } from "../utils/fetchClient";
import { type OrderData } from "../Pages/Admin/Orders/Orders";

export async function GetAllUserOrders(): Promise<OrderData[]> {
    const response = await fetchClient('/api/Order/all', {
        method: 'GET',
    });
    return response;
}