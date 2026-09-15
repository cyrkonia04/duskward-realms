import { allPeoples } from '@/data/world/peoples';

export const searchIndex = [
  { name: 'Home', hint: 'Page', to: '/' },
  { name: 'The World', hint: 'Page', to: '/world' },
  { name: 'History of the Realms', hint: 'World · Chapter', to: '/world/history' },
  { name: 'The Calendar', hint: 'World · Chapter', to: '/world/calendar' },
  { name: 'The Seven Months', hint: 'World · Section', to: '/world/calendar#months' },
  { name: 'The Unbound Days', hint: 'World · Section', to: '/world/calendar#unbound' },
  { name: 'The Great Unbound', hint: 'World · Section', to: '/world/calendar#unbound' },
  { name: 'Banat', hint: 'Month · Calendar', to: '/world/calendar#months' },
  { name: 'Bijes', hint: 'Month · Calendar', to: '/world/calendar#months' },
  { name: 'Rindu', hint: 'Month · Calendar', to: '/world/calendar#months' },
  { name: 'Apati', hint: 'Month · Calendar', to: '/world/calendar#months' },
  { name: 'Paenitet', hint: 'Month · Calendar', to: '/world/calendar#months' },
  { name: 'Umyt', hint: 'Month · Calendar', to: '/world/calendar#months' },
  { name: 'Nirasha', hint: 'Month · Calendar', to: '/world/calendar#months' },
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