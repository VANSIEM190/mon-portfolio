# Portfolio de Van'siem

Portfolio personnel réalisé avec React, TypeScript, Vite et Tailwind CSS.

## Démarrer le projet

```bash
npm install
npm run dev
```

Commandes disponibles : `npm run build`, `npm run lint` et `npm run preview`.

## Organisation de `src`

- `App.tsx` assemble les sections de la page.
- `components/layout/` contient la navigation et le pied de page.
- `sections/` contient les sections du portfolio, avec `sections/projects/` pour les projets.
- `features/chatbot/` contient le widget de discussion.
- `data/` contient les contenus typés affichés sur le site.
- `lib/` contient la configuration partagée de l'API.
- `styles/` contient les styles globaux.
- `assets/` regroupe les ressources visuelles du projet.

Les fichiers statiques servis tels quels (photo de profil, CV, favicon et fichiers SEO) restent dans `public/`.
