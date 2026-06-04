import { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useCenterHighlight } from '../hooks/useCenterHighlight'
import { useInView } from '../hooks/useInView'
import { useParallax } from '../hooks/useParallax'

const WHATSAPP = 'https://wa.me/5527999087595'

const HERO_SLIDES = [
  {
    h1: <>Tecnologia que transforma visitas em <em>vendas</em></>,
    p: 'Da captação imersiva ao atendimento inteligente — a Vista Real 360 tem a solução completa para o corretor moderno vender mais e melhor.'
  },
  {
    h1: <>Seu próximo corretor trabalha <em>24 horas por dia</em>.</>,
    p: 'Tour Virtual 360 + IA que atende clientes, apresenta imóveis compatíveis e agenda visitas automaticamente.'
  },
  {
    h1: <>Transforme visitantes em <em>visitas agendadas</em> automaticamente.</>,
    p: 'A Vista Real 360 combina Tour Virtual e Inteligência Artificial para qualificar leads, apresentar imóveis e preencher sua agenda.'
  },
  {
    h1: <><em>Venda</em> mais imóveis sem aumentar sua equipe.</>,
    p: 'Uma IA atende seus clientes, entende suas necessidades, mostra os imóveis ideais e agenda visitas enquanto você fecha negócios.'
  },
]

