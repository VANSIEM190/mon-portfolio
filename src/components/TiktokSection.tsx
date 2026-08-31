import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { FaTiktok } from 'react-icons/fa'

// À déplacer dans utils/data.js, comme `videos` (YouTube).
// Remplace ces URLs par tes vraies vidéos TikTok.
const tiktoks = [
  {
    title: 'Ton code est-il "Junior" ? (Comparaison JS)',
    url: 'https://www.tiktok.com/@clipnestdev/video/7630154573587418390',
  },
  {
    title: "Comment apprendre à coder avec l'IA en 2026 (Sans tricher)",
    url: 'https://www.tiktok.com/@clipnestdev/video/0000000000000000001',
  },
  {
    title: 'Vibe Coding ce que personne ne te dit sur le code généré par IA',
    url: 'https://www.tiktok.com/@clipnestdev/video/7679513041720986902',
  },
  {
    title: 'une technologie pour tout faire',
    url: 'https://www.tiktok.com/@clipnestdev/video/7620842821993368854',
  },
]

interface TiktokEmbed {
  title: string
  thumbnail_url: string
}

interface TiktokThumbnailProps {
  url: string
  fallbackTitle: string
}

// Récupère la miniature réelle via l'API oEmbed de TikTok (pas d'URL statique
// prévisible comme YouTube, donc un fetch est nécessaire).
const TiktokThumbnail = ({ url, fallbackTitle }: TiktokThumbnailProps) => {
  const [data, setData] = useState<TiktokEmbed | null>(null)
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>(
    'loading'
  )

  useEffect(() => {
    let active = true

    fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`)
      .then(res => {
        if (!res.ok) throw new Error('oEmbed indisponible')
        return res.json()
      })
      .then((json: TiktokEmbed) => {
        if (active) {
          setData(json)
          setStatus('success')
        }
      })
      .catch(() => {
        if (active) setStatus('error')
      })

    return () => {
      active = false
    }
  }, [url])

  if (status === 'loading') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 animate-[shimmer_1.8s_infinite] bg-[linear-gradient(110deg,#09090b_35%,#18181b_50%,#09090b_65%)] bg-[length:200%_100%]" />
      </div>
    )
  }

  if (status === 'error' || !data?.thumbnail_url) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-zinc-900 p-4 text-zinc-500">
        <FaTiktok className="h-6 w-6" />
        <span className="line-clamp-3 max-w-[85%] text-center font-mono text-[10px]">
          {fallbackTitle}
        </span>
      </div>
    )
  }

  return (
    <img
      src={data.thumbnail_url}
      alt={fallbackTitle}
      className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
  )
}

const TiktokSection = () => {
  return (
    <section
      id="tiktok"
      className="relative border-t border-zinc-200 bg-[#f7f6f1] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-4 font-mono text-xs tracking-widest text-zinc-500 uppercase">
              07 — Contenu
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Et aussi sur{' '}
              <span className="font-serif font-medium text-zinc-900 italic">
                TikTok
              </span>
              .
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-zinc-600 md:text-right">
            Des formats courts et directs pour découvrir le dev et l'IA
            autrement — toujours sous{' '}
            <span className="font-medium text-zinc-800">ClipNestDev</span>.
          </p>
        </div>

        {/* Bandeau chaîne */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white">
              <FaTiktok className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-bold text-zinc-900">
                @clipnestdev
              </div>
              <div className="font-mono text-xs text-zinc-500">
                Dev &amp; IA en formats courts
              </div>
            </div>
          </div>
          <a
            href="https://www.tiktok.com/@clipnestdev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-5 py-3 font-mono text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:bg-zinc-800"
          >
            Suivre sur TikTok <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Grille de vidéos, en format vertical 9:16 */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {tiktoks.map(tiktok => (
            <a
              key={tiktok.url}
              href={tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-zinc-900">
                <TiktokThumbnail
                  url={tiktok.url}
                  fallbackTitle={tiktok.title}
                />
              </div>
              <div className="p-3">
                <h3 className="line-clamp-2 text-xs font-semibold text-zinc-900">
                  {tiktok.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TiktokSection
