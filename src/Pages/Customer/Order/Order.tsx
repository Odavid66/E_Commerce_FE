import { useMemo, useState } from 'react'
import OrderCard, { type OrderCardItem } from '../../../Components/OrderCard/Ordercard'
import { useQuery } from '@tanstack/react-query'
import './Order.css'
import { GetUserOrders } from '../../../utils/GetUserOrder'

type OrderStatusFilter = 'all' | 'pending' | 'paid'

export interface OrderData {
  id: string
  createdAt: string
  status: 'pending' | 'paid'
  items: OrderCardItem[]
}


export function Order() {
  const { data, isLoading, error } = useQuery<OrderData[], Error>({
    queryKey: ['userOrders'],
    queryFn: GetUserOrders,
  })
  if (isLoading) {
    return <div className="order-page__state">Loading your orders...</div>
  }
  if (error) {
    return <div className="order-page__state order-page__state--error">{error.message}</div>
  }


  const ordersToDisplay = data || []


  const [activeFilter, setActiveFilter] = useState<OrderStatusFilter>('all')

const filteredOrders = useMemo(() => {
  if (activeFilter === 'all') return ordersToDisplay

  return ordersToDisplay.filter((order) => order.status === activeFilter)
}, [activeFilter, ordersToDisplay])

  const getFilterLabel = (filter: OrderStatusFilter) => {
    if (filter === 'all') return 'All'
    if (filter === 'pending') return 'Pending'
    if (filter === 'paid') return 'Paid'
    return 'All'
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
          {filteredOrders.map((order) => (
            <OrderCard key={order.id} createdAt={order.createdAt} status={order.status} items={order.items} payLabel="Pay" />
          ))}
        </section>
      )}
    </main>
  )
}
