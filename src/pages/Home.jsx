import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const WHATSAPP = 'https://wa.me/5527999087595'

const SERVICOS = [
  {
    icon: 'fa-vr-cardboard',
    title: 'Tour Virtual 360°',
    desc: 'Experiências imersivas que vendem antes da visita presencial.',
    bullets: [
      'Comprador visita o imóvel sem sair de casa',
      'Filtra curiosos e atrai leads qualificados',
      'Seu anúncio se destaca em qualquer portal',
    ],
    to: '/tourvirtual360',
  },
  {
    icon: 'fa-robot',
    title: 'Agente de IA',
    desc: 'Inteligência artificial que atende seus leads no WhatsApp 24h.',
    bullets: [
      'Responde em segundos, nunca perde um lead',
      'Qualifica compradores e agenda visitas',
      'Follow-up automático enquanto você dorme',
    ],
    to: '/agente_ia',
  },
]

export default function Home() {
  const heroRef = useReveal()
  const cardRefs = [useReveal(), useReveal()]
  const h2Ref = useReveal()
  const pRef = useReveal()
  const aRef = useReveal()

  return (
    <>
      {/* HERO */}
      <section className="home-hero" aria-label="Hero">
        <div className="home-hero-bg" />
        <div className="home-hero-overlay" />
        <div className="hero-content">
          <img
            className="hero-logo"
            src="/images/VISTA REAL 360 - logo com slogan PARA FUNDO ESCURO.png"
            alt="Vista Real 360"
            loading="eager"
          />
          <div ref={heroRef} className="reveal">
            <h1>Tecnologia que transforma visitas em <em>vendas</em></h1>
            <p>
              Da captação imersiva ao atendimento inteligente — a Vista Real 360 tem a solução
              completa para o corretor moderno vender mais e melhor.
            </p>
          </div>
          <div className="home-hero-actions reveal visible delay-1">
            <Link to="/tourvirtual360" className="btn-primary">
              <i className="fas fa-vr-cardboard" aria-hidden="true"></i>
              Tour Virtual 360°
            </Link>
            <Link to="/agente_ia" className="btn-secondary">
              <i className="fas fa-robot" aria-hidden="true"></i>
              Agente de IA
            </Link>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="home-services" aria-label="Serviços">
        <div className="container">
          <div className="home-services-grid">
            {SERVICOS.map((svc, i) => (
              <div key={i} ref={cardRefs[i]} className={`home-card reveal delay-${i + 1}`}>
                <div className="home-card-icon" aria-hidden="true">
                  <i className={`fas ${svc.icon}`}></i>
                </div>
                <h3>{svc.title}</h3>
                <p className="home-card-desc">{svc.desc}</p>
                <ul className="home-card-bullets">
                  {svc.bullets.map((b, j) => (
                    <li key={j}>
                      <i className="fas fa-check-circle" aria-hidden="true"></i>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to={svc.to} className="btn-secondary home-card-cta">
                  Saiba mais
                  <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta-final" aria-label="CTA Final">
        <div className="home-cta-bg" />
        <div className="cta-final-overlay" />
        <div className="cta-final-content">
          <h2 ref={h2Ref} className="reveal">
            Pronto para vender mais rápido com tecnologia inteligente?
          </h2>
          <p ref={pRef} className="reveal delay-1">
            Descubra qual solução da Vista Real 360 é ideal para o seu momento.
          </p>
          <a
            ref={aRef}
            href={WHATSAPP}
            target="_blank"
            rel="noopener"
            className="btn-primary reveal delay-2"
          >
            <i className="fab fa-whatsapp" aria-hidden="true"></i>
            Falar agora no WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
