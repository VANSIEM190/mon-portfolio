const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative border-t border-zinc-900 px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <div className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
            01 — À propos
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Je transforme des architectures complexes en produits fluides.
          </h2>
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-zinc-400">
          <p>
            À propos de moi je suis un développeur Full-Stack & Mobile et basé à
            Kinshasa (RDC). Actuellement étudiant à l'Université Catholique du
            Congo (UCC), il allie rigueur académique et expertise technique.{' '}
            <br />
            <br />
            <strong className="text-2xl">
              Expertise Technique Frontend & Mobile :
            </strong>
            <br /> React 19, React Native avec Expo, et TypeScript. Backend &
            Data : Architecture robuste avec Supabase, Prisma, et MySQL. Design
            : Conception d'interfaces (UI/UX) fluides, modernes et centrées sur
            l'utilisateur. <br />
            <br />
            <strong className="text-2xl">Partage & Communauté</strong>
            <br /> Créateur de contenu et mentor, Gracia anime activement la
            chaîne YouTube ClipNestDev. Il partage quotidiennement des tutoriels
            et des astuces concrètes pour aider les développeurs à progresser.
            Porté par la transmission, il fédère également une communauté sur
            Discord autour de formations et de projets collectifs.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="rounded-xl border border-zinc-900 bg-zinc-900/20 p-4">
              <div className="text-2xl font-bold text-white">React</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                Ecosystème
              </div>
            </div>
            <div className="rounded-xl border border-zinc-900 bg-zinc-900/20 p-4">
              <div className="text-2xl font-bold text-white">Clean</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                Rigueur Code
              </div>
            </div>
            <div className="rounded-xl border border-zinc-900 bg-zinc-900/20 p-4">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                Sur-mesure
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
