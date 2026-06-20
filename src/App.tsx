import { useState } from 'react'
import { FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Send,
  Code2,
  Smartphone,
  Database,
  Sparkles,
  ExternalLink,
  Download,
  GraduationCap,
} from 'lucide-react'
import imageProfil from './assets/img-profil.jpg'

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript / TypeScript', level: 75 },
  { name: 'React', level: 65 },
  { name: 'React Native / Expo', level: 60 },
  { name: 'Nodejs / Prisma / Mysql', level: 60 },
  { name: 'Firebase / Supabase', level: 75 },
]

const stack = [
  {
    icon: Code2,
    label: 'Frontend',
    items: ['React', 'TypeScript', 'HTML', 'CSS'],
  },
  { icon: Smartphone, label: 'Mobile', items: ['React Native', 'Expo'] },
  {
    icon: Database,
    label: 'Backend',
    items: ['Node.js', 'Prisma', 'Firebase', 'Supabase', 'MySQL'],
  },
]

const projects = [
  {
    title:
      "MedicQuiz — Plateforme Web & Mobile d'Orientation Médicale à Distance",
    description: `Conception et développement d'un écosystème complet (Web et Mobile) visant à digitaliser le pré-diagnostic et à faciliter l'accès aux soins sans déplacement. La plateforme permet aux professionnels de santé de publier des quiz d'évaluation ciblés, offrant aux patients un outil d'auto-examen et d'orientation immédiat. Cet écosystème interconnecté repose sur une application mobile React Native (Expo) et une interface web moderne, synchronisées via une API hautement disponible hébergée sur Render.`,
    prefix: 'MQ',
    tags: [
      'React Native',
      'Expo',
      'React (Web)',
      'TypeScript',
      'Render',
      'firebase',
    ],
    link: 'https://medicquiz.onrender.com/',
  },
  {
    title: 'SmartQuiz — Plateforme de Quiz Gaming avec Classement Interactif',
    description: `Développement d'une application web de quiz compétitive axée sur l'interactivité. La plateforme permet aux utilisateurs de s'affronter sur différentes thématiques et intègre un tableau de bord complet pour suivre ses statistiques personnelles. La pièce maîtresse du projet est son système de classement (Leaderboard) mis à jour en temps réel, garantissant une synchronisation instantanée des scores.`,
    prefix: 'LQ',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Fiirebase', 'vercel'],
    link: 'https://quiz-application-kappa-green.vercel.app/',
  },
  {
    title:
      "ClipnestDev — Plateforme Communautaire d'Échange & d'Entraide pour Développeurs",
    description: `Conception et engineering de l'espace communautaire officiel pour clipnest Dev, une plateforme web d'entraide et de partage d'expériences destinée aux développeurs de la communauté. Le site permet aux membres de présenter leurs projets de code, de documenter leur progression et d'ouvrir des discussions techniques ou des tickets d'assistance lorsqu'ils rencontrent des bugs bloquants.`,
    prefix: 'CD',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Firebase', 'vercel'],
    link: 'https://www.clipnestdev.tech/',
  },
]

const education = [
  {
    degree: 'Licence en Sciences Informatiques',
    school: 'Université Catholique du Congo (UCC)',
    period: 'En cours',
    description:
      "Spécialisation en génie logiciel, modélisation des architectures de bases de données et développement des systèmes d'information.",
  },
  {
    degree: 'Certification Professionnelle Full-Stack React & Redux',
    school: 'Udemy Academic Blueprint',
    period: '2026',
    description:
      "Maîtrise avancée des architectures d'états complexes, du cycle de vie des composants React et de l'intégration de middleware asynchrones.",
  },
  {
    degree: "Stage d'assimilation",
    school: 'DUIK (Direction Urbaine des Impôts) | Kinshasa',
    period: '2025',
    description:
      "Stage pratique obligatoire avant l'obtention du diplôme. Immersion dans le système de gestion fiscale de la ville pour comprendre la numérisation et le traitement des données administratives.",
  },
  {
    degree: "Diplôme d'État en Option Commerciale et Gestion",
    school: 'CS Sacré Coeur De Jesus',
    period: '2025',
    description:
      "Formation secondaire axée sur les principes fondamentaux de la gestion d'entreprise, de la comptabilité générale et de l'organisation administrative. Cette formation m'a permis de développer une forte rigueur analytique, une maîtrise du calcul commercial et une compréhension globale des flux financiers et économiques.",
  },
]

const socials = [
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gracia-van-siem-575865347/',
  },
  {
    icon: FaFacebook,
    label: 'Facebook',
    href: 'https://web.facebook.com/gracia.saint.van.s',
  },
  { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/243980307974' },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/graciasainvans190',
  },
  { icon: Mail, label: 'Email', href: 'mailto:vansiemgracia03@gmail.com' },
]

