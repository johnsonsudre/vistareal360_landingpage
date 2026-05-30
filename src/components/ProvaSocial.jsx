import { useReveal } from '../hooks/useReveal'

const STATS = [
  { value: '76%', context: 'Crescimento do mercado imobiliário capixaba no 1º trimestre de 2025', laranja: false },
  { value: '+19.000', context: 'Unidades em construção na Grande Vitória em 2026', laranja: true },
  { value: '3x', context: 'Mais rápido: imóveis com tour virtual vendem até 3 vezes mais rápido*', laranja: false },
  { value: '87%', context: 'Dos compradores pesquisam online antes de visitar um imóvel presencialmente*', laranja: true },
]

export default function ProvaSocial() {
  const headerRef = useReveal()

  return (
    <section className="section-prova" id="prova-social" aria-label="Prova social">
      <div className="container">
        <div ref={headerRef} className="reveal">
          <span className="section-tag">Dados do mercado</span>
          <h2 className="section-title">Números que falam por si</h2>
        </div>
        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <StatItem key={i} {...stat} delay={i + 1} />
          ))}
        </div>
        <p className="stats-footnote">
          *Dados de mercado amplamente documentados no setor imobiliário digital. Fontes: Grande Vitória Notícias, A Gazeta ES, NAR (National Association of Realtors)
        </p>
      </div>
    </section>
  )
}

function StatItem({ value, context, laranja, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`stat-item reveal delay-${delay}`}>
      <div className={`stat-number${laranja ? ' laranja' : ''}`}>{value}</div>
      <p className="stat-context">{context}</p>
    </div>
  )
}
