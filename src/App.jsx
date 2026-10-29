import { useState } from 'react'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Work from './components/Work'
import Contact from './components/Contact'
import SocialRail from './components/SocialRail'
import Marquee from './components/Marquee'
import { useLang } from './i18n'
import { useInteractions } from './components/hooks'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const { t } = useLang()
  useInteractions()

  return (
    <>
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      <div className="grid-bg" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Journey />
        <Work />
        <Contact />
      </main>
      <SocialRail />
      <footer className="footer">
        <span className="mono">© {new Date().getFullYear()} Luís Fernando</span>
        <span className="mono muted">{t.footer}</span>
      </footer>
    </>
  )
}
