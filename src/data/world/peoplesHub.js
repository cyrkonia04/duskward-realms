// THE PEOPLES HUB — its own voice, not the World's.
//
// peoples.js holds the recap descriptions the World overview shows.
// This module holds the hub's shorter teasers so the two pages never
// say the same sentence twice. When a people eventually gets its own
// full page, this is also where its temporary target lives:
//   - Ember-Kin and Mist-Kin still share the Elemental-Kin chapter
//     until each has a page of its own.
//   - The Cursed & Changed have no chapter yet, so the hub points at
//     their threat record in the Bestiary (and the Bestiary points
//     back here for their origins and struggles).

export const peoplesHubCategories = [
  {
    id: 'common-folk',
    title: 'The Common Folk',
    cards: [
      {
        name: 'Humans',
        teaser: 'They live brief lives, and they burn...',
        to: '/world/races/humans',
      },
      {
        name: 'The Drümen',
        teaser: 'The unyielding anvil. They outlast the cold, the dark, and the things that gnaw beneath the mines...',
        to: '/world/races/drumen',
      },
    ],
  },
  {
    id: 'kin-touched',
    title: 'The Kin-Touched',
    cards: [
      {
        name: 'Fey-Touched',
        teaser: 'Cursed by wonder. Every bloodline here began as a pact, a blessing, or a trespass the Twilight Deeps never fully released...',
        to: '/world/races/fey-touched',
      },
      {
        name: 'Beast-Kin',
        teaser: 'The untamed heart. Wild blood that walks freely through a world which never quite stops watching...',
        to: '/world/races/beast-kin',
      },
      {
        name: 'Golem-Kin',
        teaser: 'The awakened mountain. Ageless, deliberate, and rarer with every fading cycle...',
        to: '/world/races/golem-kin',
      },
    ],
  },
  {
    id: 'rare-and-mythic',
    title: 'The Rare and Mythic',
    cards: [
      {
        name: 'Ember-Kin',
        teaser: 'Caged wildfire. Warm-handed and coal-eyed, forever one temper from the light...',
        to: '/world/races/elemental-kin',
      },
      {
        name: 'Mist-Kin',
        teaser: 'Captured breath. Pale, shimmering, and never quite where the eye left them...',
        to: '/world/races/elemental-kin',
      },
      {
        name: 'Dragon-Kin',
        teaser: 'The echo of apex. Scaled relics of a mightier age, a primal element still burning in their veins...',
        to: '/world/races/dragon-kin',
      },
    ],
  },
  {
    id: 'cursed-and-changed',
    title: 'The Cursed & Changed',
    // Category of beings: the hub keeps the tragedy; the Bestiary keeps
    // the threat (types, behaviors, weaknesses).
    teaser: 'Broken narratives. Changed against their will...',
    to: '/bestiary/the-cursed',
    linkLabel: 'Their kinds, behaviors, and weaknesses are kept in the Bestiary',
  },
  {
    id: 'true-others',
    title: 'The True Others',
    // NOTE: The Fey and Spirits & True Elementals still carry their
    // recap descriptions here (mirrored from peoples.js) until their
    // own voice pass. Not part of the nine rewritten teasers.
    cards: [
      {
        name: 'The Fey',
        teaser:
          'The native inhabitants of the Twilight Deeps. Powerful, alien beings of magic and story, bound by ancient rules and inscrutable motives.',
        to: '/world/races/the-fey',
      },
      {
        name: 'Spirits & True Elementals',
        teaser:
          "Consciousnesses of a place, concept, or pure element. A River-Mother (water), a Fire-Husk (fire), a Boreal (air). They are powerfully tied to their domain and are forces of nature, not individuals one can easily converse with. Interacting with them is central to the world's high folklore.",
        to: '/world/races/spirits-true-elementals',
      },
    ],
  },
];
