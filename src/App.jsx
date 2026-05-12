import './App.css'
import fallbackProductImage from './assets/hero.png'
import aboutUsImage from './images/Aboutus-pic.jpg'
import preservativesFreeImage from './images/PreservativesFree.jpg'
import safePackagingImage from './images/Safe Packaging.png'
import smallBatchImage from './images/SmallBatch.webp'
import logo from './images/logo.jpeg'
import { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { products } from './data/products'
import { DEFAULT_WHATSAPP_MESSAGE, WHATSAPP_NUMBER, WHATSAPP_DISPLAY, createOrderLink, createWhatsAppLink } from './utils/whatsapp'
import { useCart } from './context/CartContext'
import { MobileMenu } from './components/MobileMenu'
import { BackToTop } from './components/BackToTop'
import { SearchBar } from './components/SearchBar'
import { SkeletonLoader } from './components/SkeletonLoader'
import FloatingWhatsApp from './components/FloatingWhatsApp'

const chickenCuts = ['With Bone', 'Boneless']

const whyChooseUs = [
  {
    icon: '🧑‍🍳',
    title: 'Small Batch Cooking',
    text: 'Every order is made in limited quantities to keep flavor fresh and authentic.',
    image: smallBatchImage
  },
  {
    icon: '🌿',
    title: 'Preservative Free',
    text: 'No artificial colors or additives, only traditional ingredients and methods.',
    image: preservativesFreeImage
  },
  {
    icon: '🌶️',
    title: 'Andhra Spices',
    text: 'Made with signature Andhra spice blends like Guntur chilli, coriander, garlic, mustard, and curry leaves for a bold aroma and authentic regional taste.',
    image:
      'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=900&q=80'
  },
  {
    icon: '📦',
    title: 'Safe Packaging',
    text: 'Leak-proof, hygienic jars designed to retain aroma and freshness during delivery.',
    image: safePackagingImage
  }
]

const customerReviews = [
  {
    icon: '⭐',
    title: 'Spice Lover',
    text:
      "Authentic taste and perfectly spiced! The chicken-to-masala ratio is spot on. It isn't just 'chili heat' - you can actually taste the ginger, garlic, and mustard. A must-have for spice lovers!"
  },
  {
    icon: '⭐',
    title: 'Homely Pickles',
    text: 'Thank you for homely pickles'
  },
  {
    icon: '⭐',
    title: 'Tomato Pickle',
    text:
      'Today, we bought tomato pickle from Aruna\'s Kitchen. It was very tasty. The salt and spices were just right. We really enjoyed it.'
  },
  {
    icon: '⭐',
    title: 'Chicken Pickle',
    text:
      'Chicken pickle is really good and taste is delicious Akka, less spicy highly recommended to others also. Keep rocking Akka.'
  },
  {
    icon: '⭐',
    title: 'Homemade Vibes',
    text:
      'Pure homemade vibes in every bite of the chicken pickle... it tastes really good andi... thank you'
  },
  {
    icon: '⭐',
    title: 'Boneless Combo',
    text:
      'I ordered Chicken boneless pickle and groundnut powder today, it really tastes yummy with Rice and Dosa. Thank you Aruna for delivering tasty pickle.'
  },
  {
    icon: '⭐',
    title: 'Perfect Balance',
    text:
      "Hi akka. It's really delicious. Perfect balance of flavours akka, loved every bite. Thank you."
  },
  {
    icon: '⭐',
    title: 'Family Favorite',
    text:
      'Aruna is doing the best pickles and powders which I tasted all of them being at their best taste loved by my whole family... especially kids also loving them as their comfort food.. Good going Aruna... I wish u whole heartedly success ahead in your new venture...'
  },
  {
    icon: '⭐',
    title: 'Highly Recommend',
    text:
      "Highly recommend! The packaging immediately caught my eye with its clean and professional design. The taste is even better the chicken is succulent, and the spice blend is authentic and bold. It has that perfect homemade feel with a professional finish. It's rare to find a pickle where the meat quality is this high!"
  }
]

function App() {
  const navigate = useNavigate()
  const { addToCart, itemCount } = useCart()
  const [addedMessage, setAddedMessage] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isTopbarScrolled, setIsTopbarScrolled] = useState(false)

  // Get unique categories
  const categories = useMemo(() => [...new Set(products.map(p => p.category))], [])

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  // Show a single representative card per product `name` in the requested homepage order.
  const homepageProducts = useMemo(() => {
    const preferredOrder = [
      'Chicken Pickle',
      'Mutton Kheema',
      'Gongura Boneless Chicken Pickle',
      'Prawn Pickle',
      'Mango Pickle',
      'Tomoto Pickle',
      'Rayalaseema Ground Nut Powder',
      'Flaxseed Powder'
    ]

    const uniqueByName = filteredProducts.filter((product, index, array) => {
      return array.findIndex((item) => item.name === product.name) === index
    })

    return preferredOrder
      .map((name) => uniqueByName.find((product) => product.name === name))
      .filter(Boolean)
      .slice(0, 8)
  }, [filteredProducts])

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

  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-reveal')
    if (!sections.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -40px 0px'
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const openProduct = (product) => {
    navigate(`/product/${product.id}`, {
      state: {
        product: {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          description: product.description,
          details: product.details,
          pricing: product.pricing,
          bonelessPricing: product.bonelessPricing,
          offer: product.offer,
          size: product.size,
          stock: product.stock,
          rating: product.rating,
          reviews: product.reviews
        }
      }
    })
  }

  const handleAddToCart = (product, event) => {
    event.stopPropagation()
    addToCart(product)
    setAddedMessage(`${product.name} added to cart`)
  }

  return (
    <div className={`site-wrapper ${isTopbarScrolled ? 'is-scrolling' : ''}`}>
      <header className={`topbar ${isTopbarScrolled ? 'topbar-scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label="Aruna's Home Foods home">
          <img src={logo} alt="Aruna's Home Foods logo" />
          <span>Aruna&apos;s Home Foods</span>
        </a>

        <div className="topbar-actions">
          <button type="button" className="cart-link" onClick={() => navigate('/cart')}>
            Cart
            <span className="cart-count">{itemCount}</span>
          </button>
          <a className="order-link" href="#contact">Order Now</a>
        </div>

        <MobileMenu itemCount={itemCount} />
      </header>

      <main id="top">
        <section className="hero-section scroll-reveal elevate-on-scroll">
          <div className="hero-content">
            <img className="hero-brand-logo" src={logo} alt="Aruna's Home Foods brand mark" />
            <p className="eyebrow">Tradition In Every Jar</p>
            <h1>Authentic Homemade Pickles</h1>
            <p className="hero-copy">
              Crafted in small batches using cherished family recipes, bold spices, and pure
              homemade love.
            </p>
            <div className="hero-cta-group">
              <a
                className="btn btn-secondary"
                href={createWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noreferrer"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="scrolling-banner scroll-reveal elevate-on-scroll" aria-label="Product Benefits">
          <div className="scroll-content">
            <div className="scroll-item">✓ No Preservatives</div>
            <div className="scroll-item">✓ No Artificial Flavours</div>
            <div className="scroll-item">✓ No Colors Added</div>
            <div className="scroll-item">✓ 100% Homemade</div>
            <div className="scroll-item">✓ Fresh Ingredients</div>
            <div className="scroll-item">✓ Family Recipes</div>
            <div className="scroll-item">✓ No Preservatives</div>
            <div className="scroll-item">✓ No Artificial Flavours</div>
            <div className="scroll-item">✓ No Colors Added</div>
            <div className="scroll-item">✓ 100% Homemade</div>
          </div>
        </section>

        <section className="products scroll-reveal elevate-on-scroll" id="products">
          <div className="section-head">
            <p className="eyebrow">Popular Picks</p>
            <h2>Best-Selling Homemade Specials</h2>
          </div>

          <SearchBar 
            onSearch={setSearchTerm} 
            onFilterChange={setSelectedCategory}
            categories={categories}
          />

          <div className="product-grid">
            {isLoading ? (
              <SkeletonLoader count={6} />
            ) : homepageProducts.length > 0 ? (
              homepageProducts.map((product) => {
                return (
                  <article
                    className="product-card glass-effect"
                    key={product.id}
                    onClick={() => openProduct(product)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        openProduct(product)
                      }
                    }}
                  >
                    <div className="product-image-wrapper">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.onerror = null
                          event.currentTarget.src = fallbackProductImage
                        }}
                      />
                      {product.isNew && (
                        <div className="product-badges">
                          <span className="badge badge-new">New</span>
                        </div>
                      )}
                    </div>

                    <div className="product-body">
                      <h3>{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                      <button
                        type="button"
                        className="btn btn-primary"
                        style={{ width: '100%', marginTop: '1rem' }}
                      >
                        View Details & Pricing
                      </button>
                    </div>
                  </article>
                )
              })
            ) : (
              <div className="empty-state" style={{ gridColumn: '1 / -1' }}>
                <p className="empty-icon">🔍</p>
                <p className="empty-title">No products found</p>
                <p className="empty-text">Try adjusting your search or filter criteria</p>
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('')
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="why-us scroll-reveal elevate-on-scroll" id="why-us" aria-label="Why Choose Us">
          <div className="section-head">
            <p className="eyebrow">Why Choose Us</p>
            <h2>Homemade quality you can trust</h2>
          </div>

          <div className="why-us-grid">
            {whyChooseUs.map((item) => (
              <article className="why-card" key={item.title}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="why-card-body">
                  <span className="why-card-icon" aria-hidden="true">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials scroll-reveal elevate-on-scroll" id="testimonials" aria-label="Customer Reviews">
          <div className="section-head">
            <p className="eyebrow">Customer Reviews</p>
            <h2>What our customers are saying</h2>
          </div>

          <div className="testimonial-grid">
            {customerReviews.map((item, index) => (
              <article className="testimonial-card testimonial-card-no-image" key={item.title}>
                <div className="testimonial-body">
                  <div className="testimonial-top">
                    <span className="testimonial-icon" aria-hidden="true">{item.icon}</span>
                    <span className="testimonial-badge">0{index + 1}</span>
                  </div>
                  <p className="author testimonial-title">{item.title}</p>
                  <p className="quote">{item.text}</p>
                  <span className="testimonial-accent" aria-hidden="true"></span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section scroll-reveal elevate-on-scroll" id="about">
          <div className="about-container">
            <div className="about-content">
              <p className="eyebrow">About Us</p>
              <h2>Aruna&apos;s Home Foods</h2>
              <p className="about-description">
                At Aruna&apos;s Home Foods, we bring you the true taste of tradition, just like it&apos;s made at home.
              </p>
              <p className="about-description">
                What started as a small passion for cooking has now grown into a mission to deliver authentic Andhra-style homemade foods to every home.
              </p>
              <p className="about-description">
                We prepare every batch with fresh ingredients, rich spices, and family-style care so every bite feels authentic and memorable.
              </p>

              <div className="about-page-actions">
                <button type="button" className="btn btn-primary" onClick={() => navigate('/about')}>
                  Read Full About Us
                </button>
                <a
                  className="btn btn-secondary"
                  href={createWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Talk to Us on WhatsApp
                </a>
              </div>
            </div>
            <div className="about-image">
              <img
                src={aboutUsImage}
                alt="Aruna's Home Foods pickle jar in traditional ceramic container"
                onError={(event) => {
                  event.currentTarget.style.opacity = '0.8'
                  event.currentTarget.src = fallbackProductImage
                }}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="contact scroll-reveal elevate-on-scroll" id="contact">
        <div className="company-details-card">
          <h2>Company Details</h2>

          <div className="footer-grid">
            <section className="footer-block" aria-label="Business Details">
              <p className="company-line"><strong>Name:</strong> Aruna&apos;s Home Foods</p>
              <p className="company-line">
                <strong>Phone number:</strong>{' '}
                <a href="tel:+918618270424">+91 86182 70424</a>
              </p>
              <p className="company-line">
                <strong>Email:</strong>{' '}
                <a href="mailto:arunahomefoods23@gmail.com">arunahomefoods23@gmail.com</a>
              </p>
              <p className="company-line"><strong>Physical address:</strong> Tc palya , hallehalli main road ,bangalore-560036, Karnataka</p>
            </section>

            <section className="footer-block" aria-label="Customer Support Details">
              <h3 className="footer-title">Customer Support</h3>
              <p className="company-line"><strong>Timings:</strong> 10:00 AM to 7:00 PM</p>
              <p className="company-line"><strong>Order mode:</strong> WhatsApp and phone calls</p>
              <p className="company-line"><strong>Response time:</strong> Usually within 30 to 60 minutes</p>
            </section>

            <section className="footer-block" aria-label="Quick Links and Actions">
              <h3 className="footer-title">Quick Links</h3>
              <nav className="footer-links" aria-label="Footer navigation">
                <a href="#top">Home</a>
                <a href="#products">Products</a>
                <a href="#why-us">Why Choose Us</a>
                <a href="/about" onClick={(event) => {
                  event.preventDefault()
                  navigate('/about')
                }}>About Us</a>
              </nav>

              <div className="footer-actions">
                <a
                  className="btn btn-secondary"
                  href={createWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
                <a className="btn btn-primary" href="tel:+918618270424">Call Now</a>
              </div>
            </section>
          </div>

          <p className="footer-note">Aruna&apos;s Home Foods • Homemade taste, delivered fresh.</p>

          <div className="social-links footer-bottom-social" aria-label="Social media links">
            <a className="social-icon" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
            <a className="social-icon" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">FB</a>
            <a className="social-icon" href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">YT</a>
            <a
              className="social-icon social-icon-whatsapp"
              href={createWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              WA
            </a>
          </div>
        </div>
      </footer>

      <div className={`cart-toast ${addedMessage ? 'cart-toast-show' : ''}`} aria-live="polite">
        {addedMessage}
      </div>

      <BackToTop />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
