import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const MobileMenu = ({ itemCount }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavClick = (path) => {
    navigate(path)
    setIsOpen(false)
  }

  return (
    <div className="mobile-menu-container">
      <button
        className={`menu-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsOpen(false)}>
          <nav className="mobile-menu">
            <button onClick={() => handleNavClick('/')} className="mobile-menu-link">
              Home
            </button>
            <button onClick={() => handleNavClick('/cart')} className="mobile-menu-link">
              Cart ({itemCount})
            </button>
            <a href="#about" className="mobile-menu-link" onClick={() => setIsOpen(false)}>
              About Us
            </a>
            <a href="#contact" className="mobile-menu-link" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}
