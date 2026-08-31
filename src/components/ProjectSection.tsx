import { useState, useEffect } from 'react'
import { projects } from '../utils/data'
import {
  Briefcase,
  ExternalLink,
  Play,
  Code2,
  Users,
  FolderGit2,
  ArrowDown,
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
  title: string
}

// Composant de récupération d'image et rendu de l'émulateur mobile
// (inchangé, il fonctionne bien tel quel)
export const ProjectImage = ({
  url,
  alt,
  className,
  prefix,
  title,
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
      <div className={`${className} relative overflow-hidden bg-zinc-950`}>
        <div className="absolute inset-0 animate-[shimmer_1.8s_infinite] bg-[linear-gradient(110deg,#09090b_35%,#18181b_50%,#09090b_65%)] bg-[length:200%_100%]" />
        <span className="absolute bottom-3 left-3 font-mono text-[10px] text-zinc-600">
          Chargement de la capture…
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

        <div className="relative w-[150px] h-[300px] sm:w-[170px] sm:h-[340px] rounded-[36px] border-[6px] border-zinc-800 bg-zinc-900 shadow-2xl flex flex-col items-center justify-center transition-transform duration-500 group-hover/phone:scale-[1.03] group-hover/phone:border-zinc-700">
          <div className="absolute top-2.5 w-16 h-4 rounded-full bg-zinc-950 flex items-center justify-center z-20">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-900/40 mr-1" />
            <div className="w-8 h-1 rounded-full bg-zinc-800" />
          </div>

          <div className="w-full h-full rounded-[28px] overflow-hidden bg-zinc-950 relative flex flex-col items-center justify-center p-4">
            <div className="z-10 text-center flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl font-black text-white font-mono shadow-lg">
                {prefix}
              </div>
              <span className="max-w-[130px] text-[10px] font-mono tracking-widest text-zinc-400 font-semibold uppercase line-clamp-1">
                {title}
              </span>
              <span className="text-[8px] text-zinc-600 font-mono">
                Appuyer pour lancer
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
        className={`${className} bg-zinc-900/40 flex flex-col items-center justify-center gap-2 transition-colors duration-500 group-hover:bg-zinc-900/70`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 font-mono text-lg font-bold text-zinc-500">
          {prefix}
        </div>
        <span className="max-w-[70%] text-center font-mono text-[10px] text-zinc-600 line-clamp-1">
          {title}
        </span>
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
    <section
      id="projects"
      className="relative border-t border-zinc-900 bg-gray-900"
    >
      <div className="mx-auto grid max-w-[1600px] gap-8 px-4 sm:px-6 lg:grid-cols-[380px_1fr]">
        {/* Colonne gauche, fixe pendant que les cartes défilent */}
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center">
          <div className="py-24 lg:py-0">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
              02 — Projets & Réalisations
            </p>
            <h2 className="text-4xl font-light leading-[1.1] text-zinc-300 sm:text-5xl">
              Des architectures
              <br />
              conçues pour
              <br />
              <span className="italic text-white">convertir.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-500">
              Projets clients, applications sur-mesure et solutions à fort
              impact.
            </p>
            <div className="mt-10 hidden items-center gap-2 text-xs text-zinc-500 lg:flex">
              <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
              <span className="font-mono uppercase tracking-widest">
                Défilez vers le bas pour explorer
              </span>
            </div>
          </div>
        </div>

        {/* Colonne droite : cartes défilables horizontalement */}
        <div className="flex snap-x snap-mandatory gap-8 overflow-x-auto pt-24 pb-16 [scrollbar-width:none] lg:h-screen lg:items-center lg:pt-0 [&::-webkit-scrollbar]:hidden">
          {projectsData.map(p => {
            const isMobile = p.link.includes('appetize.io')

            return (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-[85vw] flex-none snap-center overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-900/20 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-xl hover:shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:w-[520px]"
              >
                {/* Badges (logique identique à l'existant) */}
                <div className="absolute top-4 right-4 z-30 flex flex-col items-end gap-2">
                  {p.category === 'Client' && (
                    <div className="flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 font-mono text-[10px] font-semibold text-purple-300 backdrop-blur-md shadow-lg">
                      <Briefcase className="h-3 w-3 text-purple-400" />
                      PROJET CLIENT / FREELANCE
                    </div>
                  )}

                  {p.category === 'Personnel' && (
                    <div className="flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 px-3 py-1 font-mono text-[10px] font-semibold text-blue-300 backdrop-blur-md shadow-lg">
                      <Code2 className="h-3 w-3 text-blue-400" />
                      PROJET PERSONNEL / LAB
                    </div>
                  )}

                  {p.category === 'Communautaire' && (
                    <div className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/40 px-3 py-1 font-mono text-[10px] font-semibold text-amber-300 backdrop-blur-md shadow-lg">
                      <Users className="h-3 w-3 text-amber-400" />
                      COMMUNAUTAIRE / OPEN-SOURCE
                    </div>
                  )}

                  {!p.category && (
                    <div className="flex items-center gap-1.5 rounded-full border border-zinc-700/50 bg-zinc-900/60 px-3 py-1 font-mono text-[10px] font-semibold text-zinc-300 backdrop-blur-md shadow-lg">
                      <FolderGit2 className="h-3 w-3 text-zinc-400" />
                      RÉALISATION
                    </div>
                  )}

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

                <div className="overflow-hidden border-b border-zinc-900/50 bg-zinc-950">
                  <ProjectImage
                    url={p.link}
                    alt={p.title}
                    prefix={p.prefix}
                    title={p.title}
                    className="aspect-4/3 w-full transition-all duration-700"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      className="line-clamp-2 text-xl font-bold text-white transition-colors group-hover:text-zinc-300"
                      title={p.title}
                    >
                      {p.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 shrink-0 text-zinc-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>

                  <p className="mt-2 line-clamp-3 text-sm text-zinc-400 whitespace-pre-line">
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
  )
}

export default ProjectSection
