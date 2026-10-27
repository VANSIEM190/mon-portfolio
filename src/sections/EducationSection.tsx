import { CalendarDays } from 'lucide-react'
import { education } from '../data/education'

const currentEducation = education.find(item => item.period === 'En cours')
const otherEducation = education.filter(item => item.period !== 'En cours')

const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative border-t border-zinc-200 bg-[#f7f6f1] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs tracking-widest text-zinc-500 uppercase">
              04 &mdash; Parcours
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Formation &amp;{' '}
              <span className="font-serif font-medium text-indigo-950 italic">
                exp&eacute;riences
              </span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-zinc-600 md:text-right">
            Un parcours entre &eacute;tudes, certifications et exp&eacute;riences
            professionnelles.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {currentEducation && (
            <article className="relative isolate overflow-hidden rounded-3xl bg-zinc-950 p-7 text-white shadow-xl sm:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-20 -z-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"
              />
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-1.5">
                  <img
                    src={currentEducation.logoUrl}
                    alt={currentEducation.logoAlt}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-[10px] tracking-widest text-emerald-300 uppercase">
                  En cours
                </span>
              </div>

              <p className="mt-10 font-mono text-xs tracking-widest text-zinc-400 uppercase">
                Formation actuelle
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl">
                {currentEducation.degree}
              </h3>
              <p className="mt-3 text-sm font-medium text-indigo-200">
                {currentEducation.school}
              </p>
              <p className="mt-7 border-t border-white/10 pt-6 text-sm leading-relaxed text-zinc-300">
                {currentEducation.description}
              </p>
            </article>
          )}

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute top-5 bottom-5 left-4 w-px bg-zinc-200"
            />
            <ol className="space-y-4">
              {otherEducation.map(item => (
                <li
                  key={item.degree}
                  className="group relative grid grid-cols-[2rem_1fr] gap-3"
                >
                  <div className="z-10 mt-5 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-[#f7f6f1] text-zinc-500 transition-colors group-hover:border-indigo-300 group-hover:text-indigo-800">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md sm:p-6">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-white p-1.5">
                        <img
                          src={item.logoUrl}
                          alt={item.logoAlt}
                          className="h-full w-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <span className="inline-flex rounded-full bg-zinc-100 px-2.5 py-1 font-mono text-[10px] tracking-wider text-zinc-500">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold leading-snug text-zinc-900 sm:text-lg">
                      {item.degree}
                    </h3>
                    <p className="mt-1.5 text-xs font-medium text-indigo-900">
                      {item.school}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                      {item.description}
                    </p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
