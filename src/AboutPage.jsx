import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import logo from './images/logo.jpeg'
import fallbackProductImage from './assets/hero.png'
import aboutUsImage from './images/Aboutus-pic.jpg'
import { DEFAULT_WHATSAPP_MESSAGE, WHATSAPP_DISPLAY, createWhatsAppLink } from './utils/whatsapp'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function AboutPage() {
  const navigate = useNavigate()
  const [isTopbarScrolled, setIsTopbarScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsTopbarScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="site-wrapper">
      <header className={`topbar ${isTopbarScrolled ? 'topbar-scrolled' : ''}`}>
        <a className="brand" href="/" onClick={(event) => {
          event.preventDefault()
          navigate('/')
        }} aria-label="Aruna's Home Foods home">
          <img src={logo} alt="Aruna's Home Foods logo" />
          <span>Aruna&apos;s Home Foods</span>
        </a>

        <div className="topbar-actions">
          <button type="button" className="order-link order-link-btn" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </header>

      <main className="about-page-main" id="top">
        <section className="about-page-card" aria-label="About Aruna's Home Foods">
          <div className="about-page-grid">
            <div className="about-content">
              <p className="eyebrow">About Us</p>
              <h1>Aruna&apos;s Home Foods</h1>

              <p className="about-description">
                At Aruna&apos;s Home Foods, we bring you the true taste of tradition, just like it&apos;s made at home.
              </p>

              <p className="about-description">
                What started as a small passion for cooking has now grown into a mission to deliver authentic Andhra-style homemade foods to every home. Our recipes are inspired by age-old traditions, passed down through generations, keeping the original flavors alive.
              </p>

              <p className="about-description">
                We believe food is not just about taste, it&apos;s about memories, love, and comfort. That&apos;s why every product we make is prepared with the same care and quality as if we are cooking for our own family.
              </p>

              <p className="about-description">
                Our specialty lies in Andhra-style pickles, especially our customer-favorite Chicken Pickle, made with fresh ingredients, rich spices, and traditional methods that give a bold, unforgettable flavor.
              </p>

              <h3 className="about-block-title">What Makes Us Special</h3>
              <ul className="about-points">
                <li>100% Homemade and Authentic</li>
                <li>True Andhra-style flavors</li>
                <li>Fresh and high-quality ingredients</li>
                <li>No artificial preservatives</li>
                <li>Made with love and care</li>
              </ul>

              <h3 className="about-block-title">Our Mission</h3>
              <p className="about-description">
                To deliver fresh, authentic, and high-quality homemade foods that bring the comfort of home to your plate.
              </p>

              <h3 className="about-block-title">Our Vision</h3>
              <p className="about-description">
                To become a trusted name for homemade foods, known for quality, tradition, and taste.
              </p>

              <p className="about-signoff">Not Just Food... It&apos;s a Memory from Home</p>

              <div className="about-page-actions">
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
            </div>

            <div className="about-image">
              <img
                src={aboutUsImage}
                alt="Traditional homemade Andhra pickle"
                onError={(event) => {
                  event.currentTarget.style.opacity = '0.8'
                  event.currentTarget.src = fallbackProductImage
                }}
              />
            </div>
          </div>
        </section>
      </main>

      <FloatingWhatsApp />
    </div>
  )
}

export default AboutPage
