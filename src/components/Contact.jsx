import { useState } from 'react'
import { useLang } from '../i18n'
import { profile } from '../data/content'
import { useReveal } from './hooks'
import { IconMail, IconGithub, IconLinkedin, IconSend, IconUser } from './Icons'

// Por enquanto o formulário abre o app de e-mail com a mensagem pronta.
// Próximo passo: trocar por uma rota /api/contact (FastAPI na Vercel).
export default function Contact() {
  const { t } = useLang()
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfólio — ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n${form.name} · ${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section container" ref={ref}>
      <p className="eyebrow mono center">04 — {t.nav.contact}</p>
      <h2 className="display display--md center">{t.contactTitle}</h2>
      <p className="sub center">{t.contactSub}</p>

      <div className="contact">
        <form className="panel spot contact__form reveal" onSubmit={submit}>
          <label className="field">
            <span className="sr-only">{t.form.name}</span>
            <IconUser />
            <input required value={form.name} onChange={update('name')} placeholder={t.form.name} autoComplete="name" />
          </label>
          <label className="field">
            <span className="sr-only">{t.form.email}</span>
            <IconMail />
            <input required type="email" value={form.email} onChange={update('email')} placeholder={t.form.email} autoComplete="email" />
          </label>
          <label className="field field--area">
            <span className="sr-only">{t.form.message}</span>
            <textarea required rows={5} value={form.message} onChange={update('message')} placeholder={t.form.message} />
          </label>
          <button type="submit" className="btn btn--accent magnetic">
            <IconSend /> {t.form.send}
          </button>
        </form>

        <aside className="panel spot contact__info reveal">
          <p className="eyebrow mono">{t.connect}</p>
          <a className="social spot" href={`mailto:${profile.email}`}>
            <IconMail /> <span>{profile.email}</span>
          </a>
          <a className="social spot" href={profile.linkedin} target="_blank" rel="noreferrer">
            <IconLinkedin /> <span>LinkedIn</span>
          </a>
          <a className="social spot" href={profile.github} target="_blank" rel="noreferrer">
            <IconGithub /> <span>GitHub</span>
          </a>
        </aside>
      </div>
    </section>
  )
}
