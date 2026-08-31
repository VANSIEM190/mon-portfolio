import { Loader2, Mail, Send } from 'lucide-react'
import { useState } from 'react'
import { socials } from '../utils/data'

// URL de ton backend — configurable via variable d'env (Vite).
// En prod, définis VITE_API_URL=https://ton-backend.up.railway.app (ou autre) dans .env
const API_URL =
  import.meta.env.VITE_API_URL || 'https://chatbot-portfolio-16he.onrender.com'

type Status = 'idle' | 'loading' | 'sent' | 'error'

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'loading') return

    setStatus('loading')

    try {
      const res = await fetch(`${API_URL}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `Contact de ${form.name}`,
          message: form.message,
        }),
      })

      if (!res.ok) {
        throw new Error(`Réponse serveur invalide (${res.status})`)
      }

      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('Erreur envoi message:', err)
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative border-t border-zinc-200 bg-[#f7f6f1] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start">
        <div className="space-y-8">
          <div>
            <div className="mb-4 font-mono text-xs tracking-widest text-zinc-500 uppercase">
              08 — Contact
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Collaborons{' '}
              <span className="font-serif font-medium text-indigo-950 italic">
                ensemble
              </span>
              .
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-600">
              Vous avez un projet complexe à développer ou un besoin d'expertise
              technique ? Discutons-en.
            </p>
          </div>

          <a
            href="mailto:vansiemgracia03@gmail.com"
            className="inline-flex items-center gap-2.5 font-mono text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
          >
            <Mail className="h-4 w-4 text-zinc-500" />
            contact@vansiemportfolio.site
          </a>

          <div>
            <div className="mb-3 font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
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
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-600 shadow-sm transition-colors hover:border-zinc-300 hover:text-zinc-900"
                >
                  <s.icon className="h-3.5 w-3.5" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-xs font-medium text-zinc-600"
              >
                Nom complet
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white"
                placeholder="Van'siem Gracia"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs font-medium text-zinc-600"
              >
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white"
                placeholder="vansiem@gmail.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium text-zinc-600"
              >
                Votre brief projet
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white"
                placeholder="Décrivez brièvement les objectifs de votre application..."
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'loading' && (
                <>
                  Envoi en cours{' '}
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                </>
              )}
              {status === 'sent' && 'Message transmis ✓'}
              {status === 'idle' && (
                <>
                  Transmettre le message <Send className="h-3.5 w-3.5" />
                </>
              )}
              {status === 'error' && (
                <>
                  Réessayer <Send className="h-3.5 w-3.5" />
                </>
              )}
            </button>

            {status === 'error' && (
              <p className="text-center text-xs text-red-600">
                Une erreur est survenue lors de l'envoi. Réessaie, ou écris
                directement à{' '}
                <a
                  href="mailto:vansiemgracia03@gmail.com"
                  className="underline"
                >
                  vansiemgracia03@gmail.com
                </a>
                .
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
