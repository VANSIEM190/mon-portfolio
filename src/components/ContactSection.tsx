import { Mail, Send } from 'lucide-react'
import { useState } from 'react'
import { socials } from '../utils/data'

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact de ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    )
    window.location.href = `mailto:vansiemgracia03@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }
  return (
    <section
      id="contact"
      className="relative border-t border-zinc-900 px-4 py-24 sm:px-6 sm:py-32 bg-zinc-950/40"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <div className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
              05 — Contact
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Collaborons ensemble.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
              Vous avez un projet complexe à développer ou un besoin d'expertise
              technique ? Discutons-en.
            </p>
          </div>

          <a
            href="mailto:vansiemgracia03@gmail.com"
            className="inline-flex items-center gap-2.5 font-mono text-sm font-medium text-white underline decoration-zinc-700 underline-offset-4 hover:decoration-white"
          >
            <Mail className="h-4 w-4 text-zinc-400" />
            vansiemgracia03@gmail.com
          </a>

          <div className="pt-6">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              Écosystème digital
            </div>
            <div className="flex flex-wrap gap-2">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-900 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white"
                >
                  <s.icon className="h-3.5 w-3.5" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6 shadow-2xl sm:p-8"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-xs font-medium text-zinc-400"
              >
                Nom complet
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-zinc-900 bg-zinc-900/40 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-zinc-700"
                placeholder="Van'siem Gracia"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs font-medium text-zinc-400"
              >
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-zinc-900 bg-zinc-900/40 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-zinc-700"
                placeholder="vansiem@gmail.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium text-zinc-400"
              >
                Votre brief projet
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-zinc-900 bg-zinc-900/40 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-zinc-700"
                placeholder="Décrivez brièvement les objectifs de votre application..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-900 transition-all hover:bg-white"
            >
              {sent ? (
                'Message transmis ✓'
              ) : (
                <>
                  Transmettre le message <Send className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
