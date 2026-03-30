import { DEFAULT_WHATSAPP_MESSAGE, createWhatsAppLink } from '../utils/whatsapp'

function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={createWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      WhatsApp
    </a>
  )
}

export default FloatingWhatsApp
