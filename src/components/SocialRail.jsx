import { profile } from '../data/content'
import { IconGithub, IconLinkedin, IconMail } from './Icons'

export default function SocialRail() {
  return (
    <nav className="rail" aria-label="Redes">
      <a className="magnetic" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><IconGithub /></a>
      <a className="magnetic" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><IconLinkedin /></a>
      <a className="magnetic" href={`mailto:${profile.email}`} aria-label="E-mail"><IconMail /></a>
    </nav>
  )
}
