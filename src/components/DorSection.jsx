import { useReveal } from '../hooks/useReveal'

const DORES = [
  {
    icon: '🕐',
    title: 'Visitas que não convertem',
    desc: 'Você agenda, prepara, desloca… e o comprador desiste porque "não era bem isso".',
  },
  {
    icon: '📉',
    title: 'Anúncio igual ao de todo mundo',
    desc: 'Fotos comuns num mar de imóveis iguais. O cliente nem clica no seu anúncio.',
  },
  {
    icon: '💸',
    title: 'Imóvel parado é dinheiro perdido',
    desc: 'Cada dia sem vender é prejuízo. E a concorrência já está se diferenciando.',
  },
]

export default function DorSection() {
  const headerRef = useReveal()
  const cardRefs = [useReveal(), useReveal(), useReveal()]

  return (
    <section className="section-dor" id="problema" aria-label="Problemas que resolvemos">
      <div className="container">
        <div ref={headerRef} className="reveal">
          <span className="section-tag">Você reconhece?</span>
          <h2 className="section-title">Os problemas que todo corretor enfrenta</h2>
          <p className="section-sub">Se você já passou por alguma dessas situações, está na hora de mudar de estratégia.</p>
        </div>
        <div className="dor-grid">
          {DORES.map((dor, i) => (
            <div key={i} ref={cardRefs[i]} className={`dor-card reveal delay-${i + 1}`}>
              <span className="dor-icon" aria-hidden="true">{dor.icon}</span>
              <h3>{dor.title}</h3>
              <p>{dor.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
