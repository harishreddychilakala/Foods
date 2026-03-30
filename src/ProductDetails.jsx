import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import './App.css'
import fallbackProductImage from './assets/hero.png'
import logo from './images/logo.jpeg'
import { products } from './data/products'
import { createOrderLink } from './utils/whatsapp'
import { useCart } from './context/CartContext'
import { Breadcrumbs } from './components/Breadcrumbs'
import { BackToTop } from './components/BackToTop'
import FloatingWhatsApp from './components/FloatingWhatsApp'

const chickenCuts = ['With Bone', 'Boneless']

const bonelessPricesBySize = {
  '250g': '₹299',
  '500g': '₹499',
  '1kg': '₹999'
}

function ProductDetails() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { state } = useLocation()
  const [selectedCut, setSelectedCut] = useState(chickenCuts[0])
  const [addedMessage, setAddedMessage] = useState('')
  const [isTopbarScrolled, setIsTopbarScrolled] = useState(false)
  const { addToCart, itemCount } = useCart()

  useEffect(() => {
    if (!addedMessage) {
      return
    }

    const timer = window.setTimeout(() => {
      setAddedMessage('')
    }, 1800)

    return () => window.clearTimeout(timer)
  }, [addedMessage])

  useEffect(() => {
    const handleScroll = () => {
      setIsTopbarScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const product = useMemo(() => {
    if (state?.product) {
      return state.product
    }

    return products.find((item) => item.id === id)
  }, [id, state])

  if (!product) {
    return (
      <div className="site-wrapper">
        <header className={`topbar ${isTopbarScrolled ? 'topbar-scrolled' : ''}`}>
          <a className="brand" href="/" aria-label="Aruna's Home Foods home">
            <img src={logo} alt="Aruna's Home Foods logo" />
            <span>Aruna&apos;s Home Foods</span>
          </a>
        </header>
        <main className="product-detail-page">
          <section className="product-missing-card">
            <h2>Product not found</h2>
            <p>The product you are looking for is not available right now.</p>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
              Back to Products
            </button>
          </section>
        </main>
      </div>
    )
  }

  const productImage = product.image || fallbackProductImage
  const isBoneless = selectedCut === 'Boneless'
  const selectedPrice = isBoneless ? bonelessPricesBySize[product.size] || product.price : product.price
  const stockUrgencyMessage = 'Freshly prepared after order confirmation'

  const productForOrder = {
    ...product,
    id: isBoneless ? `${product.id}-boneless` : product.id,
    name: isBoneless ? `${product.name} (Boneless)` : product.name,
    price: selectedPrice
  }

  return (
    <div className="site-wrapper">
      <header className={`topbar ${isTopbarScrolled ? 'topbar-scrolled' : ''}`}>
        <a className="brand" href="/" aria-label="Aruna's Home Foods home">
          <img src={logo} alt="Aruna's Home Foods logo" />
          <span>Aruna&apos;s Home Foods</span>
        </a>

        <div className="topbar-actions">
          <button type="button" className="cart-link" onClick={() => navigate('/cart')}>
            Cart
            <span className="cart-count">{itemCount}</span>
          </button>
          <button type="button" className="order-link order-link-btn" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </header>

      <main className="product-detail-page" id="top">
        <Breadcrumbs 
          items={[
            { label: 'Home', path: '/', clickable: true },
            { label: 'Products', path: '/', clickable: true },
            { label: product.name, clickable: false }
          ]}
        />
        <section className="product-detail-layout">
          <div className="product-detail-image-wrap">
            <img
              src={productImage}
              alt={product.name}
              className="product-detail-image"
              onError={(event) => {
                event.currentTarget.onerror = null
                event.currentTarget.src = fallbackProductImage
              }}
            />
          </div>

          <aside className="product-detail-info">
            <div className="product-detail-meta">
              <p className="stock">{product.stock}</p>
              <p className="stock-urgency">{stockUrgencyMessage}</p>
            </div>

            <h1>{product.name}</h1>

            <p className="buy-price">{selectedPrice}</p>
            <p className="buy-offer">{product.offer}</p>
            <p className="product-detail-description">{product.description}</p>

            <div className="size-options" role="tablist" aria-label="Select pack size">
              {products.map((option) => (
                <button
                  type="button"
                  key={option.id}
                  className={`size-chip ${option.id === product.id ? 'size-chip-active' : ''}`}
                  onClick={() => navigate(`/product/${option.id}`, { state: { product: option } })}
                >
                  {option.size}
                </button>
              ))}
            </div>

            <div className="size-options" role="tablist" aria-label="Select chicken cut">
              {chickenCuts.map((cut) => (
                <button
                  type="button"
                  key={cut}
                  className={`size-chip ${selectedCut === cut ? 'size-chip-active' : ''}`}
                  onClick={() => setSelectedCut(cut)}
                >
                  {cut}
                </button>
              ))}
            </div>

            <a
              className="btn btn-secondary buy-now-btn"
              href={createOrderLink(productForOrder, selectedCut)}
              target="_blank"
              rel="noreferrer"
            >
              Order Now
            </a>

            <button
              type="button"
              className="btn btn-primary buy-now-btn"
              onClick={() => {
                addToCart(productForOrder)
                setAddedMessage(`${productForOrder.name} added to cart`)
              }}
            >
              Add to Cart
            </button>
          </aside>
        </section>

        <section className="product-detail-extra">
          <div className="recipe-copy">
            <h4>Product Information</h4>
            <p>{product.details.productInfo}</p>
          </div>
          <div className="recipe-copy">
            <h4>Ingredients</h4>
            <ul>
              {product.details.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <div className={`cart-toast ${addedMessage ? 'cart-toast-show' : ''}`} aria-live="polite">
        {addedMessage}
      </div>

      <BackToTop />
      <FloatingWhatsApp />
    </div>
  )
}

export default ProductDetails