export default function Portfolio() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact de ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    )
    window.location.href = `mailto:vansiemgracia03@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-white">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-900 bg-zinc-950/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a
            href="#top"
            className="font-mono text-sm font-bold tracking-wider text-zinc-200 transition-colors hover:text-white"
          >
            <span>{"<Van'siem.dev/>"}</span>
          </a>
          <ul className="hidden gap-8 text-xs font-medium uppercase tracking-widest text-zinc-400 md:flex">
            <li>
              <a href="#about" className="transition-colors hover:text-white">
                À propos
              </a>
            </li>
            <li>
              <a href="#skills" className="transition-colors hover:text-white">
                Compétences
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="transition-colors hover:text-white"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="transition-colors hover:text-white"
              >
                Formation
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-white">
                Contact
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-medium uppercase tracking-wider text-zinc-200 transition-all hover:border-zinc-700 hover:bg-zinc-850"
          >
            Me contacter
          </a>
        </nav>
      </header>

      {/* Hero */}
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
                href="/cv.pdf"
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
                <div className="absolute -bottom-3 -left-3 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 shadow-xl">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                    Status
                  </div>
                  <div className="mt-0.5 flex items-center gap-1.5 text-xs font-medium text-zinc-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    En ligne
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 shadow-xl">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                    Stack principal
                  </div>
                  <div className="mt-0.5 text-xs font-medium text-zinc-300">
                    React · RN · TS
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

      {/* About */}
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
              Je suis un développeur Full-Stack et designer UI/UX spécialisé
              dans l'écosystème JavaScript moderne (React, React Native,
              TypeScript). Du pixel au déploiement, je conçois des solutions web
              et mobiles robustes en appliquant les meilleurs standards du Clean
              Code (principes DRY et SRP). Fondateur de{' '}
              <strong>clipnest Dev</strong>, je mets la technique au service de
              l'innovation et de l'entraide communautaire.
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

      {/* Skills */}
      <section
        id="skills"
        className="relative border-t border-zinc-900 px-4 py-24 sm:px-6 sm:py-32 bg-zinc-950"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <div className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
              02 — Compétences
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Maîtrise technologique
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-x-16">
            {skills.map(skill => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-end justify-between text-sm">
                  <span className="font-medium text-zinc-300">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1 w-full rounded-full bg-zinc-900">
                  <div
                    className="h-full rounded-full bg-zinc-400 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Stack Grid */}
          <div className="mt-24 grid gap-6 md:grid-cols-3">
            {stack.map(s => (
              <div
                key={s.label}
                className="rounded-2xl border border-zinc-900 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all hover:border-zinc-800"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300">
                  <s.icon className="h-4 w-4" />
                </div>
                <h3 className="mb-3 text-base font-semibold text-white">
                  {s.label}
                </h3>
                <ul className="space-y-2 text-xs text-zinc-400">
                  {s.items.map(item => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-mono"
                    >
                      <Sparkles className="h-3 w-3 text-zinc-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative border-t border-zinc-900 px-4 py-24 sm:px-6 sm:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
                03 — Projets
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
            {projects.map((p, i) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-900/20 transition-all hover:border-zinc-800 ${
                  i === 0 ? 'md:col-span-2' : ''
                }`}
              >
                {/* Visual Placeholder Block instead of <img> broken links */}
                <div className="overflow-hidden bg-zinc-950">
                  <div
                    className={`flex w-full items-center justify-center bg-zinc-900/40 font-mono text-3xl font-bold tracking-wider text-zinc-800 opacity-60 transition-all duration-700 group-hover:bg-zinc-900/70 group-hover:opacity-95 ${
                      i === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'
                    }`}
                  >
                    {p.prefix}
                  </div>
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
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="relative border-t border-zinc-900 px-4 py-24 sm:px-6 sm:py-32 bg-zinc-950"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-16">
            <div className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
              04 — Formation
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Cursus & Certifications
            </h2>
          </div>

          <div className="relative border-l border-zinc-900 pl-6 space-y-12">
            {education.map((edu, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 border border-zinc-800 transition-all group-hover:border-zinc-500">
                  <div className="h-1.5 w-1.5 rounded-full bg-zinc-700 group-hover:bg-zinc-400" />
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">
                    {edu.degree}
                  </h3>
                  <span className="font-mono text-xs text-zinc-500 sm:text-right">
                    {edu.period}
                  </span>
                </div>

                <div className="mt-1 flex items-center gap-2 text-xs font-medium text-zinc-400">
                  <GraduationCap className="h-3.5 w-3.5 text-zinc-500" />
                  {edu.school}
                </div>

                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-500">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative border-t border-zinc-900 px-4 py-24 sm:px-6 sm:py-32 bg-zinc-950/40"
      >
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <div className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
                05 — Contact
              </div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Collaborons ensemble.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
                Vous avez un projet complexe à développer ou un besoin
                d'expertise technique ? Discutons-en.
              </p>
            </div>

            <a
              href="mailto:vansiemgracia03@gmail.com"
              className="inline-flex items-center gap-2.5 font-mono text-sm font-medium text-white underline decoration-zinc-700 underline-offset-4 hover:decoration-white"
            >
              <Mail className="h-4 w-4 text-zinc-400" />
              vansiemgracia03@gmail.com
            </a>

            <div className="pt-6">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                Écosystème digital
              </div>
              <div className="flex flex-wrap gap-2">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex items-center gap-2 rounded-lg border border-zinc-900 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white"
                  >
                    <s.icon className="h-3.5 w-3.5" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6 shadow-2xl sm:p-8"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium text-zinc-400"
                >
                  Nom complet
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-zinc-900 bg-zinc-900/40 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-zinc-700"
                  placeholder="Van'siem Gracia"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium text-zinc-400"
                >
                  Adresse email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-zinc-900 bg-zinc-900/40 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-zinc-700"
                  placeholder="vansiem@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium text-zinc-400"
                >
                  Votre brief projet
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-zinc-900 bg-zinc-900/40 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-zinc-700"
                  placeholder="Décrivez brièvement les objectifs de votre application..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-900 transition-all hover:bg-white"
              >
                {sent ? (
                  'Message transmis ✓'
                ) : (
                  <>
                    Transmettre le message <Send className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-zinc-900 px-4 py-8 text-center font-mono text-[11px] text-zinc-600 sm:px-6">
        © {new Date().getFullYear()} — Engineered with care. All rights
        reserved.
      </footer>
    </div>
  )
}
