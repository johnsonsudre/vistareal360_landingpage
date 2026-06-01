import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useCenterHighlight } from '../hooks/useCenterHighlight'

const WHATSAPP = 'https://wa.me/5527999087595'

export default function AgenteIA() {
  return (
    <main className="page-agente-ia">
      <HeroIA />
      <DorIA />
      <SolucaoIA />
      <ComoIA />
      <ProvaIA />
      <PlanosIA />
      <CtaIA />
    </main>
  )
}

/* ---- HERO ---- */
function HeroIA() {
  return (
    <section className="hero hero-ia" aria-label="Hero">
      <div className="hero-bg hero-bg-ia" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="reveal visible">
          <h1>
            O lead mandou mensagem agora. <em>Quanto tempo até você responder?</em>
          </h1>
          <p>
            Corretor que responde primeiro, vende primeiro. Seu Agente de IA no WhatsApp
            24 horas por dia — responde em segundos, qualifica compradores e agenda visitas
            enquanto você foca em fechar negócios.
          </p>
        </div>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener"
          className="btn-primary reveal visible delay-2"
        >
          <i className="fab fa-whatsapp" aria-hidden="true"></i>
          Quero um Agente de IA agora
        </a>
        <div className="hero-badge reveal visible delay-3">
          <i className="fas fa-bolt" aria-hidden="true"></i>
          Leads respondidos em até 5 minutos vendem <strong>100x mais</strong>
        </div>
      </div>
    </section>
  )
}

/* ---- DOR ---- */
const DORES = [
  {
    icon: '⏰',
    title: 'Fama de demorar para responder',
    desc: 'O corretor está em visita, em reunião, dirigindo. O lead espera. E enquanto espera, já chamou outro corretor. Você perdeu o negócio antes mesmo de saber que ele existia.',
  },
  {
    icon: '📱',
    title: 'Se não atendeu, o concorrente atendeu',
    desc: 'Lead que não é respondido em minutos procura a concorrência. No mercado imobiliário, velocidade é tudo — e o corretor sozinho não consegue estar disponível 24 horas por dia.',
  },
  {
    icon: '🔄',
    title: 'Perguntas repetitivas consomem seu dia',
    desc: '"Ainda está disponível?" "Qual o valor?" "Aceita financiamento?" Horas perdidas respondendo as mesmas perguntas. Tempo que poderia estar fechando vendas.',
  },
]

