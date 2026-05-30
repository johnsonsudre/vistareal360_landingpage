import { useReveal } from '../hooks/useReveal'

const PASSOS = [
  { num: '01', emoji: '📞', title: 'Você nos chama', desc: 'Entre em contato pelo WhatsApp. Sem burocracia, sem formulário longo.' },
  { num: '02', emoji: '📅', title: 'Agendamos a captação', desc: 'Vamos até o imóvel no melhor horário para você ou seu cliente.' },
  { num: '03', emoji: '🎬', title: 'Produzimos o tour', desc: 'Captação profissional e edição do tour virtual 360° em até 48h.' },
  { num: '04', emoji: '🔗', title: 'Você publica e vende', desc: 'Recebe o link do tour para compartilhar em portais, WhatsApp, redes sociais e seu site.' },
]

export default function ComoFunciona() {
  const headerRef = useReveal()

  return (
    <section className="section-como" id="como-funciona" aria-label="Como funciona">
      <div className="container">
        <div ref={headerRef} className="reveal">
          <span className="section-tag">Processo simples</span>
          <h2 className="section-title">Como funciona</h2>
          <p className="section-sub">4 passos para transformar a forma como você vende imóveis.</p>
        </div>
        <div className="como-timeline">
          {PASSOS.map((passo, i) => (
            <PassoItem key={i} {...passo} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PassoItem({ num, emoji, title, desc, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`como-step reveal delay-${delay}`}>
      <span className="como-step-num" aria-hidden="true">{num}</span>
      <div className="como-step-content">
        <h3>{emoji} {title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}
