import { useEffect, useState } from 'react'
import { useLang } from '../i18n'
import { prefersReducedMotion } from './hooks'
import { IconCode, IconUser, IconGlobe } from './Icons'

export default function Intro({ onDone }) {
  const { t } = useLang()
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const stay = prefersReducedMotion() ? 600 : 2200
    const a = setTimeout(() => setLeaving(true), stay)
    const b = setTimeout(onDone, stay + 700)
    return () => {
      clearTimeout(a)
      clearTimeout(b)
    }
  }, [onDone])

  return (
    <div className={`intro ${leaving ? 'intro--out' : ''}`} onClick={() => setLeaving(true)} role="presentation">
      <div className="intro__icons" aria-hidden="true">
        <IconCode />
        <IconUser />
        <IconGlobe />
      </div>
      <p className="intro__line">{t.intro[0]}</p>
      <p className="intro__line intro__line--big">{t.intro[1]}</p>
    </div>
  )
}
