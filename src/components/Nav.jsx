import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useScrollNav } from '../hooks/useScrollNav'

const WHATSAPP = 'https://wa.me/5527999087595'

export default function Nav() {
  const scrolled = useScrollNav(60)

  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'dark' } catch { return 'dark' }
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('theme-light')
    } else {
      root.classList.remove('theme-light')
    }
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  return (
    <nav className={`nav-bar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Navegação principal">
      <Link to="/" aria-label="Vista Real 360 - Início">
        <img
          className="nav-logo"
          src="/images/VISTA REAL 360 - logo.png"
          alt="Vista Real 360"
          loading="lazy"
        />
      </Link>
      <div className="nav-links">
        <NavLink to="/tourvirtual360" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
          Tour 360°
        </NavLink>
        <NavLink to="/agente_ia" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
          Agente IA
        </NavLink>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
        >
          <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} />
        </button>
      </div>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener"
        className="nav-cta"
        aria-label="Falar no WhatsApp"
      >
        <i className="fab fa-whatsapp" aria-hidden="true"></i>
        Fale conosco
      </a>
    </nav>
  )
}
