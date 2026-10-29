import { useState } from 'react'
import { useLang } from '../i18n'
import { profile } from '../data/content'
import { useActiveSection } from './hooks'

const SECTIONS = ['home', 'about', 'journey', 'work', 'contact']

export default function Nav() {
  const { t, lang, toggle } = useLang()
  const active = useActiveSection(SECTIONS)
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <a href="#home" className="nav__brand mono">{profile.handle}</a>
      <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Principal">
        {SECTIONS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? 'is-active' : ''}
            aria-current={active === id ? 'true' : undefined}
            onClick={() => setOpen(false)}
          >
            {t.nav[id]}
          </a>
        ))}
      </nav>
      <div className="nav__actions">
        <button type="button" className="lang mono magnetic" onClick={toggle} aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para português'}>
          <span className={lang === 'pt' ? 'on' : ''}>PT</span>
          <span className={lang === 'en' ? 'on' : ''}>EN</span>
        </button>
        <button
          type="button"
          className="nav__menu"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
