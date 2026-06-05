import { useMemo, useState } from 'react'
import { type OrderCardItem } from '../../../Components/OrderCard/Ordercard'
import { AdminTable } from '../../../Components/AdminTable/AdminTable'
import './Orders.css'

type OrderStatusFilter = 'all' | 'pending' | 'paid'

    interface OrderData {
    id: string
    TotalAmount: number
    createdAt: string
    status: 'pending' | 'paid'
    items: OrderCardItem[]
    }

    const dummyOrders: OrderData[] = [
    {
        id: 'ORD-1001',
        TotalAmount: 528,
        createdAt: '2026-06-02T10:30:00Z',
        status: 'pending',
        items: [
        {
            img: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=400&q=80',
            name: 'Nexus Velocity 1.0',
            quantity: 1,
            price: 129,
        },
        {
            img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
            name: 'Quantum Watch',
            quantity: 1,
            price: 399,
        },
        ],
    },
    {
        id: 'ORD-1002',
        TotalAmount: 178,   
        createdAt: '2026-06-01T14:10:00Z',
        status: 'paid',
        items: [
        {
            img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80',
            name: 'Trail Blazer Sneaker',
            quantity: 2,
            price: 89,
        },
        ],
    },
    {
        id: 'ORD-1003',
        TotalAmount: 143,
        createdAt: '2026-05-31T08:20:00Z',
        status: 'pending',
        items: [
        {
            img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400&q=80',
            name: 'Metro Carry Backpack',
            quantity: 1,
            price: 119,
        },
        {
            img: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=400&q=80',
            name: 'Cloud Tee',
            quantity: 3,
            price: 24,
        },
        ],
    },
    {
        id: 'ORD-1004',
        TotalAmount: 142,
        createdAt: '2026-05-30T16:45:00Z',
        status: 'paid',
        items: [
        {
            img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80',
            name: 'Silk Blend Shirt',
            quantity: 1,
            price: 74,
        },
        {
            img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=400&q=80',
            name: 'Urban Chino',
            quantity: 1,
            price: 68,
        },
        ],
    },
    {
        id: 'ORD-1005',
        TotalAmount: 94,
        createdAt: '2026-05-29T11:00:00Z',
        status: 'pending',
        items: [
        {
            img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=400&q=80',
            name: 'Velocity Hoodie',
            quantity: 1,
            price: 94,
        },
        ],
    },
    ]

    const columns = [
        { key: 'id', label: 'ORDER ID' },
        { key: 'createdAt', label: 'CREATED AT' },
        { key: 'status', label: 'STATUS' },
        { key: 'TotalAmount', label: 'AMOUNT' }
    ]
    export function Orders() {
    const [activeFilter, setActiveFilter] = useState<OrderStatusFilter>('pending')

    const filteredOrders = useMemo(() => {
        if (activeFilter === 'all') {
        return dummyOrders
        }

        return dummyOrders.filter((order) => order.status === activeFilter)
    }, [activeFilter])

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
