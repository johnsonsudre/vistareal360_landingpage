import { useReveal } from '../hooks/useReveal'

const BENEFICIOS = [
  'O comprador visita o imóvel antes de sair de casa',
  'Filtra curiosos e atrai leads qualificados',
  'Seu anúncio se destaca em qualquer portal',
  'Disponível 24h, 7 dias por semana',
  'Aumenta a percepção de valor do imóvel',
  'Entrega rápida e profissional',
]

export default function SolucaoSection() {
  const headerRef = useReveal()
  const leftRef = useReveal()
  const rightRef = useReveal()

  return (
    <section className="section-solucao" id="solucao" aria-label="Solução">
      <div className="container">
        <div ref={headerRef} className="reveal">
          <span className="section-tag">A solução</span>
          <h2 className="section-title">Tours virtuais 360° que transformam curiosos em compradores sérios</h2>
          <p className="section-sub">
            A Vista Real 360 cria experiências imersivas que permitem ao comprador explorar o imóvel como se estivesse lá — de qualquer lugar, a qualquer hora. O resultado: mais visitas qualificadas, menos tempo perdido, mais velocidade na venda.
          </p>
        </div>
        <div className="solucao-grid">
          <div ref={leftRef} className="solucao-image reveal-left">
            <img
              src="/images/mao_segurando_tablet_com_tour_virtual_na_tela_ambiente_lilas.jpg"
              alt="Tablet exibindo tour virtual 360° de imóvel"
              loading="lazy"
            />
          </div>
          <div ref={rightRef} className="reveal-right">
            <ul className="solucao-benefits">
              {BENEFICIOS.map((text, i) => (
                <li key={i}>
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
