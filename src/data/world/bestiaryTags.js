// THE BESTIARY TAG TAXONOMY — a shared vocabulary attached to every
// beast record. Built for three jobs: navbar search, future filtering,
// and machine reference (each beast file lists its tags as raw
// 'group:id' strings, exactly as authored).
//
// Seven groups, fixed ids, 46 tags. The meanings are the author's,
// verbatim from the taxonomy tables. Tag ids are stable slugs; when a
// tag id repeats across groups (habitat:gloaming vs region:gloaming)
// the group prefix keeps them distinct.

export const tagGroups = [
  {
    id: 'origin',
    label: 'Origin',
    tags: [
      { id: 'natural', meaning: 'Mundane fauna. Existed before the Wounding.' },
      { id: 'fey', meaning: 'Native to the Twilight Deeps. Alien logic.' },
      { id: 'spirit', meaning: 'Consciousness of place, concept, or element.' },
      { id: 'cursed', meaning: 'Once mortal, now twisted by magic or pact.' },
      { id: 'wound-born', meaning: 'Born from a specific wound in the world.' },
      { id: 'forgotten', meaning: 'Old Gods, Root-Kings. Pre-date current races.' },
    ],
  },
  {
    id: 'habitat',
    label: 'Habitat',
    tags: [
      { id: 'wilderness', meaning: 'Forests, mountains, wild places.' },
      { id: 'water', meaning: 'Rivers, lakes, coasts.' },
      { id: 'domestic', meaning: 'Homes, hearths, villages.' },
      { id: 'ruins', meaning: 'Abandoned places, crumbling cities.' },
      { id: 'underground', meaning: 'Mines, tunnels, deep places.' },
      { id: 'thin-place', meaning: 'Where the Twilight Deeps bleed through.' },
      { id: 'gloaming', meaning: 'Within or near the Gloaming.' },
      { id: 'liminal', meaning: 'Crossroads, thresholds, between places.' },
    ],
  },
  {
    id: 'behavior',
    label: 'Behavior',
    tags: [
      { id: 'predator', meaning: 'Hunts and consumes.' },
      { id: 'parasite', meaning: 'Feeds on emotions, memories, or life force.' },
      { id: 'trickster', meaning: 'Creates chaos for amusement.' },
      { id: 'guardian', meaning: 'Protects a place or concept.' },
      { id: 'corruptor', meaning: 'Twists and decays.' },
      { id: 'collector', meaning: 'Hoards objects, memories, or souls.' },
      { id: 'mirror', meaning: 'Reflects the viewer.' },
      { id: 'compelled', meaning: 'Driven by a curse or geas.' },
      { id: 'indifferent', meaning: 'Does not recognize mortals as significant.' },
    ],
  },
  {
    id: 'threat',
    label: 'Threat',
    tags: [
      { id: 'none', meaning: 'Harmless or neutral.' },
      { id: 'low', meaning: 'Dangerous in specific circumstances.' },
      { id: 'moderate', meaning: 'Dangerous if provoked or cornered.' },
      { id: 'high', meaning: 'Actively dangerous to most people.' },
      { id: 'extreme', meaning: 'Lethal to all but the prepared.' },
    ],
  },
  {
    id: 'rarity',
    label: 'Rarity',
    tags: [
      { id: 'common', meaning: 'Encountered regularly.' },
      { id: 'uncommon', meaning: 'Known to exist, rarely seen.' },
      { id: 'rare', meaning: 'Spoken of in whispers.' },
      { id: 'unique', meaning: 'Singular beings.' },
    ],
  },
  {
    id: 'region',
    label: 'Region',
    tags: [
      { id: 'valerium', meaning: 'Found in or tied to Valerium.' },
      { id: 'drümen', meaning: 'Found in or tied to Drümen.' },
      { id: 'free-cities', meaning: 'Found in or tied to the Free Cities.' },
      { id: 'weeping-hills', meaning: 'Found in or tied to the Weeping Hills.' },
      { id: 'gloaming', meaning: 'Found in or tied to the Gloaming.' },
      { id: 'twilight-deeps', meaning: 'Found in the Twilight Deeps.' },
      { id: 'universal', meaning: 'Found everywhere.' },
    ],
  },
  {
    id: 'folklore',
    label: 'Folklore',
    tags: [
      { id: 'celtic', meaning: 'Irish, Scottish, Welsh origins.' },
      { id: 'germanic', meaning: 'German, Scandinavian, English origins.' },
      { id: 'slavic', meaning: 'Eastern European origins.' },
      { id: 'asian', meaning: 'Chinese, Japanese, Korean origins.' },
      { id: 'amerindian', meaning: 'Native American origins.' },
      { id: 'classical', meaning: 'Greek, Roman, Egyptian origins.' },
      { id: 'original', meaning: 'Original to Duskward Realms.' },
    ],
  },
];

// FLAT LOOKUP — 'origin:natural' resolves to
// { group, groupLabel, id, meaning }. Unknown tags resolve undefined;
// callers must tolerate that (fail open, like the search does).
export const tagIndex = Object.fromEntries(
  tagGroups.flatMap((group) =>
    group.tags.map((tag) => [
      `${group.id}:${tag.id}`,
      { group: group.id, groupLabel: group.label, id: tag.id, meaning: tag.meaning },
    ]),
  ),
);
