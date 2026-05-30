import { useScrollNav } from '../hooks/useScrollNav'

const WHATSAPP = 'https://wa.me/5527999087595'

export default function Nav() {
  const scrolled = useScrollNav(60)

  return (
    <nav className={`nav-bar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Navegação principal">
      <a href="#" aria-label="Vista Real 360 - Início">
        <img
          className="nav-logo"
          src="/images/VISTA REAL 360 - logo.png"
          alt="Vista Real 360"
          loading="lazy"
        />
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener"
        className="nav-cta"
        aria-label="Falar no WhatsApp"
      >
        <i className="fab fa-whatsapp" aria-hidden="true"></i>
        Fale conosco
      </a>
    </nav>
  )
}
