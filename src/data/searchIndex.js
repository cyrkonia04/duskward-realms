import { allPeoples } from '@/data/world/peoples';

export const searchIndex = [
  { name: 'Home', hint: 'Page', to: '/' },
  { name: 'The World', hint: 'Page', to: '/world' },
  { name: 'History of the Realms', hint: 'World · Chapter', to: '/world/history' },
  { name: 'Calendar & Festivals', hint: 'World · Chapter', to: '/world/calendar' },
  { name: 'Core Themes', hint: 'World · Section', to: '/world#themes' },
  { name: 'The Great Wounding', hint: 'World · Section', to: '/world#wounding' },
  { name: 'The Grey Rot', hint: 'World · Section', to: '/world#wounding' },
  { name: 'The Nature of Magic', hint: 'World · Chapter', to: '/world/magic' },
  { name: 'The Peoples', hint: 'Index', to: '/world/races' },
  { name: 'The Regions', hint: 'Page · Map coming soon', to: '/regions' },
  { name: 'Bestiary', hint: 'Page · Coming soon', to: '/bestiary' },
  { name: 'Recent Discoveries', hint: 'Chronicle', to: '/discoveries' },
  ...allPeoples.flatMap((p) => [
    { name: p.name, hint: p.categoryTitle, to: `/world/races/${p.slug}` },
    ...(p.subraces ?? []).map((s) => ({
      name: s.name,
      hint: `Subrace · ${p.name}`,
      to: `/world/races/${p.slug}`,
    })),
  ]),
];