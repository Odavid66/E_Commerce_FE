import { useMemo, useState } from 'react'
import { type OrderCardItem } from '../../../Components/OrderCard/Ordercard'
import { useQuery } from '@tanstack/react-query'
import { GetAllUserOrders } from '../../../services/GetAllUserOrder'
import { AdminTable } from '../../../Components/AdminTable/AdminTable'
import './Orders.css'

type OrderStatusFilter = 'all' | 'pending' | 'paid'

    export interface OrderData {
    id: string
    TotalAmount: number
    createdAt: string
    status: 'pending' | 'paid'
    items: OrderCardItem[]
    }



    const columns = [
        { key: 'id', label: 'ORDER ID' },
        { key: 'createdAt', label: 'CREATED AT' },
        { key: 'status', label: 'STATUS' },
        { key: 'TotalAmount', label: 'AMOUNT' }
    ]
    export function Orders() {
        const { data, isLoading, error } = useQuery<OrderData[], Error>({
            queryKey: ['allUserOrders'],
            queryFn: GetAllUserOrders,
        })

        const dummyOrders: OrderData[] = data ?? []

        const [activeFilter, setActiveFilter] = useState<OrderStatusFilter>('pending')

    const filteredOrders = useMemo(() => {
        if (activeFilter === 'all') {
        return dummyOrders
        }

        return dummyOrders.filter((order) => order.status === activeFilter)
    }, [activeFilter, dummyOrders])
        if (isLoading) {
            return <div className="order-page__state">Loading all orders...</div>
        }
        if (error) {
            return <div className="order-page__state order-page__state--error">{error.message}</div>
        }
        

    const getFilterLabel = (filter: OrderStatusFilter) => {
        if (filter === 'all') return 'All'
        if (filter === 'pending') return 'Pending'
        return 'Paid'
    }

    return (
        <main className="order-page">
        <header className="order-page__header">
            <h1>My Orders</h1>
            <p>{filteredOrders.length} order(s) shown</p>
        </header>

        <section className="order-page__filters" aria-label="Order status filters">
            {(['all', 'pending', 'paid'] as OrderStatusFilter[]).map((filter) => (
            <button
                key={filter}
                type="button"
                className={`order-page__filter-btn${activeFilter === filter ? ' order-page__filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(filter)}
            >
                {getFilterLabel(filter)}
            </button>
            ))}
        </section>

        {filteredOrders.length === 0 ? (
            <div className="order-page__empty">No orders found for this filter.</div>
        ) : (
            <section className="order-page__list" aria-label="Orders list">
                <AdminTable columns={columns} data={filteredOrders} nav="orders"/>
            
            </section>
        )}
        </main>
    )
}

export default Orders
