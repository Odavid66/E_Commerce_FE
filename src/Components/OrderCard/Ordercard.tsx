import './Ordercard.css'
import OrderItem from '../OrderItem/orderItem'

export interface OrderCardItem {
	img: string
	name: string
	quantity: number
	price: number | string
}

export const dummyOrderItems: OrderCardItem[] = [
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
]

const defaultCreatedAt = 'Jun 2, 2026, 10:30 AM'

const formatCreatedAt = (createdAt: string | number | Date) => {
	if (createdAt instanceof Date) {
		return createdAt.toLocaleString()
	}

	if (typeof createdAt === 'number') {
		return new Date(createdAt).toLocaleString()
	}

	return createdAt
}

interface OrderCardProps {
	items?: OrderCardItem[]
	createdAt?: string | number | Date
	status?: string
	onPay?: () => void
	payLabel?: string
	note?: string
}

const formatCurrency = (value: number) => {
	return value.toFixed(2)
}

export function OrderCard({
	items = dummyOrderItems,
	createdAt = defaultCreatedAt,
	status = 'Pending',
	onPay,
	payLabel = 'Pay Now',
	note = 'Your transaction is secure and encrypted.',
}: OrderCardProps) {
	const subtotal = items.reduce((total, item) => {
		const price = typeof item.price === 'number' ? item.price : Number(item.price)
		const quantity = Number(item.quantity) || 0
		return total + (Number.isFinite(price) ? price : 0) * quantity
	}, 0)

	const shipping = 0
	const tax = subtotal * 0.08
	const total = subtotal + shipping + tax

	const formatItemPrice = (price: number | string) => {
		if (typeof price === 'number') {
			return formatCurrency(price)
		}

		const parsedPrice = Number(price)
		return Number.isFinite(parsedPrice) ? formatCurrency(parsedPrice) : price
	}

	const normalizedStatus = status.trim().toLowerCase()
	const statusClassName = `order-card__meta-value order-card__meta-value--status order-card__meta-value--status-${normalizedStatus}`

	return (
		<aside className="order-card" aria-label="Order summary">
			<h2 className="order-card__title">Order Summary</h2>

			<div className="order-card__meta" aria-label="Order metadata">
				<div className="order-card__meta-item">
					<span className="order-card__meta-label">Created</span>
					<span className="order-card__meta-value">{formatCreatedAt(createdAt)}</span>
				</div>

				<div className="order-card__meta-item order-card__meta-item--right">
					<span className="order-card__meta-label">Status</span>
					<span className={statusClassName}>{status}</span>
				</div>
			</div>

			<div className="order-card__items" role="list">
				{items.map((item, index) => (
					<OrderItem
						key={`${item.name}-${index}`}
						img={item.img}
						name={item.name}
						quantity={item.quantity}
						price={formatItemPrice(item.price)}
					/>
				))}
			</div>

			<div className="order-card__divider" />

			<div className="order-card__summary">
				<div className="order-card__row">
					<span>Subtotal</span>
					<span>${formatCurrency(subtotal)}</span>
				</div>

				<div className="order-card__row">
					<span>Shipping</span>
					<span className="order-card__value--green">{shipping === 0 ? 'Free' : `$${formatCurrency(shipping)}`}</span>
				</div>

				<div className="order-card__row">
					<span>Taxes</span>
					<span>${formatCurrency(tax)}</span>
				</div>

				<div className="order-card__row order-card__row--total">
					<span>Total</span>
					<span>${formatCurrency(total)}</span>
				</div>
			</div>

			{status === "pending" && (
				<button type="button" className="order-card__pay-button" onClick={onPay}>
					<span className="order-card__lock" aria-hidden="true">
						🔒
					</span>
					<span>{payLabel} ${formatCurrency(total)}</span>
				</button>
			)}

			<p className="order-card__note">{note}</p>
		</aside>
	)
}

export default OrderCard
