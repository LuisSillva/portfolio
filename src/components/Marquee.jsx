import { useEffect, useRef } from 'react'
import { useLang } from '../i18n'
import { prefersReducedMotion } from './hooks'

// Duas faixas de texto gigante rolando em sentidos opostos.
// Aceleram um pouco quando a página é rolada.
export default function Marquee() {
  const { t } = useLang()
  const rows = useRef([])

  useEffect(() => {
    if (prefersReducedMotion()) return
    let raf
    let offset = 0
    let boost = 0
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      boost = Math.min(14, boost + Math.abs(y - lastY) * 0.08)
      lastY = y
    }
    const loop = () => {
      boost *= 0.92
      offset += 0.6 + boost
      rows.current.forEach((row, i) => {
        if (!row) return
        const half = row.scrollWidth / 2
        const x = offset % half
        row.style.transform = `translate3d(${i % 2 ? x - half : -x}px, 0, 0)`
      })
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="marquee" aria-hidden="true">
      {t.marquee.map((phrase, i) => (
        <div key={phrase} className={`marquee__row ${i % 2 ? 'marquee__row--outline' : ''}`}>
          <div className="marquee__track" ref={(el) => (rows.current[i] = el)}>
            {Array.from({ length: 8 }, (_, k) => (
              <span key={k}>
                {phrase}
                <span className="marquee__sep">✦</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
