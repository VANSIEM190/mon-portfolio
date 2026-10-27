import { ArrowUpRight, Play } from 'lucide-react'
import { FiYoutube } from 'react-icons/fi'
import { youtubeVideos } from '../data/videos'

const getYoutubeThumbnail = (url: string) => {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([^&?/]+)/
  )
  const id = match?.[1]
  return id ? 'https://img.youtube.com/vi/' + id + '/hqdefault.jpg' : undefined
}

const YoutubeSection = () => {
  return (
    <section
      id="youtube"
      className="relative overflow-hidden border-t border-white/10 bg-zinc-950 px-4 py-24 text-white sm:px-6 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-red-600/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs tracking-widest text-zinc-500 uppercase">
              05 &mdash; Contenu
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Je partage mon savoir sur{' '}
              <span className="font-serif font-medium text-red-400 italic">
                YouTube
              </span>
              .
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-zinc-400 md:text-right">
            Sur ma cha&icirc;ne{' '}
            <span className="font-medium text-white">ClipNestDev</span>, je
            publie des tutoriels sur le d&eacute;veloppement web, mobile et
            l'intelligence artificielle.
          </p>
        </div>

        <div className="mb-8 flex flex-col items-start justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-950/40">
              <FiYoutube className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold text-white">ClipNestDev</p>
              <p className="mt-1 font-mono text-xs text-zinc-400">
                Tutoriels dev &amp; IA &middot; Web, Mobile
              </p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/@ClipNestDev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-mono text-xs font-semibold tracking-wider text-zinc-950 uppercase transition-colors hover:bg-red-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            S'abonner &agrave; la cha&icirc;ne
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {youtubeVideos.map(video => (
            <a
              key={video.url}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={video.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-red-400/50 hover:shadow-xl hover:shadow-red-950/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
              <div className="relative aspect-video overflow-hidden bg-zinc-900">
                <img
                  src={getYoutubeThumbnail(video.url)}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 via-black/10 to-transparent">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-red-600 shadow-xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden="true" />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="line-clamp-2 min-h-12 text-sm font-semibold leading-relaxed text-white">
                  {video.title}
                </h3>
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs">
                  <span className="font-mono text-zinc-500">YouTube</span>
                  <span className="inline-flex items-center gap-1.5 text-red-300 transition-colors group-hover:text-red-200">
                    Regarder la vid&eacute;o
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default YoutubeSection