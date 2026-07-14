import { Mail, Code2, Smartphone, Database } from 'lucide-react'
import { FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

export const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript / TypeScript', level: 78 },
  { name: 'React', level: 75 },
  { name: 'React Native / Expo', level: 73 },
  { name: 'Nodejs / Prisma / Mysql', level: 65 },
  { name: 'Firebase / Supabase', level: 75 },
  { name: 'Java', level: 42 },
]

export const stack = [
  {
    icon: Code2,
    label: 'Frontend',
    items: ['React', 'TypeScript', 'HTML', 'CSS'],
  },
  { icon: Smartphone, label: 'Mobile', items: ['React Native', 'Expo'] },
  {
    icon: Database,
    label: 'Backend',
    items: ['Node.js', 'Java', 'Prisma', 'Firebase', 'Supabase', 'MySQL'],
  },
]

export const projects = [
  {
    title:
      "MedicQuiz — Plateforme Web & Mobile d'Orientation Médicale à Distance",
    description: `Conception et développement d'un écosystème complet (Web et Mobile) visant à digitaliser le pré-diagnostic et à faciliter l'accès aux soins sans déplacement. La plateforme permet aux professionnels de santé de publier des quiz d'évaluation ciblés, offrant aux patients un outil d'auto-examen et d'orientation immédiat. Cet écosystème interconnecté repose sur une application mobile React Native (Expo) et une interface web moderne, synchronisées via une API hautement disponible hébergée sur Render.`,
    prefix: 'MQ',
    tags: ['React (Web)', 'TypeScript', 'Render', 'Docker', 'firebase'],
    link: 'https://medicquiz.onrender.com/',
  },
  {
    title: "MedicQuiz — Plateforme Mobile d'Orientation Médicale",
    description: `Conception et développement d'une application mobile React Native (Expo) visant à digitaliser le pré-diagnostic et à faciliter l'accès aux soins sans déplacement. La plateforme permet aux professionnels de santé de publier des quiz d'évaluation ciblés, offrant aux patients un outil d'auto-examen et d'orientation immédiat. Cet écosystème interconnecté repose sur une application mobile React Native (Expo) et une interface web moderne, synchronisées via une API hautement disponible hébergée sur Render.`,
    prefix: 'MQ',
    tags: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
    // On utilise le "Play URL" d'Appetize
    link: 'https://appetize.io/embed/b_lah4eqdvi6762sqqyfuqpunqzm',
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
      'java',
      'spring boot',
      'mysql',
    ],
    link: 'https://profalamaison.com/',
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

export const education = [
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
export const socials = [
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