function DorIA() {
  const headerRef = useReveal()
  const cardRefs = [useReveal(), useReveal(), useReveal()]

  return (
    <section className="section-dor" aria-label="Problemas que resolvemos">
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

/* ---- SOLUCAO ---- */
function SolucaoIA() {
  const headerRef = useReveal()
  const contentRef = useReveal()
  const solucaoListRef = useRef(null)
  const [highlighted] = useCenterHighlight([solucaoListRef])

  return (
    <section className="section-solucao" aria-label="Solução">
      <div className="container">
        <div ref={headerRef} className="reveal">
          <span className="section-tag">A solução</span>
          <h2 className="section-title">Um agente de IA que atende, qualifica e agenda para você — 24 horas por dia</h2>
          <p className="section-sub">
            O Agente de IA da Vista Real 360 integra ao seu WhatsApp e começa a trabalhar imediatamente.
            Responde leads com informações precisas sobre seus imóveis, faz perguntas para qualificar
            compradores sérios, agenda visitas na sua agenda e faz follow-up automático. Enquanto você
            dorme, dirige ou atende outro cliente, ele segue vendendo.
          </p>
        </div>
        <div ref={contentRef} className="reveal">
          <ul className="solucao-benefits" style={{ maxWidth: 700, marginTop: 32 }} ref={solucaoListRef}>
            {[
              'Atende seus leads no WhatsApp em segundos, 24 horas por dia',
              'Qualifica compradores (orçamento, prazo, local, financiamento)',
              'Envia imóveis do seu portfólio automaticamente',
              'Agenda visitas na sua agenda sem você tocar',
              'Faz follow-up automático — leads nunca mais esfriam',
              'Você nunca mais perde um lead por demora na resposta',
            ].map((text, i) => (
              <li key={i} className={i === highlighted ? 'highlighted' : ''}>
                <i className="fas fa-check-circle" aria-hidden="true"></i>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---- COMO FUNCIONA ---- */
const PASSOS = [
  { num: '01', title: '🔌 Conecta', desc: 'Integramos seu Agente de IA ao seu WhatsApp e ao seu portfólio de imóveis.' },
  { num: '02', title: '🧠 Treina', desc: 'Ensinamos o agente sobre sua região, seus imóveis e seu estilo de atendimento.' },
  { num: '03', title: '▶️ Ativa', desc: 'O agente entra em operação. Começa a receber e responder leads imediatamente.' },
  { num: '04', title: '📈 Vende', desc: 'Você recebe leads qualificados e visitas agendadas. Só aparece para fechar.' },
]

function ComoIA() {
  const headerRef = useReveal()

  return (
    <section className="section-como" aria-label="Como funciona">
      <div className="container">
        <div ref={headerRef} className="reveal">
          <span className="section-tag">Processo simples</span>
          <h2 className="section-title">Como funciona</h2>
          <p className="section-sub">4 passos para nunca mais perder um lead.</p>
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

function PassoItem({ num, title, desc, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`como-step reveal delay-${delay}`}>
      <span className="como-step-num" aria-hidden="true">{num}</span>
      <div className="como-step-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}

/* ---- PROVA SOCIAL ---- */
const STATS = [
  { value: '65%', context: 'Dos leads se perdem porque o corretor demora a responder', laranja: false },
  { value: '100x', context: 'Mais chances de conversão respondendo em até 5 minutos', laranja: true },
  { value: '15-20h', context: 'Por semana gastos por corretores qualificando leads manualmente', laranja: false },
  { value: '3x', context: 'Mais leads qualificados com automação inteligente', laranja: true },
]

function ProvaIA() {
  const headerRef = useReveal()

  return (
    <section className="section-prova" aria-label="Prova social">
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
          *Dados compilados de estudos do setor imobiliário digital: NAR (National Association of Realtors), MindStudio, JatinAI Automation.
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

/* ---- PLANOS ---- */
const PLANOS = [
  {
    title: 'Corretor Autônomo',
    desc: 'Ideal para quem atende sozinho',
    features: [
      'Agente de IA para seu WhatsApp pessoal',
      'Até 500 leads/mês',
      'Suporte prioritário via WhatsApp',
    ],
    cta: 'Quero saber o valor',
    aria: 'Quero saber o valor do plano corretor autônomo',
  },
  {
    title: 'Imobiliária',
    desc: 'Para equipes com alto volume',
    features: [
      'Agente para múltiplos WhatsApp',
      'Leads ilimitados',
      'Relatórios de desempenho + suporte dedicado',
    ],
    cta: 'Quero uma proposta',
    aria: 'Quero uma proposta para imobiliária',
  },
]

function PlanosIA() {
  const headerRef = useReveal()
  const listRefs = [useRef(null), useRef(null)]
  const highlighted = useCenterHighlight(listRefs)

  return (
    <section className="section-planos" aria-label="Planos">
      <div className="container">
        <div ref={headerRef} className="reveal">
          <span className="section-tag">Sob medida para você</span>
          <h2 className="section-title">Planos adaptados para sua realidade</h2>
          <p className="section-sub">
            Cada corretor e imobiliária tem um volume e ritmo diferente. Fale com a gente e montamos a melhor solução para o seu negócio.
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

function PlanoCard({ title, desc, features, cta, aria, delay, listRef, highlightIdx }) {
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
        <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-secondary" aria-label={aria}>
          <i className="fab fa-whatsapp" aria-hidden="true"></i>
          {cta}
        </a>
      </div>
    </div>
  )
}

/* ---- CTA FINAL ---- */
function CtaIA() {
  const h2Ref = useReveal()
  const pRef = useReveal()
  const aRef = useReveal()

  return (
    <section className="section-cta-final cta-ia" aria-label="CTA Final">
      <div className="cta-final-bg cta-final-bg-ia" />
      <div className="cta-final-overlay" />
      <div className="cta-final-content">
        <img
          className="hero-logo"
          src="/images/VISTA REAL 360 - logo com slogan PARA FUNDO ESCURO.png"
          alt="Vista Real 360"
          loading="eager"
        />
        <h2 ref={h2Ref} className="reveal">
          Enquanto você lê isso, 3 leads estão chamando corretores no WhatsApp. Qual deles vai ser seu?
        </h2>
        <p ref={pRef} className="reveal delay-1">
          Não perca mais vendas por causa da demora na resposta. Ative seu Agente de IA hoje.
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
  )
}
