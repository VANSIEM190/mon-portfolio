import { useState, useEffect } from 'react'
import { projects } from '../utils/data'
import {
  Briefcase,
  ExternalLink,
  Play,
  Code2,
  Users,
  FolderGit2,
} from 'lucide-react'

// Interface TypeScript mise à jour
interface Project {
  title: string
  description: string
  prefix: string
  tags: string[]
  link: string
  category?: 'Client' | 'Personnel' | 'Communautaire'
}

interface ProjectImageProps {
  url: string
  alt: string
  className: string
  prefix: string
}

// Composant de récupération d'image et rendu de l'émulateur mobile
export const ProjectImage = ({
  url,
  alt,
  className,
  prefix,
}: ProjectImageProps) => {
  const [screenshotUrl, setScreenshotUrl] = useState<string>('')

  const isAppetizeProject = url.includes('appetize.io')

  const [status, setStatus] = useState<'loading' | 'success' | 'error'>(() => {
    if (!url) return 'error'
    if (isAppetizeProject) return 'success'
    return 'loading'
  })

  useEffect(() => {
    if (!url || isAppetizeProject) return

    let active = true
    const targetUrl = `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url`

    const img = new window.Image()
    img.src = targetUrl

    img.onload = () => {
      if (active) {
        setScreenshotUrl(targetUrl)
        setStatus('success')
      }
    }

    img.onerror = () => {
      if (active) {
        setStatus('error')
      }
    }

    return () => {
      active = false
    }
  }, [url, isAppetizeProject])

  if (status === 'loading') {
    return (
      <div
        className={`${className} bg-zinc-950 flex items-center justify-center animate-pulse`}
      >
        <span className="font-mono text-xs text-zinc-600">
          Chargement de la capture...
        </span>
      </div>
    )
  }

  if (isAppetizeProject) {
    return (
      <div
        className={`${className} bg-zinc-950 flex items-center justify-center p-6 relative overflow-hidden group/phone`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

        <div className="relative w-[150px] h-[300px] sm:w-[170px] sm:h-[340px] rounded-[36px] border-[6px] border-zinc-800 bg-zinc-900 shadow-2xl flex flex-col items-center justify-center transition-all duration-500 group-hover/phone:scale-[1.03] group-hover/phone:border-zinc-700">
          <div className="absolute top-2.5 w-16 h-4 rounded-full bg-zinc-950 flex items-center justify-center z-20">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-900/40 mr-1" />
            <div className="w-8 h-1 rounded-full bg-zinc-800" />
          </div>

          <div className="w-full h-full rounded-[28px] overflow-hidden bg-zinc-950 relative flex flex-col items-center justify-center p-4">
            <div className="z-10 text-center flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl font-black text-white font-mono shadow-lg">
                {prefix}
              </div>
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 font-semibold uppercase">
                MedicQuiz
              </span>
              <span className="text-[8px] text-zinc-600 font-mono">
                Tap to launch
              </span>
            </div>

            <div className="absolute inset-0 bg-zinc-950/40 flex items-center justify-center opacity-80 group-hover/phone:opacity-100 transition-opacity z-10">
              <div className="w-10 h-10 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-lg transform group-hover/phone:scale-110 transition-transform">
                <Play className="h-4 w-4 fill-current ml-0.5" />
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />
          </div>
        </div>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div
        className={`${className} bg-zinc-900/40 font-mono text-3xl font-bold tracking-wider text-zinc-800 opacity-60 transition-all duration-700 group-hover:bg-zinc-900/70 group-hover:opacity-95 flex items-center justify-center`}
      >
        {prefix}
      </div>
    )
  }

  return (
    <img
      src={screenshotUrl}
      alt={alt}
      className={`${className} object-cover object-top opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100`}
      loading="lazy"
    />
  )
}

const ProjectSection = () => {
  const projectsData = projects as Project[]

  return (
    <>
      <section
        id="projects"
        className="relative border-t border-zinc-900 px-4 py-24 sm:px-6 sm:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
                02 — Projets & Réalisations
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Projets sélectionnés
              </h2>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-zinc-500">
              Projets clients, applications sur-mesure et solutions à fort
              impact.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projectsData.map((p, i) => {
              const isMobile = p.link.includes('appetize.io')

              return (
                <a
                  key={p.title}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-900/20 transition-all hover:border-zinc-800 ${
                    i === 0 ? 'md:col-span-2' : ''
                  }`}
                >
                  {/* Zone d'affichage des Badges (En haut à droite) */}
                  <div className="absolute top-4 right-4 z-30 flex flex-col items-end gap-2">
                    {/* BADGE 1: PROJET CLIENT / FREELANCE */}
                    {p.category === 'Client' && (
                      <div className="flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 font-mono text-[10px] font-semibold text-purple-300 backdrop-blur-md shadow-lg">
                        <Briefcase className="h-3 w-3 text-purple-400" />
                        PROJET CLIENT / FREELANCE
                      </div>
                    )}

                    {/* BADGE 2: PROJET PERSONNEL / LAB */}
                    {p.category === 'Personnel' && (
                      <div className="flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 px-3 py-1 font-mono text-[10px] font-semibold text-blue-300 backdrop-blur-md shadow-lg">
                        <Code2 className="h-3 w-3 text-blue-400" />
                        PROJET PERSONNEL / LAB
                      </div>
                    )}

                    {/* BADGE 3: PROJET COMMUNAUTAIRE / OPEN SOURCE */}
                    {p.category === 'Communautaire' && (
                      <div className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/40 px-3 py-1 font-mono text-[10px] font-semibold text-amber-300 backdrop-blur-md shadow-lg">
                        <Users className="h-3 w-3 text-amber-400" />
                        COMMUNAUTAIRE / OPEN-SOURCE
                      </div>
                    )}

                    {/* BADGE PAR DÉFAUT (SI AUCUNE CATÉGORIE RENSEIGNÉE) */}
                    {!p.category && (
                      <div className="flex items-center gap-1.5 rounded-full border border-zinc-700/50 bg-zinc-900/60 px-3 py-1 font-mono text-[10px] font-semibold text-zinc-300 backdrop-blur-md shadow-lg">
                        <FolderGit2 className="h-3 w-3 text-zinc-400" />
                        RÉALISATION
                      </div>
                    )}

                    {/* BADGE DÉMO MOBILE */}
                    {isMobile && (
                      <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400 backdrop-blur-md shadow-lg">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        </span>
                        DÉMO MOBILE INTERACTIVE
                      </div>
                    )}
                  </div>

                  <div className="overflow-hidden bg-zinc-950 border-b border-zinc-900/50">
                    <ProjectImage
                      url={p.link}
                      alt={p.title}
                      prefix={p.prefix}
                      className={`w-full transition-all duration-700 ${
                        i === 0 ? 'aspect-21/9' : 'aspect-4/3'
                      }`}
                    />
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
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectSection
