import { useState, useCallback, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

const WHATSAPP = 'https://wa.me/5527999087595'

export default function DemoSecao() {
  const [loaded, setLoaded] = useState(false)
  const headerRef = useReveal()
  const wrapRef = useReveal()
  const ctaRef = useReveal()
  const placeholderRef = useRef(null)

  const handleLoad = useCallback(() => {
    setLoaded(true)
  }, [])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleLoad()
    }
  }, [handleLoad])

  return (
    <section className="section-demo" id="demo" aria-label="Demonstração do tour virtual">
      <div className="container">
        <div ref={headerRef} className="reveal">
          <span className="section-tag">Demonstração ao vivo</span>
          <h2 className="section-title">Experimente agora. Isso é o que seu cliente vai ver.</h2>
          <p className="section-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Tour virtual real, produzido pela Vista Real 360. Navegue com o mouse ou toque na tela.
          </p>
        </div>
        <div ref={wrapRef} className="demo-iframe-wrap reveal" id="demoWrap">
          {loaded ? (
            <iframe
              src="https://tour.panoee.net/geanvix-galpao-br101"
              title="Tour virtual 360° demonstrativo — Vista Real 360"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div
              ref={placeholderRef}
              className="demo-placeholder"
              role="button"
              tabIndex={0}
              aria-label="Clique para carregar o tour virtual 360°"
              onClick={handleLoad}
              onKeyDown={handleKeyDown}
            >
              <div className="demo-play-btn" aria-hidden="true">
                <i className="fas fa-play"></i>
              </div>
              <div className="demo-placeholder-text">Clique para carregar o tour</div>
              <div className="demo-placeholder-sub">Virtual 360° — interativo e imersivo</div>
            </div>
          )}
        </div>
        <div ref={ctaRef} className="demo-cta reveal delay-2">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener"
            className="btn-secondary"
            aria-label="Quero um tour assim para os meus imóveis"
          >
            <i className="fab fa-whatsapp" aria-hidden="true"></i>
            Quero um tour assim para os meus imóveis
          </a>
        </div>
      </div>
    </section>
  )
}
