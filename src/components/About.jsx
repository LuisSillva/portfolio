import { useState } from 'react'
import { useLang } from '../i18n'
import { profile } from '../data/content'
import { useReveal } from './hooks'
import { IconDownload, IconArrow, IconGamepad, IconRocket, IconCode } from './Icons'

const STAT_ICONS = [IconGamepad, IconRocket, IconCode]

export default function About() {
  const { t } = useLang()
  const ref = useReveal()
  const [photoOk, setPhotoOk] = useState(true)

  return (
    <section id="about" className="section container" ref={ref}>
      <p className="eyebrow mono center">01 — {t.nav.about}</p>
      <h2 className="display display--md center">{t.aboutTitle}</h2>

      <div className="about">
        <div className="about__photo spot reveal">
          {photoOk ? (
            <img src={profile.photo} alt={profile.name} onError={() => setPhotoOk(false)} />
          ) : (
            <span className="badge__initials">LF</span>
          )}
          <span className="about__photo-tag mono">{profile.handle}</span>
        </div>

        <div className="about__content">
          <div className="about__cols">
            <div className="reveal">
              <h3 className="about__h">{t.who.title}</h3>
              <p className="about__p">{t.who.text}</p>
            </div>
            <div className="reveal" style={{ transitionDelay: '100ms' }}>
              <h3 className="about__h">{t.approach.title}</h3>
              <p className="about__p">{t.approach.text}</p>
            </div>
          </div>

          <div className="details reveal" style={{ transitionDelay: '180ms' }}>
            <h3 className="details__title">{t.detailsTitle}</h3>
            <dl className="details__grid">
              {t.details.map((d) => (
                <div key={d.k} className="details__item">
                  <dt className="mono">{d.k}</dt>
                  <dd>{d.href ? <a href={d.href}>{d.v}</a> : d.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="actions reveal" style={{ transitionDelay: '240ms' }}>
            {profile.cv ? (
              <a className="btn btn--solid magnetic" href={profile.cv} download>
                <IconDownload /> {t.cv}
              </a>
            ) : (
              <span className="btn btn--solid is-disabled" aria-disabled="true">
                <IconDownload /> {t.cv}
              </span>
            )}
            <a className="btn magnetic" href="#work">
              <IconArrow /> {t.seeWork}
            </a>
          </div>
        </div>
      </div>

      <ul className="stats">
        {t.stats.map((s, i) => {
          const Icon = STAT_ICONS[i]
          return (
            <li key={s.label} className="stat spot reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <Icon />
              <strong className="stat__n">{s.n}</strong>
              <span className="stat__label mono">{s.label}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
