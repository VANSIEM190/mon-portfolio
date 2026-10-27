const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative border-t border-zinc-200 bg-[#f7f6f1] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* En-tête : titre à gauche, courte accroche d'identité à droite */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-4 font-mono text-xs tracking-widest text-zinc-500 uppercase">
              01 — À propos
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Je transforme des architectures{" "}
              <span className="font-serif font-medium text-indigo-950 italic">
                complexes
              </span>{" "}
              en produits fluides.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-zinc-600 md:text-right">
            Développeur Full-Stack &amp; Mobile basé à Kinshasa (RDC).
            Actuellement étudiant à l'Université Catholique du Congo (UCC),
            j'allie rigueur académique et expertise technique.
          </p>
        </div>

        {/* Deux blocs de contenu côte à côte, plutôt qu'un seul paragraphe fourre-tout */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-zinc-900">
              Expertise technique
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-zinc-600">
              <li>
                <span className="font-medium text-zinc-800">
                  Frontend &amp; Mobile
                </span>{" "}
                React 19, React Native avec Expo, TypeScript.
              </li>
              <li>
                <span className="font-medium text-zinc-800">
                  Backend &amp; Data
                </span>{" "}
                Architecture robuste avec Supabase, Prisma et MySQL.
              </li>
              <li>
                <span className="font-medium text-zinc-800 mr-0.5">Design</span>
                Conception d'interfaces UI/UX fluides, modernes et centrées sur
                l'utilisateur.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-zinc-900">
              Partage &amp; communauté
            </h3>
            <p className="text-sm leading-relaxed text-zinc-600">
              En tant que créateur de contenu, j'anime activement la chaîne
              YouTube{" "}
              <span className="font-medium text-zinc-800">ClipNestDev</span>, où
              je partage quotidiennement des tutoriels et des astuces concrètes
              pour aider les développeurs à progresser. Porté par la
              transmission, je fédère aussi une communauté sur Discord autour de
              formations et de projets collectifs.
            </p>
          </div>
        </div>

        {/* Bandeau de statistiques unifié, sous forme de barre plutôt que de cartes séparées */}
        <div className="mt-6 grid grid-cols-3 divide-x divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
          <div className="p-6 text-center">
            <div className="text-2xl font-bold text-zinc-900">React</div>
            <div className="mt-1 font-mono text-[10px] tracking-wider text-zinc-500 uppercase">
              Écosystème
            </div>
          </div>
          <div className="p-6 text-center">
            <div className="text-2xl font-bold text-zinc-900">Clean</div>
            <div className="mt-1 font-mono text-[10px] tracking-wider text-zinc-500 uppercase">
              Rigueur code
            </div>
          </div>
          <div className="p-6 text-center">
            <div className="text-2xl font-bold text-zinc-900">100%</div>
            <div className="mt-1 font-mono text-[10px] tracking-wider text-zinc-500 uppercase">
              Sur-mesure
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
