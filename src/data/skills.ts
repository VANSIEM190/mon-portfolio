import { Code2, Smartphone, Database, Container, Palette } from 'lucide-react'

export const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript / TypeScript', level: 78 },
  { name: 'React/nextjs', level: 75 },
  { name: 'React Native / Expo', level: 73 },
  { name: 'Nodejs / Prisma / Mysql', level: 65 },
  { name: 'Firebase / Supabase', level: 75 },
  { name: 'Java', level: 35 },
]

export const stack = [
  {
    icon: Code2,
    label: 'Frontend',
    items: ['React', 'Nextjs', 'TypeScript', 'HTML', 'CSS'],
  },
  { icon: Smartphone, label: 'Mobile', items: ['React Native', 'Expo'] },
  {
    icon: Database,
    label: 'Backend',
    items: [
      'Node.js/ExpressJs',
      'Nextjs',
      'Java',
      'Prisma',
      'Firebase',
      'Supabase',
      'MySQL',
    ],
  },
  {
    icon: Container,
    label: 'DevOps & Déploiement',
    items: ['Docker', 'Vercel', 'O2switch', 'onrender', 'Git / GitHub'],
  },
  {
    icon: Palette,
    label: 'Outils',
    items: ['Figma', 'Canva'],
  },
]
