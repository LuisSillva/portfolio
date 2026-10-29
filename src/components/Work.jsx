import { useState } from 'react'
import { useLang } from '../i18n'
import { projects, stack } from '../data/content'
import { useReveal } from './hooks'
import { IconArrow, IconGithub } from './Icons'

function ProjectLinks({ links, t }) {
  return (
    <div className="project__links">
      {Object.entries(links).map(([kind, href]) => {
        const label = t.links[kind] ?? kind
        const Icon = kind === 'repo' ? IconGithub : IconArrow
        return href ? (
          <a key={kind} href={href} target="_blank" rel="noreferrer" className="link mono">
            <Icon width={14} height={14} /> {label}
          </a>
        ) : (
          <span key={kind} className="link mono is-soon" title={t.links.soon}>
            <Icon width={14} height={14} /> {label} · {t.links.soon}
          </span>
        )
      })}
    </div>
  )
}

export default function Work() {
  const { t, lang } = useLang()
  const [tab, setTab] = useState('projects')
  const ref = useReveal()
  const groups = Object.keys(t.groups)

  return (
    <section id="work" className="section container" ref={ref}>
      <p className="eyebrow mono center">03 — {t.workTitle}</p>
      <h2 className="display display--md center">{t.workTitle}</h2>
      <p className="sub center">{t.workSub}</p>

      <div className="tabs" role="tablist" aria-label={t.workTitle}>
        {['projects', 'stack'].map((id) => (
          <button
            key={id}
            role="tab"
            type="button"
            id={`tab-${id}`}
            aria-selected={tab === id}
            aria-controls={`panel-${id}`}
            className={`magnetic ${tab === id ? 'is-active' : ''}`}
            onClick={() => setTab(id)}
          >
            {t.tabs[id]}
          </button>
        ))}
      </div>

      {tab === 'projects' && (
        <ol className="projects" id="panel-projects" role="tabpanel" aria-labelledby="tab-projects">
          {projects.map((p, i) => {
            const c = p[lang]
            return (
              <li key={p.id} className="project spot">
                <span className="project__num">{String(i + 1).padStart(2, '0')}</span>
                <div className={`project__thumb thumb--${i % 5}`} aria-hidden="true">
                  {p.image ? <img src={p.image} alt="" /> : <span className="mono">{p.stack[0]}</span>}
                </div>
                <div className="project__body">
                  <p className="project__tag mono">{c.tag}</p>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <ul className="chips chips--sm">
                    {p.stack.map((s) => (
                      <li key={s} className="chip mono">{s}</li>
                    ))}
                  </ul>
                  <ProjectLinks links={p.links} t={t} />
                </div>
              </li>
            )
          })}
        </ol>
      )}

      {tab === 'stack' && (
        <div className="stack" id="panel-stack" role="tabpanel" aria-labelledby="tab-stack">
          {groups.map((g) => (
            <div key={g} className="stack__group">
              <h3 className="mono">{t.groups[g]}</h3>
              <ul>
                {stack
                  .filter((s) => s.group === g)
                  .map((s) => (
                    <li key={s.name} className="stack__tile spot">
                      <span className="stack__mono" aria-hidden="true">{s.name.slice(0, 2)}</span>
                      {s.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
