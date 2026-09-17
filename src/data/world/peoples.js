export const peoplesCategories = [
  {
    id: 'common-folk',
    title: 'The Common Folk',
    peoples: [
      {
        slug: 'humans',
        name: 'Humans',
        description:
          "The most numerous and adaptable. Their lives are brief and burning, making them capable of both great compassion and terrifying shortsightedness. They are the primary inhabitants of the Sunken Kingdom of Valerium and the Free Cities. They feel the Grey Rot most acutely, their spirits withering with the world's.",
      },
      {
        slug: 'drumen',
        name: 'The Drümen',
        description:
          'The stout, resilient clans of the highlands and deep places. More pragmatic than classic dwarves, they are renowned miners, stonemasons, and warriors. They have ancient pacts with the earth itself and wage a constant, silent war against the Deep-Dwellers in their mines. Their culture is built on clan loyalty and endurance.',
      },
    ],
  },
  {
    id: 'kin-touched',
    title: 'The Kin-Touched',
    peoples: [
      {
        slug: 'fey-touched',
        name: 'Fey-Touched',
        description:
          'Not a unified race, but rather a catalogue of mortal encounters with the impossible. Each bloodline is a living record of a pact, a curse, a blessing, or a transgression with a being from the Twilight Deeps. They are fragments of a dream that has leaked into the waking world, and can never truly fit into either. They are defined by their glamour: a subtle, unconscious magic that warps perception around them—and a deep, often melancholic, alienation from the mortal realm.',
      },
      {
        slug: 'beast-kin',
        name: 'Beast-Kin',
        description:
          'A diverse group encompassing any animal lineage: Cat-Kin, Wolf-Kin, Avian-Kin, Reptile-Kin, Insect-Kin, and more. They bear animal features: ears, tails, fur, scales, or claws. Their senses are often heightened. They are fully integrated members of society, if sometimes mistrusted, their natures reflecting the immense variety of the animal kingdom.',
      },
      {
        slug: 'golem-kin',
        name: 'Golem-Kin',
        description:
          'The most common type of elemental-kin. Sentient, human-shaped constructs of earth, stone, or crystal, awakened by ancient magic or born from places of powerful elemental confluence. They are rare, ageless, and possess a profound, deliberate nature.',
      },
    ],
  },
  {
    id: 'rare-and-mythic',
    title: 'The Rare and Mythic',
    peoples: [
      {
        slug: 'elemental-kin',
        name: 'Elemental-Kin',
        description:
          "Beings whose essence is tied to fundamental forces other than earth. Exceedingly rare, as the world's decay makes their stable existence difficult.",
        subraces: [
          {
            name: 'Ember-Kin (Fire)',
            description:
              'Their touch is warm, their eyes glow like coals, and their tempers can ignite quickly.',
          },
          {
            name: 'Mist-Kin (Water/Air)',
            description:
              'Pale, shimmering skin and voices like echoing mist. They are elusive and changeable, more common in coastal fogs or the weeping valleys.',
          },
        ],
      },
      {
        slug: 'dragon-kin',
        name: 'Dragon-Kin',
        description:
          'Beings with the blood of the great, near-mythical dragons. Incredibly rare. They possess scaled skin, reptilian eyes, and a connection to a primal element. They are living relics of a more powerful age.',
      },
    ],
  },
  {
    id: 'cursed-and-changed',
    title: 'The Cursed & Changed',
    standalone:
      'Those whose nature has been rewritten by magic, pact, or tragedy. Werebeasts, vampires, the Grey-Rot Twisted, and pact-bound wraiths. They are walking tragedies, often isolated and dangerous.',
  },
  {
    id: 'true-others',
    title: 'The True Others',
    peoples: [
      {
        slug: 'the-fey',
        name: 'The Fey',
        description:
          'The native inhabitants of the Twilight Deeps. Powerful, alien beings of magic and story, bound by ancient rules and inscrutable motives.',
      },
      {
        slug: 'spirits-true-elementals',
        name: 'Spirits & True Elementals',
        description:
          "Consciousnesses of a place, concept, or pure element. A River-Mother (water), a Fire-Husk (fire), a Boreal (air). They are powerfully tied to their domain and are forces of nature, not individuals one can easily converse with. Interacting with them is central to the world's high folklore.",
      },
    ],
  },
];

