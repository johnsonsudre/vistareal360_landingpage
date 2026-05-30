import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import TourVirtual360 from './pages/TourVirtual360'
import AgenteIA from './pages/AgenteIA'
import './App.css'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tourvirtual360" element={<TourVirtual360 />} />
        <Route path="/agente_ia" element={<AgenteIA />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
