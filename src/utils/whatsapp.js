export const WHATSAPP_NUMBER = '918618270424'
export const WHATSAPP_DISPLAY = '+91 86182 70424'

export const DEFAULT_WHATSAPP_MESSAGE = "Hi, I want to order from Aruna's Home Foods."

export const createWhatsAppLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const buildOrderMessage = ({ name, size, price }, cut) => {
  const baseMessage = `Hi, I want to order ${name}. Quantity: ${size}. Price: ${price}`

  return baseMessage
}

export const createOrderLink = (product, cut) =>
  createWhatsAppLink(buildOrderMessage(product, cut))