// FLATTENED lookup: every people across every category, for detail pages.
// SPREAD categoryTitle at flatten time — flatMap over categories loses
// sibling fields unless you reattach them here.
export const allPeoples = peoplesCategories.flatMap((c) =>
  (c.peoples ?? []).map((p) => ({ ...p, categoryTitle: c.title }))
);

export function getPeopleBySlug(slug) {
  const people = allPeoples.find((p) => p.slug === slug);
  if (!people) return null;
  const category = peoplesCategories.find((c) =>
    (c.peoples ?? []).some((p) => p.slug === slug)
  );
  return { ...people, categoryTitle: category.title };
}

// PEOPLES HUB — the index rows, curated separately from the World page.
// Author decision 16/9: the hub carries its OWN short descriptions, so the
// same blurb never appears on both pages. `peoplesCategories` (above) still
// feeds the World page cards and the detail pages; this list feeds only the
// hub. Entries are hand-picked rather than mapped, which is what lets the
// two Elemental-Kin subraces stand as their own rows, and lets the Cursed
// link across to the Bestiary instead of a detail page.
// NOTE: The Fey and the Spirits entries are collaborator-drafted copy,
// pending the author's veto, as no hub text was supplied for them.
export const hubSections = [
  {
    id: 'common-folk',
    title: 'The Common Folk',
    entries: [
      {
        name: 'Humans',
        to: '/world/races/humans',
        text: "They live brief lives, and they burn. Their cities rise and fall within a generation. They feel the Grey Rot most acutely, their spirits withering with the world's.",
      },
      {
        name: 'The Drümen',
        to: '/world/races/drumen',
        text: "Born of the mountain's soul. Their cities are carved from living rock, and their culture is built on clan loyalty and endurance. They wage a constant, silent war against the Deep-Dwellers.",
      },
    ],
  },
  {
    id: 'kin-touched',
    title: 'The Kin-Touched',
    entries: [
      {
        name: 'Fey-Touched',
        to: '/world/races/fey-touched',
        text: 'Mortals with fey blood. They carry alien hearts and a melancholy grace, forever caught between two worlds. Their glamour warps perception around them.',
      },
      {
        name: 'Beast-Kin',
        to: '/world/races/beast-kin',
        text: 'They walk the line between civilization and the wild. Animal features, heightened senses, and primal instincts make them invaluable scouts and hunters.',
      },
      {
        name: 'Golem-Kin',
        to: '/world/races/golem-kin',
        text: 'Awakened earth. Stone given soul. They are rare, ageless, and deliberate in all things. Their core is their heart and their greatest vulnerability.',
      },
    ],
  },
  {
    id: 'rare-and-mythic',
    title: 'The Rare and Mythic',
    entries: [
      {
        name: 'Ember-Kin',
        to: '/world/races/elemental-kin',
        text: 'Caged wildfire. Passion given form. They burn bright and fast, their existence a constant struggle against their own nature.',
      },
      {
        name: 'Mist-Kin',
        to: '/world/races/elemental-kin',
        text: 'Captured breath. Ephemeral and changeable. They are the solid ghost of a process, forever longing to return to their flow.',
      },
      {
        name: 'Dragon-Kin',
        to: '/world/races/dragon-kin',
        text: 'Echoes of a forgotten age. Scaled and proud, they carry the blood of the great dragons and the weight of a legacy they can never fully bear.',
      },
    ],
  },
  {
    id: 'cursed-and-changed',
    title: 'The Cursed & Changed',
    entries: [
      {
        name: 'Cursed Beings',
        to: '/bestiary',
        text: 'Broken narratives. Changed against their will. They are walking tragedies, their nature rewritten by magic, pact, or calamity.',
      },
    ],
  },
  {
    id: 'true-others',
    title: 'The True Others',
    entries: [
      {
        name: 'The Fey',
        to: '/world/races/the-fey',
        text: 'The Gentry of the Twilight Deeps. Not people, but stories that walk. They cannot break their word, and they always keep it in the way that wounds.',
      },
      {
        name: 'Spirits & True Elementals',
        to: '/world/races/spirits-true-elementals',
        text: "The world's own consciousness: River-Mothers, Fire-Husks, Boreals. Powers of place, tied to their domain as mortals are to a heartbeat. Propitiation, not conversation.",
      },
    ],
  },
];