const SERVICOS = [
  {
    icon: 'fa-vr-cardboard',
    title: 'Tour Virtual 360°',
    desc: 'Experiências imersivas que vendem antes da visita presencial.',
    bullets: [
      'Funciona como um plantão de vendas 24 horas — visite o imóvel a qualquer momento pelo celular',
      'Explore os ambientes no próprio ritmo, observando detalhes e entendendo a distribuição dos espaços',
      'Compartilhe o tour com quem precisa aprovar a decisão, mesmo estando em outra cidade',
      'Anúncios com tour virtual recebem até 60% mais visualizações',
      'Quem agenda uma visita após o tour já conhece o imóvel — visitas mais qualificadas',
    ],
    to: '/tourvirtual360',
  },
  {
    icon: 'fa-robot',
    title: 'Agente de IA',
    desc: 'Inteligência artificial que atende seus leads no WhatsApp 24h.',
    bullets: [
      'Responde no WhatsApp em segundos — seu lead nunca fica esperando, mesmo fora do horário comercial',
      'Qualifica compradores fazendo perguntas inteligentes e agenda visitas automaticamente',
      'Faz follow-up automático enquanto você dorme — nenhum lead esfriado por falta de retorno',
      'Atende no WhatsApp 24h — tire dúvidas sobre o imóvel a qualquer momento, sem fila de espera',
      'Envia novos imóveis que combinam com seu perfil e agenda visitas sem burocracia',
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

  const listRefs = [useRef(null), useRef(null)]
  const highlighted = useCenterHighlight(listRefs)

  const [tourRef, tourGlow] = useInView({ rootMargin: '-48% 0px -48% 0px' })
  const [iaRef, iaGlow] = useInView({ rootMargin: '-48% 0px -48% 0px' })

  const heroBgRef = useParallax({ speed: 0.3, maxOffset: 300 })

  const [activeSlide, setActiveSlide] = useState(0)
  const [leavingSlide, setLeavingSlide] = useState(null)
  const buttonsRef = useRef(null)
  const prevButtonsRect = useRef(null)
  const logosRef = useRef(null)
  const prevLogosRect = useRef(null)
  const brandRef = useRef(null)
  const plusRef = useRef(null)
  const brainRef = useRef(null)

  const nextSlide = useCallback(() => {
    if (buttonsRef.current)
      prevButtonsRect.current = buttonsRef.current.getBoundingClientRect()
    if (logosRef.current)
      prevLogosRect.current = logosRef.current.getBoundingClientRect()
    setLeavingSlide(activeSlide)
    setActiveSlide(prev => (prev + 1) % HERO_SLIDES.length)
  }, [activeSlide])

  useEffect(() => {
    if (leavingSlide !== null) {
      const id = setTimeout(() => setLeavingSlide(null), 600)
      return () => clearTimeout(id)
    }
  }, [leavingSlide])

  useLayoutEffect(() => {
    const applyFlip = (el, prevRect) => {
      if (!el || !prevRect) return
      const lastRect = el.getBoundingClientRect()
      const dy = prevRect.top - lastRect.top
      if (dy === 0) return
      el.style.transform = `translateY(${dy}px)`
      el.style.transition = 'none'
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.transition = 'transform 0.5s ease'
          el.style.transform = ''
        })
      })
      const handler = () => {
        el.style.transform = ''
        el.style.transition = ''
        el.removeEventListener('transitionend', handler)
      }
      el.addEventListener('transitionend', handler)
    }

    const btnRect = prevButtonsRect.current
    const logoRect = prevLogosRect.current
    prevButtonsRect.current = null
    prevLogosRect.current = null

    applyFlip(buttonsRef.current, btnRect)
    applyFlip(logosRef.current, logoRect)

    if (logoRect) {
      const brand = brandRef.current
      const plus = plusRef.current
      const brain = brainRef.current
      if (brand && plus && brain) {
        const s = window.scrollY
        const brandBase = s * 0.08
        const plusBase  = s * 0.18
        const brainBase = s * 0.12

        brand.style.transform = `translateY(${brandBase + 6}px)`
        plus.style.transform  = `translateY(${plusBase - 4}px)`
        brain.style.transform = `translateY(${brainBase + 3}px)`

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            brand.style.transition = 'transform 0.5s ease'
            plus.style.transition  = 'transform 0.5s ease'
            brain.style.transition = 'transform 0.5s ease'
            brand.style.transform = `translateY(${brandBase}px)`
            plus.style.transform  = `translateY(${plusBase}px)`
            brain.style.transform = `translateY(${brainBase}px)`

            const cleanup = () => {
              brand.style.transition = ''
              plus.style.transition  = ''
              brain.style.transition = ''
              brand.removeEventListener('transitionend', cleanup)
            }
            brand.addEventListener('transitionend', cleanup)
          })
        })
      }
    }
  }, [activeSlide])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const brand = brandRef.current
    const plus = plusRef.current
    const brain = brainRef.current
    if (!brand || !plus || !brain) return

    let rafId = null

    const update = () => {
      const s = window.scrollY
      brand.style.transform = `translateY(${s * 0.08}px)`
      plus.style.transform  = `translateY(${s * 0.18}px)`
      brain.style.transform = `translateY(${s * 0.12}px)`
      rafId = null
    }

    const onScroll = () => {
      if (rafId === null) rafId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    if (leavingSlide !== null) return
    const id = setInterval(nextSlide, 8000)
    return () => clearInterval(id)
  }, [leavingSlide, nextSlide])

  return (
    <main className="page-home">
      {/* HERO */}
      <section className="hero home-hero" aria-label="Hero">
        <div ref={heroBgRef} className="home-hero-bg" />
        <div className="home-hero-overlay" />
        <div className="hero-content">
          <div ref={logosRef} className="hero-logo-group">
            <img
              ref={brandRef}
              className="hero-logo-brand"
              src="/images/VISTA REAL 360 - logo com texto - fundo escuro.png"
              alt="Vista Real 360"
              loading="eager"
            />
            <img
              ref={plusRef}
              className="hero-logo-plus"
              src="/images/sinal de mais - plus.png"
              alt=""
              aria-hidden="true"
              loading="eager"
            />
            <img
              ref={brainRef}
              className="hero-logo-brain"
              src="/images/whatsapp-agent-ia-brain.png"
              alt="WhatsApp"
              loading="eager"
            />
          </div>
          <div
            ref={el => { heroRef.current = el }}
            className="reveal hero-carousel"
          >
            {HERO_SLIDES.map((s, i) => {
              let cls = 'hero-carousel-slide'
              if (i === activeSlide) cls += ' active'
              else if (i === leavingSlide) cls += ' leaving'
              return (
                <div key={i} className={cls}>
                  <h1 className="hero-carousel-h1">{s.h1}</h1>
                  <p className="hero-carousel-p">{s.p}</p>
                </div>
              )
            })}
          </div>
          <div ref={buttonsRef} className="home-hero-actions reveal visible delay-1">
            <Link to="/tourvirtual360" ref={tourRef} className={`btn-primary${tourGlow ? ' glow' : ''}`}>
              <i className="fas fa-vr-cardboard" aria-hidden="true"></i>
              Tour Virtual 360°
            </Link>
            <Link to="/agente_ia" ref={iaRef} className={`btn-primary${iaGlow ? ' glow' : ''}`}>
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
                <ul className="home-card-bullets" ref={listRefs[i]}>
                  {svc.bullets.map((b, j) => (
                    <li key={j} className={j === highlighted[i] ? 'highlighted' : ''}>
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
          <img
            className="hero-logo"
            src="/images/VISTA REAL 360 - logo com slogan PARA FUNDO ESCURO.png"
            alt="Vista Real 360"
            loading="eager"
          />
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
    </main>
  )
}
