import { useParallax } from '../hooks/useParallax'

const WHATSAPP = 'https://wa.me/5527999087595'

export default function Hero() {
  const parallaxRef = useParallax({ speed: 0.3, maxOffset: 300 })

  return (
    <section className="hero" id="hero" aria-label="Hero">
      <div
        className="hero-bg"
        ref={parallaxRef}
        role="img"
        aria-label="Homem usando óculos VR em imóvel de alto padrão"
      ></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <img
          className="hero-logo"
          src="/images/VISTA REAL 360 - logo com slogan PARA FUNDO ESCURO.png"
          alt="Vista Real 360 — Não é imagem, é percepção de valor"
          loading="eager"
        />
        <h1 className="reveal visible">
          Seu imóvel está parado porque ninguém consegue <em>imaginar como é por dentro.</em>
        </h1>
        <p className="reveal visible delay-1">
          Tours virtuais 360° que vendem antes da visita presencial. Feito para corretores que querem resultados reais.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener"
          className="btn-primary reveal visible delay-2"
          aria-label="Quero vender mais rápido, falar no WhatsApp"
        >
          <i className="fab fa-whatsapp" aria-hidden="true"></i>
          Quero vender mais rápido
        </a>
        <div className="hero-badge reveal visible delay-3">
          <i className="fas fa-chart-line" aria-hidden="true"></i>
          Mercado imobiliário capixaba cresceu <strong>76%</strong> em 2025 — você está aproveitando?
        </div>
      </div>
    </section>
  )
}
