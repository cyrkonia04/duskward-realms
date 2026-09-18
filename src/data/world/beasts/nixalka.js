// THE NIXALKA RECORD — the third full page of the General Bestiary
// (tier three: /bestiary/general/nixalka).
//
// Content is the author's, verbatim (2026-09-18): header fields, every
// section, the encounter, the cross-references. Em dashes are left
// exactly as written. The Nixalka take the shelf seat the provisional
// Nixies entry held: the folkloric root moves from the Germanic nix to
// the Slavic rusalka, and the creature itself is reborn wound-born —
// the water's memory of a drowning, wearing the drowned like a mask.
// Typographic repairs, announced: "seen; But they" reads "seen; but
// they", and "minor illusions the appearance" gains its missing colon
// ("minor illusions: the appearance"). Inline markers follow the
// archive convention: **bold** is reserved for labels ("Threat
// Level:"), and [[...]] marks a reference to another entry (bold;
// linked when its record exists, bold-in-bronze until then).
//
// Sections are a block list (p / terms / steps / list / quotes /
// aside / refs) so future beasts with different shapes need no schema
// change. Tags follow the taxonomy in bestiaryTags.js, ids verbatim.

const nixalka = {
  slug: "nixalka",
  cabinet: "general",
  name: "Nixalka",
  knownAs: "Nixas, Water-Singers, Drowned Brides",
  tags: [
    "origin:wound-born",
    "behavior:predator",
    "habitat:water",
    "threat:high",
    "rarity:uncommon",
    "folklore:slavic",
  ],
  sections: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        {
          type: "p",
          text: "Nixalka are spirits of fresh water—rivers, lakes, deep ponds, and marshes—born from the echoes of drowning itself. They are the water's memory of a death, wearing the shape of the drowned like a mask. They are not mindless predators; they are lonely, and their loneliness is the most dangerous thing about them. A Nixalka does not simply drown its victims. It loves them, in its own twisted way, and that love is always fatal.",
        },
        {
          type: "p",
          text: "They are among the most beautiful and most dangerous creatures in the Duskward Realms, a reminder that the world's waters are not merely paths to be crossed, but realms with their own hungry sovereigns.",
        },
      ],
    },
    {
      id: "folklore-origin",
      title: "Folklore Origin",
      blocks: [
        {
          type: "p",
          text: "Nixalka derive from Slavic folklore, the rusalka, the spirit of a drowned woman who lures the living to their deaths. In the original tales, rusalki were often tragic figures: women who had died unjustly, often by drowning, and who returned to haunt the waters where they perished.",
        },
      ],
    },
    {
      id: "physical-description",
      title: "Physical Description",
      blocks: [
        {
          type: "p",
          text: "In their glamoured form, Nixalka are breathtaking. They appear as beautiful men or women with pale skin, long flowing hair, and eyes the color of the water in which they reside. They dress in garments that seem to be woven from mist or water itself, shimmering and translucent. They sing in voices that seem to come from everywhere and nowhere at once, melodies that tug at the heart and blur the mind.",
        },
        {
          type: "p",
          text: "Their true form is rarely seen, for they use their glamour to hunt. Those who have glimpsed it describe a corpse-pale thing with a gaping, toothless mouth, a drowned body animated by something that is not life. The beauty is the trap, and the truth is always waiting beneath the surface.",
        },
      ],
    },
    {
      id: "nature-psychology",
      title: "Nature & Psychology",
      blocks: [
        {
          type: "p",
          text: "Nixalka are lonely. This is the key to understanding them. They are echoes of drowning, given form by [[/world|the Twilight Deeps]] at the moment of death. They are not the drowned themselves, they are the drowning, the terror and despair and final desperate reaching for rescue, woven into a shape that remembers what it was to be human without ever having been human.",
        },
        {
          type: "p",
          text: "They are bound to a single body of water, and they cannot leave it. They watch the world pass by from the shallows, seeing travelers, lovers, families. They want to be part of that world, to be loved, and to be seen; but they do not understand human love or mortality. When a Nixalka takes a lover, it drowns them, not out of malice, but because it does not understand that air-breathing creatures cannot survive beneath the water. When a Nixalka tries to keep a companion, it holds them too tightly, until they stop moving. The Nixalka grieves, but it does not learn. It cannot learn. It is what it is: the water's memory of a death, forever repeating itself.",
        },
        {
          type: "terms",
          items: [
            {
              term: "The Seduction",
              text: "Nixalka lure victims with song. The song is not magic in the traditional sense; it is simply beautiful, impossibly beautiful, a melody that promises everything the listener has ever wanted. Those who hear it feel an overwhelming urge to approach the water. The urge is not irresistible, but it is powerful, and those who are already grieving or desperate are the most vulnerable.",
            },
          ],
        },
      ],
    },
    {
      id: "habitat-distribution",
      title: "Habitat & Distribution",
      blocks: [
        {
          type: "p",
          text: "Nixalka are uncommon but found wherever there is fresh water—rivers, lakes, ponds, marshes, and deep wells. They are most common in isolated places, far from cities and settlements, where they can sing and hunt without interference.",
        },
        {
          type: "p",
          text: "They avoid salt water, which burns them, and they cannot cross running salt water to escape. A Nixalka bound to a river is trapped there; it cannot leave its domain. This is why they are so possessive, their domain is all they have.",
        },
      ],
    },
    {
      id: "behavior-ecology",
      title: "Behavior & Ecology",
      blocks: [
        {
          type: "p",
          text: "Nixalka are solitary creatures. They do not form societies, and do not reproduce in any known way. They simply are; born from the spirit of a place, sustained by the life of the water they inhabit.",
        },
        {
          type: "steps",
          label: "A Typical Encounter",
          items: [
            {
              text: "A traveler passes near a lake, a river, or a deep pond. They hear singing—beautiful, haunting, impossible to ignore.",
            },
            {
              text: "They feel drawn to the water. The urge is not overwhelming, but it is persistent. They want to see who is singing.",
            },
            {
              text: "They see the Nixalka in the shallows, beautiful and lonely, and they forget, for a moment, that the world is dangerous.",
            },
            {
              text: "The Nixalka beckons. It speaks in a voice like water over stones. It says it is lonely. It says it wants company. It says it will not hurt them.",
            },
            {
              text: "The traveler enters the water. The Nixalka embraces them. And then it holds them beneath the surface until they stop moving.",
            },
          ],
        },
        {
          type: "terms",
          items: [
            {
              term: "What They Eat",
              text: "Nixalka do not eat flesh. They feed on life force, the warmth and vitality of a living soul. Drowning is not their goal; it is simply a consequence of holding their victims too close for too long. The death is incidental. The feeding is in the touch.",
            },
          ],
        },
      ],
    },
    {
      id: "abilities-effects",
      title: "Abilities & Effects",
      blocks: [
        {
          type: "terms",
          items: [
            {
              term: "Glamour",
              text: "Nixalka can appear as breathtakingly beautiful humans, their true form hidden beneath the illusion. They can maintain this glamour for long periods, though it fades when they are threatened or when they forget to maintain it.",
            },
            {
              term: "Song",
              text: "Their singing is their primary weapon. It lures the vulnerable, hypnotizes the unwary, and can be heard from miles away. Those who hear it must resist the urge to approach the water.",
            },
            {
              term: "Illusions",
              text: "Nixalka can create minor illusions: the appearance of safe ground, a bridge where there is none, lights in the mist. However, these are not perfect; they are temptations, designed to lure victims closer.",
            },
            {
              term: "Water Magic",
              text: "A Nixalka can manipulate the water within its domain, summoning waves and changing currents. It cannot leave its water, but within it, it is nearly invincible.",
            },
          ],
        },
      ],
    },
    {
      id: "weaknesses-defenses",
      title: "Weaknesses & Defenses",
      blocks: [
        {
          type: "terms",
          items: [
            {
              term: "Iron",
              text: "Cold wrought iron burns Nixalka on contact. A weapon of iron can harm them, though they will retreat to deep water where they cannot be followed.",
            },
            {
              term: "True Names",
              text: "If a Nixalka's true name is known and spoken with authority, it grants some measure of control over the creature. Such names are difficult to learn, Nixalka guard them carefully, but they are the most reliable method of binding one.",
            },
            {
              term: "Running Salt Water",
              text: "Nixalka cannot cross running salt water. This is why coastal Nixalka are rare, they are trapped in estuaries and river mouths, unable to enter the sea. A traveler who can reach salt water is safe from a Nixalka's pursuit.",
            },
            {
              term: "Breaking the Glamour",
              text: "The glamour of a Nixalka can be broken by cold iron, by certain prayers, or by showing the creature something truly beautiful—a work of art, a perfect sunset, a genuine act of love. For a moment, the illusion falters, and the truth is revealed. This is often enough to break the spell.",
            },
          ],
        },
      ],
    },
    {
      id: "dangers-threat",
      title: "Dangers & Threat Level",
      blocks: [
        {
          type: "p",
          text: "**Threat Level:** High",
        },
        {
          type: "p",
          text: "Nixalka are among the most dangerous creatures of fresh water. Their song can lure even the wary to their deaths, their illusions can make a deadly pool look like solid ground, and their grip is strong enough to hold a struggling adult beneath the surface until they stop moving.",
        },
        {
          type: "p",
          text: "They are not mindless predators. They are intelligent, patient, and relentless. A Nixalka that has marked a victim will not give up until that victim is in the water. They are a threat to travelers, to fishermen, to children playing too close to the river's edge. Any body of fresh water in the Duskward Realms might harbor one, and any body of fresh water might be the last thing a careless traveler ever sees.",
        },
      ],
    },
    {
      id: "variants",
      title: "Variants & Sub-Types",
      blocks: [
        {
          type: "terms",
          items: [
            {
              term: "The Deep Ones",
              text: "Nixalka born from drownings in deep, still water; lakes, ponds, and bottomless pools. They are patient and silent, preferring to wait in the depths rather than sing from the shallows. They do not lure with song but with presence—a feeling of being watched, a sudden chill in the air, a sense that something is waiting just beneath the surface. They are more physical than other Nixalka, pulling victims under with cold hands rather than seductive words.",
            },
            {
              term: "The Song-Wrought",
              text: "Nixalka born from drownings in running water; rivers, streams, and rapids. They are restless and agitated, their song a constant, rippling melody that echoes the movement of the water. They are more active than other Nixalka, pursuing victims along the banks and calling to them from every bend in the river. They are the most seductive of the Nixalka, their voices carrying for miles and their glamour nearly impossible to resist.",
            },
          ],
        },
      ],
    },
    {
      id: "cross-references",
      title: "Cross-References",
      blocks: [
        {
          type: "refs",
          items: [
            {
              label: "Phookas",
              text: "[[phookas|Phookas]] and Nixalka sometimes work together to lead travelers to their doom, the Phooka drives the victim toward the water, and the Nixalka finishes the job. This is not cooperation; it is simply two forces of chaos finding mutual amusement.",
              to: "/bestiary/general/phookas",
              toLabel: "The Phookas record",
            },
            {
              label: "Old Gods & Spirits",
              text: "[[/world/races/spirits-true-elementals|River-Mothers]] are sometimes confused with Nixalka, as both are spirits of fresh water. The distinction is one of power: River-Mothers are forces of nature; Nixalka are spirits of place.",
              to: "/world/races/spirits-true-elementals",
              toLabel: "Their record among the Peoples",
            },
          ],
        },
      ],
    },
  ],
};

export default nixalka;
