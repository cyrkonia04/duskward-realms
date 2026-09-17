// THE BESTIARY — "A World of Hungry Shadows".
//
// Structure is three tiers: this hub classifies, each cabinet page
// (/bestiary/<slug>) lists its records, and each record grows a full
// page of its own (/bestiary/<cabinet>/<beast>, data in beasts/).
// Entries here are the recap whispers; a row with a `page` field
// links to its record in the beast registry.
//
// TAGS: rows without a written record carry a provisional `tags`
// array, drafted by the archive from the author's lore so the
// cabinet's tag sieve works across the whole shelf (awaiting the
// author's veto). A record's own tags always take precedence; when a
// record lands, drop the row's array so the authored tags stand alone.
//
// TAGS: rows without a written record carry a provisional `tags`
// array, drafted by the archive from the author's lore so the
// cabinet's tag sieve works across the whole shelf (awaiting the
// author's veto). A record's own tags always take precedence; when a
// record lands, drop the row's array so the authored tags stand alone.
//
// Overview copy is the author's, verbatim. Spirits and True
// Elementals are deliberately NOT catalogued here; their record lives
// among the Peoples.
//
// SAVED TREATMENT: the wound rows once carried a purple (deeps) ledger
// styling, which the author liked but pulled from the Bestiary for now
// (the archive keeps a neutral hand). It is parked for pages of
// specific wound-born beasts, where the purple can breathe again.

export const bestiaryIntro = {
  subtitle: 'A World of Hungry Shadows',
  paragraphs: [
    'The Duskward Realms teem with creatures of all kinds. Some are natural. Some are supernatural. Some defy classification entirely.',
    'Before the Great Wounding, the world was dangerous but understood. Wolves hunted in the forests, spirits guarded the rivers, and the Fey kept to their own realms. Humanity and its kin knew the rules: leave offerings at crossroads, never follow lights into the marsh, keep iron at your door. The world was alive, but it was not hostile. It was simply other.',
    'The Great Wounding changed that.',
    "When the boundaries between the mortal realm and the Twilight Deeps frayed, something fundamental shifted. The world's spiritual decay, the Grey Rot did not just affect people and places. It affected everything. Creatures that were once merely dangerous became twisted. Creatures that were once neutral became hungry. And creatures that should not exist at all began to appear in the thin places where reality had worn through.",
  ],
  // The dramatic beat stands alone; index 2 renders on its own line.
  beatIndex: 2,
};

export const rotInfluence = {
  id: 'rot',
  title: "The Grey Rot's Influence",
  text: 'The Rot does not create monsters. It corrupts what already exists. A wolf exposed to too much Rot does not become a demon; it becomes a wolf that has forgotten why it hunts, killing for no reason and wasting the meat. A spirit exposed to the Rot becomes bitter, vindictive, lashing out at the living not out of malice but out of pain. The Fey, who are tied to the Twilight Deeps and therefore to the source of the Wounding, are not corrupted; they are amplified, becoming more extreme versions of themselves.',
};

export const bestiaryNature = {
  id: 'nature',
  title: 'The Nature of the Bestiary',
  text: 'This bestiary catalogs the most common and significant beings encountered by travelers in the Duskward Realms. It is not exhaustive. The world is vast, and its shadows are deep. Some creatures are so rare that they have no names, only whispered descriptions passed between frightened survivors. Others are so common that they are taken for granted: the Grimlings in the walls, the Bogarts in the hearth, the Nixies in the river.',
};

