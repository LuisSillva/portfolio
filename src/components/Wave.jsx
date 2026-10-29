import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from './hooks'

// Linhas onduladas que se movem devagar no fundo do hero.
const LINES = 6
const W = 1440
const H = 260

function buildPath(t, k) {
  const amp = 26 + k * 7
  const freq = 0.0042 + k * 0.0004
  const phase = t * (0.35 + k * 0.05) + k * 0.9
  let d = ''
  for (let x = 0; x <= W; x += 24) {
    const y = H / 2 + Math.sin(x * freq + phase) * amp + Math.sin(x * freq * 0.5 - phase * 0.6) * amp * 0.45
    d += `${x === 0 ? 'M' : 'L'}${x},${y.toFixed(1)} `
  }
  return d
}

export default function Wave() {
  const paths = useRef([])

  useEffect(() => {
    let raf
    const start = performance.now()
    const draw = (now) => {
      const t = (now - start) / 1000
      paths.current.forEach((p, k) => p && p.setAttribute('d', buildPath(t, k)))
      raf = requestAnimationFrame(draw)
    }
    if (prefersReducedMotion()) {
      paths.current.forEach((p, k) => p && p.setAttribute('d', buildPath(0, k)))
    } else {
      raf = requestAnimationFrame(draw)
    }
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <svg className="wave" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="waveFade" x1="0" x2="1">
          <stop offset="0" stopColor="#5eead4" stopOpacity="0" />
          <stop offset="0.35" stopColor="#5eead4" stopOpacity="0.55" />
          <stop offset="0.7" stopColor="#e5e5e5" stopOpacity="0.35" />
          <stop offset="1" stopColor="#e5e5e5" stopOpacity="0" />
        </linearGradient>
      </defs>
      {Array.from({ length: LINES }, (_, k) => (
        <path
          key={k}
          ref={(el) => (paths.current[k] = el)}
          d={buildPath(0, k)}
          fill="none"
          stroke="url(#waveFade)"
          strokeWidth={k === 0 ? 1.4 : 0.8}
          opacity={1 - k * 0.13}
        />
      ))}
    </svg>
  )
}
