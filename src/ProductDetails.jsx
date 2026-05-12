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

function ProductDetails() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { state } = useLocation()
  const { addToCart, itemCount } = useCart()
  
  const [addedMessage, setAddedMessage] = useState('')
  const [isTopbarScrolled, setIsTopbarScrolled] = useState(false)
  const [selectedCut, setSelectedCut] = useState('With Bone')
  const [selectedSize, setSelectedSize] = useState('250g')

  const product = useMemo(() => {
    const fromState = state?.product
    const fromList = products.find((item) => item.id === id)
    // Prefer canonical product data from list but keep any navigation-provided fields
    return {
      ...(fromList || {}),
      ...(fromState || {})
    }
  }, [id, state])

  useEffect(() => {
    if (product && product.pricing && product.pricing.length) {
      setSelectedSize(product.pricing[0].size)
    }
  }, [product])

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
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Back to Products</button>
          </section>
        </main>
      </div>
    )
  }

  const productImage = product.image || fallbackProductImage
  const isChickenProduct = product.category === 'Pickles'
  const isBoneless = selectedCut === 'Boneless'

  const selectedPrice = (() => {
    if (!product) return '₹0'
    const pricingArray = isBoneless ? product.bonelessPricing || [] : product.pricing || []
    const found = pricingArray.find((p) => p.size === selectedSize)
    return found ? found.price : product.price || '₹0'
  })()
  
  const stockUrgencyMessage = 'Freshly prepared after order confirmation'

  const productForOrder = {
    ...product,
    id: `${product.id}${isBoneless ? '-boneless' : ''}`,
    name: `${product.name}${isBoneless ? ' - Boneless' : ''}`,
    price: selectedPrice,
    size: selectedSize
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
          <button type="button" className="order-link order-link-btn" onClick={() => navigate('/')}>Back to Home</button>
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
            <h1>{product.name}</h1>
            <p className="product-detail-description">{product.description}</p>

            {/* Weight selector remains near the top; compact cut toggle is shown above order buttons */}

            {product.pricing && (
              <div className="size-options" role="tablist" aria-label="Select weight">
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Select Weight:</h4>
                {product.pricing.map((p) => {
                  const active = selectedSize === p.size
                  return (
                    <button
                      type="button"
                      key={p.size}
                      className={`size-chip ${active ? 'size-chip-active' : ''}`}
                      onClick={() => setSelectedSize(p.size)}
                      style={{
                        padding: '0.5rem 0.75rem',
                        cursor: 'pointer',
                        backgroundColor: active ? '#e9f6ef' : undefined,
                        border: active ? '1px solid #2e7d32' : undefined
                      }}
                    >
                      {p.size}
                    </button>
                  )
                })}
              </div>
            )}

            <div className="product-detail-meta" style={{ marginTop: '1.5rem' }}>
              <p className="buy-price" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#d35400' }}>
                {selectedPrice}
              </p>
              <p style={{ marginTop: '0.25rem', fontSize: '0.95rem', color: '#666' }}>
                Selected: {isChickenProduct ? `${selectedCut} • ${selectedSize}` : selectedSize}
              </p>
              <p className="stock">{product.stock}</p>
              <p className="stock-urgency">{stockUrgencyMessage}</p>
            </div>

            {/* compact bone/boneless toggle placed just above order actions */}
            {isChickenProduct && product.bonelessPricing && (
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
                {chickenCuts.map((cut) => (
                  <button
                    key={cut}
                    type="button"
                    className={`size-chip ${selectedCut === cut ? 'size-chip-active' : ''}`}
                    onClick={() => setSelectedCut(cut)}
                    aria-pressed={selectedCut === cut}
                    style={{ padding: '0.5rem 0.75rem' }}
                  >
                    {cut}
                  </button>
                ))}
              </div>
            )}

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
