import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useScrollNav } from '../hooks/useScrollNav'

export default function Nav() {
  const scrolled = useScrollNav(60)
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

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

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  return (
    <nav className={`nav-bar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Navegação principal">
      <Link to="/" className="nav-logo-link" aria-label="Vista Real 360 - Início">
        <img
          className="nav-logo"
          src={theme === 'light' ? '/images/logo-navbar.png' : '/images/VISTA REAL 360 - logo.png'}
          alt="Vista Real 360"
          loading="eager"
        />
      </Link>

      <div className="nav-right">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
        >
          <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} />
        </button>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <NavLink to="/" end className="nav-link" onClick={() => setMenuOpen(false)}>Início</NavLink>
        <NavLink to="/tourvirtual360" className="nav-link" onClick={() => setMenuOpen(false)}>Tour Virtual 360°</NavLink>
        <NavLink to="/agente_ia" className="nav-link" onClick={() => setMenuOpen(false)}>Agente de IA</NavLink>
      </div>
    </nav>
  )
}
