import { Play, ArrowUpRight } from 'lucide-react'
import { FiYoutube } from 'react-icons/fi'

// À déplacer dans utils/data.js, comme `projects` et `socials`.
// Plus besoin de champ `thumbnail` : la miniature est générée depuis `url`.
const videos = [
  {
    title: 'Vibe Coding ce que personne ne te dit sur le code généré par IA',
    url: 'https://www.youtube.com/shorts/9Vv4fLa5m0g',
  },
  {
    title: 'Créer une Landing Page Moderne de A à Z HTML CSS',
    url: 'https://www.youtube.com/watch?v=UZHtz9HZK3g&t=5s',
  },
  {
    title:
      "Pourquoi tu comprends le code de l'IA mais tu n'arrives pas à le construire toi même",
    url: 'https://www.youtube.com/shorts/dwBLGJBFguM',
  },
]

// Extrait l'ID vidéo depuis les formats usuels (watch, shorts, youtu.be)
// et renvoie la miniature officielle YouTube — plus besoin d'uploader d'images.
const getYoutubeThumbnail = (url: string) => {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([^&?/]+)/
  )
  const id = match?.[1]
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : undefined
}

const YoutubeSection = () => {
  return (
    <section
      id="youtube"
      className="relative border-t border-zinc-200 bg-[#f7f6f1] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-4 font-mono text-xs tracking-widest text-zinc-500 uppercase">
              05 — Contenu
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Je partage mon savoir sur{' '}
              <span className="font-serif font-medium text-red-800 italic">
                YouTube
              </span>
              .
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-zinc-600 md:text-right">
            Sur ma chaîne{' '}
            <span className="font-medium text-zinc-800">ClipNestDev</span>, je
            publie des tutoriels concrets sur le développement web, mobile et
            l'intelligence artificielle — pensés pour aider les développeurs à
            progresser vite.
          </p>
        </div>

        {/* Bandeau chaîne */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
              <FiYoutube className="h-7 w-7" />
            </div>
            <div>
              <div className="text-lg font-bold text-zinc-900">ClipNestDev</div>
              <div className="font-mono text-xs text-zinc-500">
                Tutoriels dev &amp; IA · Web, Mobile
              </div>
            </div>
          </div>
          <a
            href="https://www.youtube.com/@ClipNestDev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-5 py-3 font-mono text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:bg-zinc-800"
          >
            S'abonner à la chaîne <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Grille de vidéos */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map(video => (
            <a
              key={video.title}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden bg-zinc-900">
                <img
                  src={getYoutubeThumbnail(video.url)}
                  alt={video.title}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-zinc-900 shadow-lg">
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 text-sm font-semibold text-zinc-900">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default YoutubeSection
