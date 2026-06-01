import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from './components/Nav'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import TourVirtual360 from './pages/TourVirtual360'
import AgenteIA from './pages/AgenteIA'
import TourExemplo from './pages/TourExemplo'
import './App.css'

export default function App() {
  const location = useLocation()

  return (
    <>
      <Nav />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/tourvirtual360" element={<TourVirtual360 />} />
            <Route path="/agente_ia" element={<AgenteIA />} />
            <Route path="/tour-exemplo" element={<TourExemplo />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
