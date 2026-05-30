import Hero from '../components/Hero'
import DorSection from '../components/DorSection'
import SolucaoSection from '../components/SolucaoSection'
import DemoSecao from '../components/DemoSecao'
import ServicosSection from '../components/ServicosSection'
import ProvaSocial from '../components/ProvaSocial'
import ComoFunciona from '../components/ComoFunciona'
import PlanosSection from '../components/PlanosSection'
import CtaFinal from '../components/CtaFinal'

export default function TourVirtual360() {
  return (
    <main className="page-tour-virtual">
      <Hero />
      <DorSection />
      <SolucaoSection />
      <DemoSecao />
      <ServicosSection />
      <ProvaSocial />
      <ComoFunciona />
      <PlanosSection />
      <CtaFinal />
    </main>
  )
}
