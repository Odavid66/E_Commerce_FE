import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartItemCard } from '../../../Components/CartItemCard/card'
import { Basebutton } from '../../../Components/button/button'
import { GetUserCart, type CartItem } from '../../../utils/GetUserCart'
import './Cart.css'

export function Cart() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadCart = async () => {
      try {
        setIsLoading(true)
        const items = await GetUserCart()
        setCartItems(items)
      } catch {
        setError('We could not load your cart right now.')
      } finally {
        setIsLoading(false)
      }
    }

    void loadCart()
  }, [])

  // Ensure numeric arithmetic even if API returns strings or missing values
  const subtotal = cartItems.reduce((total, item) => {
    const price = Number(item.price) || 0
    const quantity = Number(item.quantity) || 0
    return total + price * quantity
  }, 0)

  const shipping = 0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const formatCurrency = (value: number) => {
    return Number.isFinite(value) ? value.toFixed(2) : '0.00'
  }

  const handleClearCart = async () => {
    try {
      setError(null)

      // Replace the endpoint with your real cart clear API route.
      const response = await fetch('/api/cart/clear', {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to clear cart')
      }

      setCartItems([])
    } catch {
      setError('We could not clear your cart right now.')
    }
  }

  const handleProceedToCheckout = () => {
    // Replace with real checkout API response later.
    const isSuccess = cartItems.length > 0

    if (isSuccess) {
      navigate('/order')
      return
    }

    setError('Checkout failed. Please try again.')
  }

  return (
    <main className="cart-page">
      <section className="cart-page__header">
        <div>
          <p className="cart-page__eyebrow">Shopping Bag</p>
          <h1>Your Cart</h1>
        </div>
        <p className="cart-page__summary">{cartItems.length} items · ${formatCurrency(subtotal)}</p>
      </section>

      {isLoading ? (
        <div className="cart-page__state">Loading your cart...</div>
      ) : error ? (
        <div className="cart-page__state cart-page__state--error">{error}</div>
      ) : cartItems.length === 0 ? (
        <div className="cart-page__state">Your cart is empty.</div>
      ) : (
        <div className="cart-container">
          <div className="cart-page__list">
            {cartItems.map((item) => (
              <CartItemCard
                key={item.id}
                productImage={item.productImage}
                productName={item.productName}
                productDescription={item.productDescription}
                price={item.price}
                quantity={item.quantity}
                onIncrement={() => {}}
                onDecrement={() => {}}
                onRemove={() => {}}
              />
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-summary__card">
              <h2>Cart Summary</h2>
              <div className="cart-summary__row">
                <span>Subtotal</span>
                <span>${formatCurrency(subtotal)}</span>
              </div>
              <div className="cart-summary__row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${formatCurrency(shipping)}`}</span>
              </div>
              <div className="cart-summary__row">
                <span>Estimated Tax (8%)</span>
                <span>${formatCurrency(tax)}</span>
              </div>

              <div className="cart-summary__total">
                <span>Total</span>
                <span>${formatCurrency(total)}</span>
              </div>

              <Basebutton backgroundColor="#6b46ff" color="#fff" width="100%" onClick={handleProceedToCheckout}>
                Proceed to Checkout
              </Basebutton>

              <button type="button" className="cart-summary__clear-button" onClick={handleClearCart}>
                Clear Cart
              </button>

              <p className="cart-summary__small">By clicking checkout, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
