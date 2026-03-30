import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CART_STORAGE_KEY = 'aruna_home_foods_cart'

const CartContext = createContext(null)

const parsePrice = (priceText) => {
  const value = Number(String(priceText).replace(/[^\d.]/g, ''))
  return Number.isFinite(value) ? value : 0
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const savedCart = window.localStorage.getItem(CART_STORAGE_KEY)
    if (!savedCart) {
      return
    }

    try {
      const parsed = JSON.parse(savedCart)
      if (Array.isArray(parsed)) {
        setCartItems(parsed)
      }
    } catch {
      setCartItems([])
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === product.id)

      if (existingIndex !== -1) {
        return prevItems.map((item, index) =>
          index === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
        )
      }

      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: 1
        }
      ]
    })
  }

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    )
  }

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id !== id) {
          return item
        }

        if (item.quantity <= 1) {
          return item
        }

        return { ...item, quantity: item.quantity - 1 }
      })
    )
  }

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const itemCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  )

  const totalPrice = useMemo(
    () => cartItems.reduce((total, item) => total + parsePrice(item.price) * item.quantity, 0),
    [cartItems]
  )

  const value = {
    cartItems,
    itemCount,
    totalPrice,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
