import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useCenterHighlight } from '../hooks/useCenterHighlight'

const WHATSAPP = 'https://wa.me/5527999087595'

const PLANOS = [
  {
    title: 'Corretor Autônomo',
    desc: 'Ideal para quem tem imóveis avulsos',
    features: [
      'Tour por imóvel + hospedagem mensal',
      'Entrega rápida',
      'Sem fidelidade obrigatória',
    ],
    ctaLabel: 'Quero saber o valor',
    ariaLabel: 'Quero saber o valor para corretor autônomo',
  },
  {
    title: 'Imobiliária',
    desc: 'Para quem tem carteira ativa de imóveis',
    features: [
      'Plano mensal com múltiplos tours',
      'Gestão e atualização contínua',
      'Suporte dedicado',
    ],
    ctaLabel: 'Quero uma proposta',
    ariaLabel: 'Quero uma proposta para imobiliária',
  },
]

export default function PlanosSection() {
  const headerRef = useReveal()
  const listRefs = [useRef(null), useRef(null)]
  const highlighted = useCenterHighlight(listRefs)

  return (
    <section className="section-planos" id="planos" aria-label="Planos">
      <div className="container">
        <div ref={headerRef} className="reveal">
          <span className="section-tag">Sob medida para você</span>
          <h2 className="section-title">Planos adaptados para a sua realidade</h2>
          <p className="section-sub">
            Cada corretor e imobiliária tem um volume e ritmo diferente. Por isso criamos pacotes personalizados. Fale com a gente e montamos a melhor solução para o seu negócio.
          </p>
        </div>
        <div className="planos-grid">
          {PLANOS.map((plano, i) => (
            <PlanoCard key={i} {...plano} listRef={listRefs[i]} highlightIdx={highlighted[i]} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PlanoCard({ title, desc, features, ctaLabel, ariaLabel, delay, listRef, highlightIdx }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`plano-card reveal delay-${delay}`}>
      <h3>{title}</h3>
      <p className="plano-desc">{desc}</p>
      <ul className="plano-features" ref={listRef}>
        {features.map((feat, i) => (
          <li key={i} className={i === highlightIdx ? 'highlighted' : ''}>
            <i className="fas fa-check" aria-hidden="true"></i>
            {feat}
          </li>
        ))}
      </ul>
      <div className="plano-cta">
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener"
          className="btn-secondary"
          aria-label={ariaLabel}
        >
          <i className="fab fa-whatsapp" aria-hidden="true"></i>
          {ctaLabel}
        </a>
      </div>
    </div>
  )
}
