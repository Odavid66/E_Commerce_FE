import './orderItem.css'

interface OrderItemProps {
  img: string
  name: string
  quantity: number
  price: number | string
}

export const OrderItem = ({ img, name, quantity, price }: OrderItemProps) => {
  const formatPrice = (p: number | string) => {
    if (typeof p === 'number') return p.toFixed(2)
    return p
  }

  return (
    <div className="order-item" role="listitem">
      <img src={img} alt={name} className="order-item__img" />

      <div className="order-item__details">
        <div className="order-item__name">{name}</div>
        <div className="order-item__qty">Qty: {quantity}</div>
      </div>

      <div className="order-item__price">${formatPrice(price)}</div>
    </div>
  )
}

export default OrderItem
