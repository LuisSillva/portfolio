import { useLang } from '../i18n'
import { timeline } from '../data/content'
import { useReveal } from './hooks'

export default function Journey() {
  const { t, lang } = useLang()
  const ref = useReveal()

  return (
    <section id="journey" className="section container" ref={ref}>
      <p className="eyebrow mono center">02 — {t.journeyTitle}</p>
      <h2 className="display display--md center">{t.journeyTitle}</h2>
      <ol className="timeline">
        <span className="timeline__progress" aria-hidden="true" />
        {timeline.map((item, i) => {
          const c = item[lang]
          const sameAge = i > 0 && timeline[i - 1].age === item.age
          return (
            <li key={i} className={`timeline__item reveal ${i % 2 ? 'is-right' : 'is-left'}`}>
              <span className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card spot">
                <span className="timeline__when mono">
                  {sameAge ? '↳ ' : ''}
                  {lang === 'pt' ? `${item.age} ${t.age}` : `${t.age} ${item.age}`}
                </span>
                <h3>{c.title}</h3>
                {c.place && <p className="timeline__place">{c.place}</p>}
                <p>{c.text}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
