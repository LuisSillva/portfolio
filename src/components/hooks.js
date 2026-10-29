import { useEffect, useRef, useState } from 'react'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Adiciona a classe "is-visible" quando o elemento entra na tela.
export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    el.querySelectorAll('.reveal').forEach((n) => io.observe(n))
    if (el.classList.contains('reveal')) io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

// Efeito de digitação que alterna entre várias frases.
export function useTyped(words, speed = 70, pause = 1600) {
  const [text, setText] = useState('')
  useEffect(() => {
    if (prefersReducedMotion()) {
      setText(words[0])
      return
    }
    let w = 0
    let i = 0
    let deleting = false
    let timer
    const tick = () => {
      const word = words[w]
      i += deleting ? -1 : 1
      setText(word.slice(0, i))
      let delay = deleting ? speed / 2 : speed
      if (!deleting && i === word.length) {
        deleting = true
        delay = pause
      } else if (deleting && i === 0) {
        deleting = false
        w = (w + 1) % words.length
        delay = 300
      }
      timer = setTimeout(tick, delay)
    }
    timer = setTimeout(tick, 400)
    return () => clearTimeout(timer)
  }, [words, speed, pause])
  return text
}

// Qual seção está visível agora (para destacar no menu).
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])
  return active
}

// Interações globais: botões magnéticos, brilho que segue o mouse
// em cards (.spot), luz do cursor no fundo e progresso da linha do tempo.
export function useInteractions() {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = prefersReducedMotion()
    const rootEl = document.documentElement
    let magnet = null

    const release = () => {
      if (magnet) {
        magnet.style.transform = ''
        magnet = null
      }
    }

    const onMove = (e) => {
      rootEl.style.setProperty('--cx', `${e.clientX}px`)
      rootEl.style.setProperty('--cy', `${e.clientY}px`)

      const spot = e.target.closest?.('.spot')
      if (spot) {
        const r = spot.getBoundingClientRect()
        spot.style.setProperty('--x', `${e.clientX - r.left}px`)
        spot.style.setProperty('--y', `${e.clientY - r.top}px`)
      }

      if (reduced) return
      const m = e.target.closest?.('.magnetic')
      if (m !== magnet) release()
      if (m) {
        magnet = m
        const r = m.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)
        m.style.transform = `translate(${dx * 0.22}px, ${dy * 0.32}px)`
      }
    }

    const progress = () => {
      const tl = document.querySelector('.timeline')
      const bar = document.querySelector('.timeline__progress')
      if (!tl || !bar) return
      const r = tl.getBoundingClientRect()
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.6 - r.top) / r.height))
      bar.style.transform = `scaleY(${p})`
    }

    if (fine) {
      document.addEventListener('pointermove', onMove, { passive: true })
      document.addEventListener('pointerleave', release)
    }
    window.addEventListener('scroll', progress, { passive: true })
    progress()
    return () => {
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', release)
      window.removeEventListener('scroll', progress)
    }
  }, [])
}
