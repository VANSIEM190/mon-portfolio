import { projects } from '../utils/data'
import { ExternalLink } from 'lucide-react'

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="relative border-t border-zinc-900 px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
              03 — Projets
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Projets sélectionnés
            </h2>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-zinc-500">
            Architectures modernes alliant clean code et interfaces hautement
            interactives.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-900/20 transition-all hover:border-zinc-800 ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Visual Placeholder Block instead of <img> broken links */}
              <div className="overflow-hidden bg-zinc-950">
                <div
                  className={`flex w-full items-center justify-center bg-zinc-900/40 font-mono text-3xl font-bold tracking-wider text-zinc-800 opacity-60 transition-all duration-700 group-hover:bg-zinc-900/70 group-hover:opacity-95 ${
                    i === 0 ? 'aspect-21/9' : 'aspect-4/3'
                  }`}
                >
                  {p.prefix}
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-zinc-300">
                    {p.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 shrink-0 text-zinc-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-2 text-sm text-zinc-400 whitespace-pre-line">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map(t => (
                    <span
                      key={t}
                      className="rounded bg-zinc-900 px-2 py-0.5 font-mono text-[10px] text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
