export type ProjectCategory = 'Client' | 'Personnel' | 'Communautaire'

export interface Project {
  title: string
  description: string
  prefix: string
  tags: string[]
  link: string
  category?: ProjectCategory
  clientName?: string
}
export const projects: Project[] = [
  {
    title:
      "MedicQuiz — Plateforme Web & Mobile d'Orientation Médicale à Distance",
    description: `Conception et développement d'un écosystème complet (Web et Mobile) visant à digitaliser le pré-diagnostic et à faciliter l'accès aux soins sans déplacement. La plateforme permet aux professionnels de santé de publier des quiz d'évaluation ciblés, offrant aux patients un outil d'auto-examen et d'orientation immédiat. Cet écosystème interconnecté repose sur une application mobile React Native (Expo) et une interface web moderne, synchronisées via une API hautement disponible hébergée sur Render.`,
    prefix: 'MQ',
    tags: ['React (Web)', 'TypeScript', 'Onrender', 'Docker', 'firebase'],
    link: 'https://medicquiz.onrender.com/',
    category: 'Personnel',
  },
  {
    title: "MedicQuiz — Plateforme Mobile d'Orientation Médicale",
    description: `Conception et développement d'une application mobile React Native (Expo) visant à digitaliser le pré-diagnostic et à faciliter l'accès aux soins sans déplacement. La plateforme permet aux professionnels de santé de publier des quiz d'évaluation ciblés, offrant aux patients un outil d'auto-examen et d'orientation immédiat. Cet écosystème interconnecté repose sur une application mobile React Native (Expo) et une interface web moderne, synchronisées via une API hautement disponible hébergée sur Render.`,
    prefix: 'MQ',
    tags: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
    // On utilise le "Play URL" d'Appetize
    link: 'https://appetize.io/embed/b_lah4eqdvi6762sqqyfuqpunqzm',
    category: 'Personnel',
  },
  {
    title:
      "ProfALaMaison — Plateforme de Tutorat à Domicile et Réservation d'Heures de Cours",
    description: `Conception et engineering d'une plateforme web mettant en relation directe les parents d'élèves et des tuteurs qualifiés pour des cours de soutien à la maison. L'application intègre un moteur de recherche multicritère pour identifier le profil d'enseignant idéal et propose un système de réservation de séances flexible, facturé à la minute. L'architecture repose sur une gestion rigoureuse des créneaux horaires, la synchronisation en temps réel des agendas et un tableau de bord intuitif permettant de suivre l'historique des cours et les budgets de formation.`,
    prefix: 'PAM',
    tags: [
      'React',
      'tailwindcss',
      'TypeScript',
      'spring boot',
      'mysql',
      'Docker',
      'onrender',
    ],
    link: 'https://profalamaison.com/',
    category: 'Communautaire',
  },
  {
    title: 'SmartQuiz — Plateforme de Quiz Gaming avec Classement Interactif',
    description: `Développement d'une application web de quiz compétitive axée sur l'interactivité. La plateforme permet aux utilisateurs de s'affronter sur différentes thématiques et intègre un tableau de bord complet pour suivre ses statistiques personnelles. La pièce maîtresse du projet est son système de classement (Leaderboard) mis à jour en temps réel, garantissant une synchronisation instantanée des scores.`,
    prefix: 'LQ',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Fiirebase', 'vercel'],
    link: 'https://quiz-application-kappa-green.vercel.app/',
    category: 'Personnel',
  },
  {
    title:
      "ClipnestDev — Plateforme Communautaire d'Échange & d'Entraide pour Développeurs",
    description: `Conception et engineering de l'espace communautaire officiel pour clipnest Dev, une plateforme web d'entraide et de partage d'expériences destinée aux développeurs de la communauté. Le site permet aux membres de présenter leurs projets de code, de documenter leur progression et d'ouvrir des discussions techniques ou des tickets d'assistance lorsqu'ils rencontrent des bugs bloquants.`,
    prefix: 'CD',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Firebase', 'vercel'],
    link: 'https://www.clipnestdev.tech/',
    category: 'Personnel',
  },
  {
    title:
      'Mindset de Leader — Plateforme de Motivation et de Conseils pour les Jeunes',
    description: `Conception du site vitrine officiel de Mindset de Leader, une plateforme dédiée à la motivation et à l'accompagnement des jeunes, pensée pour remplacer un groupe WhatsApp communautaire de conseils vocaux. Le site présente la mission de la plateforme, l'équipe, l'historique, les actualités et un blog, et sert de vitrine en attendant l'application mobile qui portera les fonctionnalités avancées (bibliothèque de contenus, notifications, dashboard).`,
    prefix: 'ML',
    tags: ['React', 'Typescript', 'Tailwind CSS', 'Nodejs', 'vercel'],
    link: 'https://mindsetdesleaders.vercel.app/',
    category: 'Client',
  },
  {
    title:
      'FsiUcc — Plateforme Communautaire de la Faculté des Sciences Informatiques',
    description: `Conception et développement collaboratif du site officiel de la communauté FsiUcc, la Faculté des Sciences Informatiques. La plateforme sert de vitrine et d'espace de centralisation pour les étudiants et membres de la faculté, avec une interface moderne et responsive développée dans le cadre d'un projet communautaire.`,
    prefix: 'FSI',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'laravel', 'O2switch'],
    link: 'https://fsiucc.com/',
    category: 'Communautaire',
  },
  {
    title: "Portfolio Professionnel — [Van'siem Fono Jeancy]",
    description: `Conception et développement sur mesure du site vitrine institutionnel de l'entreprise. Intégration d'une interface dynamique et responsive, optimisation des performances d'affichage et mise en place d'un parcours utilisateur optimisé pour la conversion et la prise de contact.`,
    prefix: 'SCJ',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://vansiem-portefolio.vercel.app/',
    category: 'Client',
    clientName: 'jeançy',
  },
]
