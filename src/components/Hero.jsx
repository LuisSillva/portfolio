import { useLang } from '../i18n'
import { useTyped } from './hooks'
import Badge from './Badge'
import Wave from './Wave'

const CHIPS = ['Python', 'FastAPI', 'React', 'SQL']

export default function Hero() {
  const { t } = useLang()
  const typed = useTyped(t.typed)

  return (
    <section id="home" className="hero">
      <div className="hero__inner container">
        <div className="hero__text">
          <p className="status mono hero-in" style={{ '--d': '0ms' }}><span className="dot" aria-hidden="true" />{t.status}</p>
          <h1 className="display">
            <span className="hero-in" style={{ '--d': '80ms' }}>{t.role[0]}</span>
            <span className="display--dim hero-in" style={{ '--d': '180ms' }}>{t.role[1]}</span>
          </h1>
          <p className="typed mono hero-in" style={{ '--d': '340ms' }} aria-live="polite">
            <span className="typed__prompt" aria-hidden="true">&gt;</span> {typed}
            <span className="caret" aria-hidden="true">_</span>
          </p>
          <p className="hero__lead hero-in" style={{ '--d': '420ms' }}>{t.heroText}</p>
          <ul className="chips hero-in" style={{ '--d': '500ms' }} aria-label="Stack">
            {CHIPS.map((c) => (
              <li key={c} className="chip mono">{c}</li>
            ))}
          </ul>
          <ul className="hints mono hero-in" style={{ '--d': '580ms' }}>
            {t.hints.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
        <Badge role="Software Engineer" />
      </div>
      <Wave />
      <a href="#about" className="scroll mono">{t.scroll} <span className="scroll__arrow">↓</span></a>
    </section>
  )
}
