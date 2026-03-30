import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import logo from './images/logo.jpeg'
import { useCart } from './context/CartContext'
import { createWhatsAppLink } from './utils/whatsapp'
import FloatingWhatsApp from './components/FloatingWhatsApp'

const formatRupees = (value) => `₹${value.toLocaleString('en-IN')}`

const parsePrice = (priceText) => {
  const value = Number(String(priceText).replace(/[^\d.]/g, ''))
  return Number.isFinite(value) ? value : 0
}

function CartPage() {
  const navigate = useNavigate()
  const [isTopbarScrolled, setIsTopbarScrolled] = useState(false)
  const {
    cartItems,
    itemCount,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart
  } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsTopbarScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const cartOrderMessage = [
    "Hi, I want to place this order from Aruna's Home Foods:",
    ...cartItems.map(
      (item, index) =>
        `${index + 1}. ${item.name} - ${item.quantity} x ${item.price} = ${formatRupees(parsePrice(item.price) * item.quantity)}`
    ),
    `Total Items: ${itemCount}`,
    `Total Price: ${formatRupees(totalPrice)}`
  ].join('\n')

  return (
    <div className="site-wrapper">
      <header className={`topbar ${isTopbarScrolled ? 'topbar-scrolled' : ''}`}>
        <a className="brand" href="/" aria-label="Aruna's Home Foods home">
          <img src={logo} alt="Aruna's Home Foods logo" />
          <span>Aruna&apos;s Home Foods</span>
        </a>

        <div className="topbar-actions">
          <button type="button" className="order-link order-link-btn" onClick={() => navigate('/')}>
            Continue Shopping
          </button>
          <span className="cart-link" aria-label="Total items in cart">
            Cart
            <span className="cart-count">{itemCount}</span>
          </span>
        </div>
      </header>

      <main className="cart-page" id="top">
        <h1>Your Cart</h1>

        {cartItems.length === 0 ? (
          <section className="cart-empty">
            <p>Your cart is empty right now.</p>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
              Browse Products
            </button>
          </section>
        ) : (
          <section className="cart-layout">
            <div className="cart-list">
              {cartItems.map((item) => {
                const lineTotal = parsePrice(item.price) * item.quantity

                return (
                  <article className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} className="cart-item-image" />

                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                      <p className="cart-price">{item.price}</p>
                      <p className="cart-line-total">Subtotal: {formatRupees(lineTotal)}</p>

                      <div className="quantity-controls">
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => decreaseQuantity(item.id)}
                          aria-label={`Decrease quantity for ${item.name}`}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => increaseQuantity(item.id)}
                          aria-label={`Increase quantity for ${item.name}`}
                        >
                          +
                        </button>

                        <button
                          type="button"
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <aside className="cart-summary">
              <h2>Order Summary</h2>
              <p className="summary-row">
                <span>Total Items</span>
                <strong>{itemCount}</strong>
              </p>
              <p className="summary-row">
                <span>Total Price</span>
                <strong>{formatRupees(totalPrice)}</strong>
              </p>

              <div className="summary-actions">
                <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
                  Add More Items
                </button>
                <a
                  className="btn btn-secondary"
                  href={createWhatsAppLink(cartOrderMessage)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Order Now
                </a>
                <button type="button" className="btn btn-primary" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            </aside>
          </section>
        )}
      </main>

      <FloatingWhatsApp />
    </div>
  )
}

export default CartPage
