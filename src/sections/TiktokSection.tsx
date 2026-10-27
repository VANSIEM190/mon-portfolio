import { ArrowUpRight } from 'lucide-react'
import { FaTiktok } from 'react-icons/fa'
import { tiktokVideos } from '../data/videos'

interface TikTokPlayerProps {
  videoId: string
  title: string
}

const TikTokPlayer = ({ videoId, title }: TikTokPlayerProps) => (
  <iframe
    src={'https://www.tiktok.com/player/v1/' + videoId + '?controls=1&description=1'}
    title={'TikTok: ' + title}
    className="absolute inset-0 h-full w-full border-0"
    allow="encrypted-media; fullscreen; picture-in-picture"
    allowFullScreen
    loading="lazy"
  />
)

const TiktokSection = () => {
  return (
    <section
      id="tiktok"
      className="relative border-t border-zinc-200 bg-[#f7f6f1] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs tracking-widest text-zinc-500 uppercase">
              07 &mdash; Contenu
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Des formats courts sur{' '}
              <span className="font-serif font-medium text-zinc-900 italic">
                TikTok
              </span>
              .
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-zinc-600 md:text-right">
            D&eacute;couvre mes vid&eacute;os autour du d&eacute;veloppement et de l'IA,
            publi&eacute;es sous le nom ClipNestDev.
          </p>
        </div>

        <div className="relative mb-8 overflow-hidden rounded-3xl bg-zinc-950 p-6 text-white shadow-xl sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-cyan-400/10 blur-[100px]"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white text-zinc-950">
                <FaTiktok className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
                  Retrouvez-moi sur
                </p>
                <p className="mt-1 text-lg font-bold">@clipnestdev</p>
                <p className="mt-1 text-xs text-zinc-400">
                  D&eacute;veloppement web &amp; intelligence artificielle
                </p>
              </div>
            </div>
            <a
              href="https://www.tiktok.com/@clipnestdev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-mono text-xs font-semibold tracking-wider text-zinc-950 uppercase transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Suivre le compte
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 justify-center gap-4 sm:grid-cols-[repeat(auto-fit,220px)] sm:gap-5">
          {tiktokVideos.map(tiktok => {
            const videoId = tiktok.url.match(/\/video\/(\d+)/)?.[1]
            if (!videoId) return null

            return (
              <article
                key={tiktok.url}
                className="group w-full max-w-[220px] overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl"
              >
                <div className="relative aspect-[9/16] overflow-hidden bg-zinc-950">
                  <TikTokPlayer videoId={videoId} title={tiktok.title} />
                </div>
                <div className="flex min-h-24 items-center justify-between gap-3 p-4">
                  <div className="min-w-0">
                    <p className="mb-1 font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
                      ClipNestDev
                    </p>
                    <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-zinc-900">
                      {tiktok.title}
                    </h3>
                  </div>
                  <a
                    href={tiktok.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ouvrir cette video sur TikTok"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-colors hover:bg-zinc-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
                  >
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TiktokSection
