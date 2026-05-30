import { useReveal } from '../hooks/useReveal'

const SERVICOS = [
  { icon: 'fa-vr-cardboard', title: 'Tour Virtual 360° Imobiliário', desc: 'Casas, apartamentos, lotes, galpões, Airbnb e muito mais. Experiência imersiva que acelera a decisão de compra.' },
  { icon: 'fa-hard-hat', title: 'Acompanhamento de Obras Online', desc: 'Registros visuais semanais da evolução da obra. Transparência total para clientes e investidores, sem precisar visitar presencialmente.' },
  { icon: 'fa-cubes', title: 'Modelagem 3D com Drone', desc: 'Levantamento aéreo com tecnologia de ponta. Modelos tridimensionais detalhados para apresentações técnicas e comerciais de alto impacto.' },
  { icon: 'fa-drone', title: 'Captação Aérea com Drone', desc: 'Imagens e vídeos aéreos profissionais que valorizam o imóvel e atraem olhares nos portais.' },
  { icon: 'fa-clipboard-check', title: 'Vistorias Prediais Visuais', desc: 'Documentação técnica completa com registro fotográfico e em vídeo para avaliação, manutenção e segurança.' },
]

export default function ServicosSection() {
  const headerRef = useReveal()

  return (
    <section className="section-servicos" id="servicos" aria-label="Serviços">
      <div className="container">
        <div ref={headerRef} className="reveal">
          <span className="section-tag">Nossos serviços</span>
          <h2 className="section-title">Soluções completas em imagem imobiliária</h2>
        </div>
        <div className="servicos-grid">
          {SERVICOS.map((svc, i) => (
            <ServicoCard key={i} {...svc} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicoCard({ icon, title, desc, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`servico-card reveal delay-${delay}`}>
      <div className="servico-icon" aria-hidden="true">
        <i className={`fas ${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
