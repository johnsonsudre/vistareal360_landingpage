import { useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'

const WHATSAPP = 'https://wa.me/5527999087595'

export default function CtaFinal() {
  const h2Ref = useReveal()
  const pRef = useReveal()
  const aRef = useReveal()

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const bg = document.querySelector('.cta-final-bg')
    if (!bg) return

    let rafId = null

    const update = () => {
      const parent = bg.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      const viewH = window.innerHeight
      const progress = 1 - (rect.top + rect.height) / (viewH + rect.height)
      const offset = (progress * 2 - 1) * 150
      bg.style.backgroundPosition = `center calc(50% + ${offset}px)`
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

  return (
    <section className="section-cta-final" id="fale-conosco" aria-label="CTA Final">
      <div
        className="cta-final-bg"
        role="img"
        aria-label="Homem usando óculos VR no interior de casa de alto padrão"
      ></div>
      <div className="cta-final-overlay"></div>
      <div className="cta-final-content">
        <h2 ref={h2Ref} className="reveal">
          Enquanto você lê isso, outro corretor já está usando tour virtual para vender mais rápido.
        </h2>
        <p ref={pRef} className="reveal delay-1">
          Não deixe seu imóvel ficar parado. Fale agora com a Vista Real 360 e receba uma proposta personalizada.
        </p>
        <a
          ref={aRef}
          href={WHATSAPP}
          target="_blank"
          rel="noopener"
          className="btn-primary reveal delay-2"
          aria-label="Falar agora no WhatsApp"
        >
          <i className="fab fa-whatsapp" aria-hidden="true"></i>
          Falar agora no WhatsApp
        </a>
      </div>
    </section>
  )
}
