const WHATSAPP = 'https://wa.me/5527999087595'

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener"
      className="whatsapp-float"
      aria-label="Falar no WhatsApp"
    >
      <i className="fab fa-whatsapp" aria-hidden="true"></i>
      <span className="whatsapp-tooltip">Falar no WhatsApp</span>
    </a>
  )
}
