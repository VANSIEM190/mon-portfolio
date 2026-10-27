export type ClientType = 'physique' | 'morale' | null

type Testimonial = {
  id: string
  name: string
  context: string
  quote: string
  imageUrl: string
  imageAlt: string
  clientType: ClientType
}

// Place les photos et logos dans public/images/clients, puis indique leur chemin
// ici (ex. : /images/clients/nom-client.jpg).
export const testimonials: Testimonial[] = [
  {
    id: 'temoignage-1',
    name: 'Nom à compléter',
    context: 'Client, apprenant ou collaborateur',
    quote: 'Témoignage à ajouter avec l’accord de son auteur.',
    imageUrl: '',
    imageAlt: 'Photo ou logo du client',
    clientType: null,
  },
  {
    id: 'temoignage-2',
    name: 'Nom à compléter',
    context: 'Client, apprenant ou collaborateur',
    quote: 'Témoignage à ajouter avec l’accord de son auteur.',
    imageUrl: '',
    imageAlt: 'Photo ou logo du client',
    clientType: null,
  },
  {
    id: 'temoignage-3',
    name: 'Nom à compléter',
    context: 'Client, apprenant ou collaborateur',
    quote: 'Témoignage à ajouter avec l’accord de son auteur.',
    imageUrl: '',
    imageAlt: 'Photo ou logo du client',
    clientType: null,
  },
]
