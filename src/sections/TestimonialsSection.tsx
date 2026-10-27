import { Building2, Quote, UserRound } from 'lucide-react'
import { testimonials } from '../data/testimonials'

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="border-t border-zinc-200 bg-[#f7f6f1] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs tracking-widest text-zinc-500 uppercase">
              Témoignages
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              La confiance se construit{' '}
              <span className="font-serif font-medium text-indigo-950 italic">
                ensemble.
              </span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-zinc-600 md:text-right">
            Trois espaces réservés aux témoignages de clients, apprenants ou
            collaborateurs.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map(testimonial => (
            <article
              key={testimonial.id}
              className="flex min-h-64 flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md sm:p-7"
            >
              <div className="mb-6 flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 text-zinc-500">
                    {testimonial.imageUrl ? (
                      <img
                        src={testimonial.imageUrl}
                        alt={testimonial.imageAlt || `Photo de ${testimonial.name}`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : testimonial.clientType === 'morale' ? (
                      <Building2 className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <UserRound className="h-5 w-5" aria-hidden="true" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-zinc-900">
                      {testimonial.name}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-500">
                      {testimonial.context}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-zinc-100 px-2.5 py-1 font-mono text-[9px] tracking-wide text-zinc-600 uppercase">
                  {testimonial.clientType === 'physique'
                    ? 'Personne physique'
                    : testimonial.clientType === 'morale'
                      ? 'Personne morale'
                      : 'Type à préciser'}
                </span>
              </div>

              <div className="flex flex-1 flex-col border-t border-zinc-100 pt-5">
                <Quote
                  className="mb-3 h-4 w-4 text-indigo-900"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-zinc-600">
                  {testimonial.quote}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
