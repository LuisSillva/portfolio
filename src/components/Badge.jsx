import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/content'
import { prefersReducedMotion } from './hooks'

// Crachá com física de pêndulo: balança sozinho, reage ao mouse
// e pode ser arrastado; ao soltar, volta oscilando até parar.
export default function Badge({ role }) {
  const [photoOk, setPhotoOk] = useState(true)
  const root = useRef(null)
  const swing = useRef(null)
  const card = useRef(null)
  const glare = useRef(null)
  const s = useRef({ angle: 0, vel: 0, dragging: false, target: 0, hover: { x: 0, y: 0, on: false } })

  useEffect(() => {
    if (prefersReducedMotion()) return
    let raf
    let last = performance.now()
    const st = s.current

    const loop = (now) => {
      const dt = Math.min((now - last) / 1000, 0.032)
      last = now
      if (st.dragging) {
        const prev = st.angle
        st.angle += (st.target - st.angle) * 0.35
        st.vel = (st.angle - prev) / dt
      } else {
        // Mola + amortecimento + uma brisa leve para nunca ficar parado.
        const breeze = Math.sin(now / 1400) * 1.4
        const force = -26 * st.angle - 2.6 * st.vel + breeze
        st.vel += force * dt
        st.angle += st.vel * dt
      }
      const a = Math.max(-38, Math.min(38, st.angle))
      // Inclinação 3D do cartão: segue o mouse e a velocidade do balanço.
      const h = st.hover
      const ry = (h.on ? h.x * 14 : 0) - st.vel * 0.25
      const rx = h.on ? -h.y * 10 : 0
      if (swing.current) swing.current.style.transform = `rotate(${a.toFixed(2)}deg)`
      if (card.current) card.current.style.transform = `perspective(700px) rotateX(${rx.toFixed(2)}deg) rotateY(${Math.max(-25, Math.min(25, ry)).toFixed(2)}deg)`
      if (glare.current) {
        glare.current.style.opacity = h.on ? '1' : '0'
        glare.current.style.background = `radial-gradient(circle at ${50 + h.x * 60}% ${50 + h.y * 60}%, rgba(255,255,255,0.55), transparent 55%)`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  // Ângulo a partir da posição do ponteiro em relação ao ponto de fixação do cordão.
  const angleFromPointer = (e) => {
    const r = root.current.getBoundingClientRect()
    const pivotX = r.left + r.width / 2
    const pivotY = r.top
    return (Math.atan2(pivotX - e.clientX, e.clientY - pivotY) * 180) / Math.PI
  }

  const onDown = (e) => {
    const st = s.current
    st.dragging = true
    st.target = angleFromPointer(e)
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onMove = (e) => {
    const st = s.current
    if (st.dragging) st.target = angleFromPointer(e)
    const r = card.current.getBoundingClientRect()
    st.hover = { x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5, on: true }
  }
  const onUp = () => {
    s.current.dragging = false
  }
  const onLeave = () => {
    s.current.hover = { x: 0, y: 0, on: false }
  }

  return (
    <div className="badge" ref={root}>
      <div className="badge__swing" ref={swing}>
        <div className="badge__strap" aria-hidden="true">
          <span>{profile.handle} · {profile.handle} · {profile.handle}</span>
        </div>
        <div className="badge__clip" aria-hidden="true" />
        <div
          className="badge__card"
          ref={card}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          onPointerLeave={onLeave}
        >
          <div className="badge__photo">
            {photoOk ? (
              <img src={profile.photo} alt={profile.name} draggable="false" onError={() => setPhotoOk(false)} />
            ) : (
              <span className="badge__initials">LF</span>
            )}
          </div>
          <div className="badge__meta">
            <strong>{profile.name}</strong>
            <span className="mono">{role}</span>
          </div>
          <span className="badge__glare" ref={glare} aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