export const cabinets = [
  {
    slug: 'general',
    title: 'General Bestiary',
    lede: 'Creatures of folklore and wilderness, beings that existed before the Wounding and continue to exist now. They are the most common and most understood.',
    entries: [
      {
        name: 'Grimlings',
        knownAs: 'Gremlins · Knockers (in mines) · Misery-Maws',
        page: 'grimlings',
        whisper:
          'Small, gaunt psychic parasites that gather where suffering lingers. They do not kill so much as fester: spoiled food, hidden tools, whispered taunts, a household sliding into despair. Led by a Hob-Grim; driven off by iron, bells, and unwavering joy.',
      },
      {
        name: 'Phookas',
        knownAs: 'Púcas · Puck · Shape-shifters',
        page: 'phookas',
        whisper:
          'A trickster fey of wilderness, crossroads, and liminal spaces, amoral rather than evil. It leads travelers astray for amusement and is best met with offerings of cream or honey, riddles, or a story well told.',
      },
      {
        name: 'The Bogart',
        knownAs: 'Bogles · Hobgoblins · House-Bogeys',
        tags: [
          'origin:spirit',
          'habitat:domestic',
          'behavior:mirror',
          'behavior:guardian',
          'threat:low',
          'rarity:uncommon',
          'region:universal',
          'folklore:germanic',
        ],
        tags: [
          'origin:spirit',
          'habitat:domestic',
          'behavior:mirror',
          'behavior:guardian',
          'threat:low',
          'rarity:uncommon',
          'region:universal',
          'folklore:germanic',
        ],
        whisper:
          'A spirit of the hearth that mirrors the home it keeps. Respect it and it mends, guards, and guides; offend it and it sours milk, steals, and breeds dread. It cannot be killed, only appeased or driven out.',
      },
      {
        name: 'Nixies',
        knownAs: 'Nixes · Water-Wraiths · River-Singers',
        tags: [
          'origin:spirit',
          'habitat:water',
          'behavior:predator',
          'threat:high',
          'rarity:uncommon',
          'region:universal',
          'folklore:germanic',
        ],
        tags: [
          'origin:spirit',
          'habitat:water',
          'behavior:predator',
          'threat:high',
          'rarity:uncommon',
          'region:universal',
          'folklore:germanic',
        ],
        whisper:
          "Beautiful singers of fresh water, possessive of their rivers and lethal in their loneliness. Their song lures the unwary to the water's edge, and their illusions make drowning look like a safe path.",
      },
      {
        name: 'The Fey',
        tags: [
          'origin:fey',
          'habitat:thin-place',
          'behavior:indifferent',
          'threat:high',
          'rarity:uncommon',
          'region:twilight-deeps',
          'folklore:original',
        ],
        tags: [
          'origin:fey',
          'habitat:thin-place',
          'behavior:indifferent',
          'threat:high',
          'rarity:uncommon',
          'region:twilight-deeps',
          'folklore:original',
        ],
        whisper:
          'The native inhabitants of the Twilight Deeps, bound by ancient rules and inscrutable motives. The Rot does not corrupt them; it amplifies them. Their full record is kept among the Peoples.',
        to: '/world/races/the-fey',
        toLabel: 'Full record among the Peoples',
      },
      {
        name: 'The Old Gods',
        knownAs: 'The Forgotten · The Root-Kings',
        tags: [
          'origin:forgotten',
          'habitat:wilderness',
          'behavior:indifferent',
          'threat:moderate',
          'rarity:unique',
          'region:universal',
          'folklore:original',
        ],
        tags: [
          'origin:forgotten',
          'habitat:wilderness',
          'behavior:indifferent',
          'threat:moderate',
          'rarity:unique',
          'region:universal',
          'folklore:original',
        ],
        whisper:
          'Slumbering deities of the natural world from before the current races. They are their domains, and their power wanes as belief fades. They can be petitioned through ancient rites; the price is always heavy.',
      },
    ],
  },
  {
    slug: 'wound-sites',
    title: 'Wound-Sites & Unique Horrors',
    lede: 'Horrors born from specific wounds in the world. These are not creatures that roam freely; they are tied to places, and they fester there.',
    // Wound rows carry a site tag (which wound each horror festers in).
    // The retired purple ledger styling for these rows is parked for
    // the future beast pages; see the note at the top of this file.
    entries: [
      {
        name: 'The Gloaming',
        site: 'The wound itself',
        tags: [
          'origin:wound-born',
          'habitat:gloaming',
          'behavior:corruptor',
          'threat:extreme',
          'rarity:unique',
          'region:gloaming',
          'folklore:original',
        ],
        tags: [
          'origin:wound-born',
          'habitat:gloaming',
          'behavior:corruptor',
          'threat:extreme',
          'rarity:unique',
          'region:gloaming',
          'folklore:original',
        ],
        whisper:
          'An expanding wound of despair that behaves like a region: mist, marsh, and malice. Its children are filed below; its full record waits with the Regions.',
        to: '/regions',
        toLabel: 'Full record with the Regions',
      },
      {
        name: 'The Sighs',
        site: 'Festering in: the Gloaming',
        tags: [
          'origin:wound-born',
          'habitat:gloaming',
          'behavior:parasite',
          'threat:high',
          'rarity:unique',
          'region:gloaming',
          'folklore:original',
        ],
        tags: [
          'origin:wound-born',
          'habitat:gloaming',
          'behavior:parasite',
          'threat:high',
          'rarity:unique',
          'region:gloaming',
          'folklore:original',
        ],
        whisper:
          'Invisible currents of concentrated despair. They cannot be struck, only endured; they unearth what is worst in you and weave it into reasons to lie down.',
      },
      {
        name: 'The Drowners',
        site: 'Festering in: the Gloaming',
        tags: [
          'origin:wound-born',
          'habitat:gloaming',
          'habitat:water',
          'behavior:compelled',
          'threat:high',
          'rarity:common',
          'region:gloaming',
          'folklore:original',
        ],
        tags: [
          'origin:wound-born',
          'habitat:gloaming',
          'habitat:water',
          'behavior:compelled',
          'threat:high',
          'rarity:common',
          'region:gloaming',
          'folklore:original',
        ],
        whisper:
          "The re-animated dead of the marsh, gliding rather than shambling. They feel no hunger, only a compulsion to add your voice to the Gloaming's chorus.",
      },
      {
        name: 'The Reflectors',
        site: 'Festering in: the Gloaming',
        tags: [
          'origin:wound-born',
          'habitat:gloaming',
          'behavior:mirror',
          'threat:high',
          'rarity:uncommon',
          'region:gloaming',
          'folklore:original',
        ],
        tags: [
          'origin:wound-born',
          'habitat:gloaming',
          'behavior:mirror',
          'threat:high',
          'rarity:uncommon',
          'region:gloaming',
          'folklore:original',
        ],
        whisper:
          'Figures of liquid darkness that take your own shape, twisted toward your flaws. They do no violence; they simply show you yourself until you want it done.',
      },
      {
        name: 'The Blight-Sworn',
        site: 'Festering in: the Gloaming',
        tags: [
          'origin:wound-born',
          'habitat:gloaming',
          'behavior:corruptor',
          'threat:moderate',
          'rarity:common',
          'region:gloaming',
          'folklore:original',
        ],
        tags: [
          'origin:wound-born',
          'habitat:gloaming',
          'behavior:corruptor',
          'threat:moderate',
          'rarity:common',
          'region:gloaming',
          'folklore:original',
        ],
        whisper:
          "The Gloaming's commonest horrors: insects and amphibians twisted fundamentally wrong. Giant dragonflies wearing patterns of screaming faces; frogs with human eyes that blink in unison.",
      },
      {
        name: 'The Deep Dwellers',
        site: 'Festering in: the deep-ways',
        tags: [
          'origin:wound-born',
          'habitat:underground',
          'behavior:predator',
          'threat:extreme',
          'rarity:rare',
          'region:universal',
          'folklore:original',
        ],
        tags: [
          'origin:wound-born',
          'habitat:underground',
          'behavior:predator',
          'threat:extreme',
          'rarity:rare',
          'region:universal',
          'folklore:original',
        ],
        whisper:
          'Things that evolved where light never reached: the Misshapen Pale Things that hunt by vibration, Twisted Elementals that drain the warmth of consciousness, and the Remnants, whose motives no surface mind can read. The reason the Drümen never travel the deep-ways alone.',
      },
    ],
  },
  {
    slug: 'the-cursed',
    title: 'Cursed Beings',
    lede: 'Those remade by magic, pact, or tragedy. Lycanthropes, Vampyres, Jiang Shi, Wendigo, and more. Each curse is a personal tragedy. Each is a warning.',
    entries: [
      {
        name: 'Lycanthropes',
        tags: [
          'origin:cursed',
          'habitat:wilderness',
          'behavior:predator',
          'threat:high',
          'rarity:uncommon',
          'region:universal',
          'folklore:germanic',
        ],
        tags: [
          'origin:cursed',
          'habitat:wilderness',
          'behavior:predator',
          'threat:high',
          'rarity:uncommon',
          'region:universal',
          'folklore:germanic',
        ],
        whisper:
          'A permanent, unstable hybrid of human and beast, ruled by the ebb of instinct rather than the phases of the moon. Silver harms them; discipline, meditation, and a loyal pack can sometimes steady them.',
      },
      {
        name: 'Vampyres',
        tags: [
          'origin:cursed',
          'habitat:domestic',
          'behavior:predator',
          'threat:high',
          'rarity:rare',
          'region:universal',
          'folklore:slavic',
        ],
        tags: [
          'origin:cursed',
          'habitat:domestic',
          'behavior:predator',
          'threat:high',
          'rarity:rare',
          'region:universal',
          'folklore:slavic',
        ],
        whisper:
          'Immortality as a gilded cage: refined predators whose hunger never sleeps. Moonlight, running water, the faith they once held, and the threshold rule all bind them.',
      },
      {
        name: 'The Jiang Shi',
        tags: [
          'origin:cursed',
          'habitat:ruins',
          'behavior:compelled',
          'threat:high',
          'rarity:rare',
          'region:universal',
          'folklore:asian',
        ],
        tags: [
          'origin:cursed',
          'habitat:ruins',
          'behavior:compelled',
          'threat:high',
          'rarity:rare',
          'region:universal',
          'folklore:asian',
        ],
        whisper:
          'Spirits bound to their own decaying bodies by injustice or improper burial, driven by one obsessive purpose. Paper talismans, certain prayers, and their true name spoken with authority hold power over them.',
      },
      {
        name: 'The Wendigo',
        tags: [
          'origin:cursed',
          'habitat:wilderness',
          'behavior:predator',
          'threat:extreme',
          'rarity:rare',
          'region:universal',
          'folklore:amerindian',
        ],
        tags: [
          'origin:cursed',
          'habitat:wilderness',
          'behavior:predator',
          'threat:extreme',
          'rarity:rare',
          'region:universal',
          'folklore:amerindian',
        ],
        whisper:
          'Born of starvation and cannibalism in the deep wilds: emaciated, forever freezing, forever hungry. Fire and iron harm it, and acts of profound generosity can sometimes break the curse.',
      },
      {
        name: 'The Grey Rot Twisted',
        tags: [
          'origin:cursed',
          'habitat:ruins',
          'behavior:compelled',
          'threat:high',
          'rarity:rare',
          'region:universal',
          'folklore:original',
        ],
        tags: [
          'origin:cursed',
          'habitat:ruins',
          'behavior:compelled',
          'threat:high',
          'rarity:rare',
          'region:universal',
          'folklore:original',
        ],
        whisper:
          "When the Rot does not numb but mutates, the victim's body becomes the shape of their inner despair. The emotional wound that caused it can sometimes be treated; rarely, and with difficulty.",
      },
      {
        name: 'The Gloaming-Touched',
        tags: [
          'origin:cursed',
          'habitat:gloaming',
          'habitat:thin-place',
          'behavior:compelled',
          'threat:low',
          'rarity:rare',
          'region:gloaming',
          'folklore:original',
        ],
        tags: [
          'origin:cursed',
          'habitat:gloaming',
          'habitat:thin-place',
          'behavior:compelled',
          'threat:low',
          'rarity:rare',
          'region:gloaming',
          'folklore:original',
        ],
        whisper:
          'Survivors of the Gloaming who were not fully consumed, now partially made of its substance. They fight to remain themselves, and can never escape the wound that made them.',
      },
      {
        name: 'The Pact-Bound',
        knownAs: 'Wraiths · The Shadowless · The Geas-Touched',
        tags: [
          'origin:cursed',
          'behavior:compelled',
          'threat:moderate',
          'rarity:uncommon',
          'region:universal',
          'folklore:original',
        ],
        tags: [
          'origin:cursed',
          'behavior:compelled',
          'threat:moderate',
          'rarity:uncommon',
          'region:universal',
          'folklore:original',
        ],
        whisper:
          'Those who traded a piece of themselves for power, longevity, or salvation, and paid more than anticipated. Their weakness is the terms of the pact; their tragedy is that breaking it is rarely simple.',
      },
      {
        name: 'The Consumed',
        tags: [
          'origin:cursed',
          'habitat:ruins',
          'behavior:compelled',
          'threat:low',
          'rarity:rare',
          'region:universal',
          'folklore:original',
        ],
        tags: [
          'origin:cursed',
          'habitat:ruins',
          'behavior:compelled',
          'threat:low',
          'rarity:rare',
          'region:universal',
          'folklore:original',
        ],
        whisper:
          'Those who attempted great love, sacrifice, or defiance against the Rot, and failed. The world absorbed them; now they repeat their act forever, unable to leave the place where it happened.',
      },
    ],
  },
];

export const classificationNote = {
  id: 'classification',
  title: 'A Note on Classification',
  text: "The creatures in this bestiary are organized by their origin and their relationship to the world's wounds.",
};

export const spiritsNote = {
  id: 'spirits',
  title: 'A Note on Spirits & True Elementals',
  text: 'Spirits and True Elementals are not included in this bestiary. They are consciousnesses of place, concept, or pure element: River-Mothers, Fire-Husks, Boreals. They are documented separately under their own section. The Old Gods and Root-Kings, however, are included here under the General Bestiary, as they are often encountered as beings rather than as forces of nature.',
  linkTo: '/world/races/spirits-true-elementals',
  linkLabel: 'Their own record is kept among the Peoples',
};

export const cursedCrossLink = {
  to: '/world/races#cursed-and-changed',
  text: 'Every curse above is also a people. For their origins, their struggles, and their place among the realms, consult The Cursed & Changed.',
  label: 'The Cursed & Changed',
};
