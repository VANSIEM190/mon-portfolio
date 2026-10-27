import { ArrowUpRight, Code2, GraduationCap } from 'lucide-react'
import { whatsappUrl } from '../data/socials'

const offers = [
  {
    icon: GraduationCap,
    eyebrow: 'Formation',
    title: 'Apprends \u00e0 cr\u00e9er des sites web',
    description:
      'Parlons de ton niveau, de tes objectifs et de la formation qui te convient.',
    action: 'Parler de la formation',
    message:
      'Bonjour, je souhaite en savoir plus sur ta formation en cr\u00e9ation de sites web.',
  },
  {
    icon: Code2,
    eyebrow: 'Cr\u00e9ation de site',
    title: 'Donne vie \u00e0 ton projet en ligne',
    description:
      'Pr\u00e9sente ton activit\u00e9, tes services ou ton projet avec un site adapt\u00e9 \u00e0 tes besoins.',
    action: 'Discuter de mon site',
    message:
      'Bonjour, je souhaite discuter de la cr\u00e9ation d\u2019un site web pour mon activit\u00e9.',
  },
]

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="border-t border-zinc-200 bg-[#f7f6f1] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs tracking-widest text-zinc-500 uppercase">
              08 &mdash; Mes offres
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Apprendre ou cr&eacute;er :{' '}
              <span className="font-serif font-medium text-indigo-950 italic">
                parlons de ton projet.
              </span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-zinc-600 md:text-right">
            Tu veux apprendre &agrave; cr&eacute;er un site web ou lancer ta pr&eacute;sence en
            ligne ? &Eacute;cris-moi directement sur WhatsApp.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {offers.map(offer => {
            const Icon = offer.icon
            const href = `${whatsappUrl}?text=${encodeURIComponent(offer.message)}`

            return (
              <article
                key={offer.eyebrow}
                className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm sm:p-9"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-800">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
                  {offer.eyebrow}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-zinc-900 sm:text-2xl">
                  {offer.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
                  {offer.description}
                </p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-zinc-900 px-5 py-3 font-mono text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  {offer.action}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection