import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks, org } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Rota değişiminde mobil menüyü kapat
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Menü açıkken body kaydırmasını kilitle
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="brand" aria-label={`${org.name} — Ana Sayfa`}>
          <img className="brand__logo" src="/logo.svg" alt={org.name} width="185" height="46" />
        </Link>

        <nav
          id="primary-menu"
          className={`nav__menu ${open ? 'is-open' : ''}`}
          aria-label="Ana menü"
        >
          <ul className="nav__links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `nav__link ${isActive ? 'is-active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
