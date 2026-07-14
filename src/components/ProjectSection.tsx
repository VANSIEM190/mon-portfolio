import { useState, useEffect } from 'react'
import { projects } from '../utils/data'
import { ExternalLink, Play } from 'lucide-react'

// Interface TypeScript pour sécuriser la structure d'un projet
interface Project {
  title: string
  description: string
  prefix: string
  tags: string[]
  link: string
}

interface ProjectImageProps {
  url: string
  alt: string
  className: string
  prefix: string
}

// Composant de récupération d'image et rendu de l'émulateur mobile
const ProjectImage = ({ url, alt, className, prefix }: ProjectImageProps) => {
  const [screenshotUrl, setScreenshotUrl] = useState<string>('')

  // 1. Détection immédiate du type de projet au premier rendu
  const isAppetizeProject = url.includes('appetize.io')

  // 2. Initialisation intelligente du statut pour éviter tout setState synchrone dans le useEffect
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>(() => {
    if (!url) return 'error'
    if (isAppetizeProject) return 'success'
    return 'loading'
  })

  useEffect(() => {
    // Si l'URL est vide ou s'il s'agit d'Appetize, on s'arrête immédiatement sans changer l'état
    if (!url || isAppetizeProject) return

    let active = true
    const targetUrl = `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url`

    const img = new window.Image()
    img.src = targetUrl

    img.onload = () => {
      if (active) {
        setScreenshotUrl(targetUrl)
        setStatus('success') // Asynchrone : aucun problème de rendu cascade
      }
    }

    img.onerror = () => {
      if (active) {
        setStatus('error') // Asynchrone : aucun problème de rendu cascade
      }
    }

    return () => {
      active = false
    }
  }, [url, isAppetizeProject])

  // 1. Squelette de chargement (Skeleton Loader)
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

  // 2. Rendu spécifique pour l'application mobile (Mockup de Smartphone)
  if (isAppetizeProject) {
    return (
      <div
        className={`${className} bg-zinc-950 flex items-center justify-center p-6 relative overflow-hidden group/phone`}
      >
        {/* Grille de fond technologique */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

        {/* Châssis de smartphone */}
        <div className="relative w-[150px] h-[300px] sm:w-[170px] sm:h-[340px] rounded-[36px] border-[6px] border-zinc-800 bg-zinc-900 shadow-2xl flex flex-col items-center justify-center transition-all duration-500 group-hover/phone:scale-[1.03] group-hover/phone:border-zinc-700">
          {/* Haut-parleur / Encoche photo */}
          <div className="absolute top-2.5 w-16 h-4 rounded-full bg-zinc-950 flex items-center justify-center z-20">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-900/40 mr-1" />
            <div className="w-8 h-1 rounded-full bg-zinc-800" />
          </div>

          {/* Écran simulé du téléphone */}
          <div className="w-full h-full rounded-[28px] overflow-hidden bg-zinc-950 relative flex flex-col items-center justify-center p-4">
            {/* Logo de secours et texte d'accueil */}
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

            {/* Bouton Play flottant */}
            <div className="absolute inset-0 bg-zinc-950/40 flex items-center justify-center opacity-80 group-hover/phone:opacity-100 transition-opacity z-10">
              <div className="w-10 h-10 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-lg transform group-hover/phone:scale-110 transition-transform">
                <Play className="h-4 w-4 fill-current ml-0.5" />
              </div>
            </div>

            {/* Effet de reflet de vitre */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />
          </div>
        </div>
      </div>
    )
  }

  // 3. Fallback en cas d'erreur
  if (status === 'error') {
    return (
      <div
        className={`${className} bg-zinc-900/40 font-mono text-3xl font-bold tracking-wider text-zinc-800 opacity-60 transition-all duration-700 group-hover:bg-zinc-900/70 group-hover:opacity-95 flex items-center justify-center`}
      >
        {prefix}
      </div>
    )
  }

  // 4. Rendu final de l'image d'aperçu Web classique
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
  // Cast sécurisé des données importées
  const projectsData = projects as Project[]

  return (
    <section
      id="projects"
      className="relative border-t border-zinc-900 px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
              04 — Projets
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
                {/* Badge animé spécifique pour la version mobile */}
                {isMobile && (
                  <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400 backdrop-blur-sm">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    </span>
                    DÉMO MOBILE INTERACTIVE
                  </div>
                )}

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
  )
}

export default ProjectSection
