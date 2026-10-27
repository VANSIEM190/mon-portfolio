import { Download } from "lucide-react";
import { socials } from "../data/socials";

const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#f7f6f1] px-4 pt-28 pb-16 sm:px-6 lg:pt-32 lg:pb-20"
    >
      {/* Fond quadrillé subtil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000009_1px,transparent_1px),linear-gradient(to_bottom,#00000009_1px,transparent_1px)] bg-[size:44px_44px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:gap-16 lg:grid-cols-[1.15fr_1fr]">
        {/* Colonne de gauche */}
        <div>
          <h1 className="text-balance text-4xl leading-[1.08] font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-5xl 2xl:text-6xl">
            Je développe{" "}
            <span className="font-serif font-medium text-indigo-950 italic">
              l'architecture web
            </span>{" "}
            qui propulse votre{" "}
            <span className="font-serif font-medium text-emerald-900 italic">
              croissance
            </span>
            .
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600">
            Développeur{" "}
            <span className="font-medium text-indigo-800">Fullstack</span> &amp;
            concepteur de produits{" "}
            <span className="font-medium text-indigo-800">digitaux</span>. Je
            conçois des architectures robustes et des applications web
            optimisées pour{" "}
            <span className="font-medium text-emerald-800">convertir</span> vos
            utilisateurs, maximiser les performances et accompagner votre
            croissance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-5 py-3 font-mono text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:bg-zinc-800"
            >
              Démarrer un projet
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-5 py-3 font-mono text-xs font-semibold tracking-widest text-zinc-800 uppercase transition-colors hover:border-zinc-400 hover:bg-zinc-50"
            >
              Consulter mes réalisations
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5 border-y border-zinc-200 py-4">
            <div>
              <p className="font-mono text-[11px] tracking-widest text-zinc-500 uppercase">
                Maîtrise intelligence artificielle
              </p>
              <p className="mt-1 font-serif text-3xl text-zinc-900">
                60%{" "}
                <span className="font-sans text-sm font-normal text-zinc-500">
                  (LLM)
                </span>
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-widest text-zinc-500 uppercase">
                Score de performance
              </p>
              <p className="mt-1 font-serif text-3xl text-zinc-900">
                75/100{" "}
                <span className="font-sans text-sm font-normal text-zinc-500">
                  (moyenne)
                </span>
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center flex-wrap gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-500 transition-all hover:border-zinc-400 hover:text-zinc-900"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="/cvVansiemPortfolio.pdf"
              download="CV_Gracia_Van_Siem.pdf"
              className="inline-flex items-center gap-2 font-mono text-xs font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-900"
            >
              <Download className="h-3.5 w-3.5" />
              Télécharger mon CV
            </a>
          </div>
        </div>

        {/* Colonne de droite : photo encadrée + badges flottants */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="rounded-full border-2 border-zinc-900 bg-zinc-900 p-2 shadow-2xl">
            <img
              src="/van.jpeg"
              alt="Photo de profil"
              width={800}
              height={800}
              className="aspect-square w-full rounded-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
