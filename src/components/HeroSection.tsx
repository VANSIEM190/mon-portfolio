import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import imageProfil from '../assets/img-profil.jpg'
import { socials } from '../utils/data'

const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-4 pt-32 pb-20 sm:px-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 -left-20 h-125 w-125 rounded-full bg-zinc-900/40 blur-[120px]" />
        <div className="absolute top-40 -right-20 h-150 w-150 rounded-full bg-slate-900/30 blur-[140px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div className="order-2 md:order-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-mono text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/85 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
            Disponible pour de nouveaux projets
          </div>

          <div className="mb-4 font-mono text-sm tracking-wide text-zinc-400">
            Moi c'est{' '}
            <span className="text-white font-semibold">
              Van'siem Fono Grace
            </span>
            , étudiant à l'UCC.
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Développeur
            <br />
            <span className="text-zinc-500 font-light">Full-Stack</span> &amp;
            Mobile
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
            Je conçois des écosystèmes web et mobiles modernes, fluides et
            optimisés avec
            <span className="text-zinc-200"> React</span>,
            <span className="text-zinc-200"> React Native / Expo</span> et
            <span className="text-zinc-200"> TypeScript</span>.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-900 transition-all hover:bg-white"
            >
              Voir mes projets <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="/cvVansiemPortfolio.pdf"
              download="CV_Gracia_Van_Siem.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-5 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
            >
              Télécharger mon CV <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-900 bg-zinc-950 text-zinc-400 transition-all hover:border-zinc-600 hover:text-white"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Profile Placeholder (No Image broken link) */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative">
            <div className="relative">
              <div className="flex h-72 w-72 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl sm:h-80 sm:w-80 md:h-96 md:w-96">
                <div className="text-center">
                  <img
                    src={imageProfil}
                    alt="Photo de profil"
                    width={800}
                    height={800}
                    className="h-72 w-72 rounded-2xl object-cover grayscale transition-all duration-500 hover:grayscale-0 sm:h-80 sm:w-80 md:h-96 md:w-96"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll vers la suite"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-zinc-500 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">
          Scroll
        </span>
        <ArrowDown className="h-3.5 w-3.5 animate-bounce text-zinc-600" />
      </a>
    </section>
  )
}

export default HeroSection
