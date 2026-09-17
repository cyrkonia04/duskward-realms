// THE GRIMLINGS RECORD — the first full page of the General Bestiary
// (tier three: /bestiary/general/grimlings).
//
// Content is the author's, verbatim: header fields, every section,
// the sayings, the cross-references. Em dashes are left exactly as
// written. Inline markers follow the archive convention: **bold** is
// reserved for labels ("Threat Level:"), *italic* for foreign terms,
// and [[...]] marks a reference to another entry (bold; linked when
// its record exists, bold-in-bronze until then).
//
// Repairs approved by the author (2026-09-17): the Folklore Origin
// tells its strands with their true ages (gremlins are a 20th-century
// RAF invention) and ends after two paragraphs — the comparison with
// the real-world originals is cut, for the archive has no need to
// prove itself the stranger. The miners pay their Knockers in bread,
// the old tribute, with iron reserved for warding. Decorative bolds
// are unmarked; entry references are rabbit-holes. The
// cross-references gain Phookas, the second written record.
//
// Sections are a block list (p / terms / steps / quotes / aside /
// refs) so future beasts with different shapes need no schema change.
// Tags follow the taxonomy in bestiaryTags.js, ids verbatim.

const grimlings = {
  slug: "grimlings",
  cabinet: "general",
  name: "Grimlings",
  knownAs: "Gremlins, Knockers (in mines), Misery-Maws",
  tags: [
    "origin:natural",
    "behavior:parasite",
    "habitat:domestic",
    "habitat:underground",
    "threat:low",
    "rarity:common",
    "folklore:germanic",
  ],
  sections: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        {
          type: "p",
          text: "Grimlings are small, gaunt humanoids that infest places of prolonged suffering. They are not born—they are attracted, drawn to despair, anger, and jealousy like moths to a flame. A single Grimling is a nuisance. A pack is a plague. They do not kill their victims; they fester them, amplifying misery until the household collapses under the weight of its own despair.",
        },
        {
          type: "p",
          text: "They are among the most common supernatural threats in the Duskward Realms, found wherever people suffer: battlefields, plague towns, unhappy homes, and the deep tunnels of [[/world/races/drumen|Drümen]] mines where they are known as Knockers and blamed for misfortunes both real and imagined.",
        },
      ],
    },
    {
      id: "folklore-origin",
      title: "Folklore Origin",
      blocks: [
        {
          type: "p",
          text: "Grimlings are stitched together from three strands of mortal folklore, and the strands are not equally old. The oldest is that of the goblins, the household and hearth spirits of medieval Europe; the name is Middle English, borrowed from the Old French *gobelin*, and scholars trace it further back, to the Germanic kobold or the Greek *kobalos*, a mischievous spirit.",
        },
        {
          type: "p",
          text: "Next come the knockers of Cornish mining tradition, the mine spirits whose legends were collected in the nineteenth century from practices far older, and who were paid their due in the last crusts of a miner's pasty. The youngest strand is barely a century old: the gremlins, invented by Royal Air Force pilots in the 1920s and made famous by the Second World War, invisible tricksters blamed for every mechanical failure that had no earthly cause. Some say their name is a child of goblin; others trace it to the Old English *gremian*, to vex.",
        },
      ],
    },
    {
      id: "physical-description",
      title: "Physical Description",
      blocks: [
        {
          type: "p",
          text: "Grimlings are small, rarely taller than a human child, with gaunt, almost skeletal frames covered in leathery skin. Their coloration ranges from sickly grey-green to a bruised, mottled purple, mimicking the hues of decaying flesh and old bruises. Their heads are too large for their bodies, with wide, black eyes that reflect no light. They have no visible pupils; their eyes are pools of absolute darkness.",
        },
        {
          type: "p",
          text: "Their hands are their most prominent feature: large, knobby, with fingers that are too long and joints that bend in directions they should not. Each finger ends in a sharp, curved claw. Their feet are similarly oversized, with three thick toes ending in blunt claws.",
        },
        {
          type: "p",
          text: "They move with a skittering, jerky gait—never quite walking, never quite running, always looking like they are about to fall over but never doing so. Their voices are high-pitched and chittering, like the sound of dry leaves scraping against stone. When they laugh, it sounds like breaking twigs.",
        },
      ],
    },
    {
      id: "nature-psychology",
      title: "Nature & Psychology",
      blocks: [
        {
          type: "p",
          text: "Grimlings are psychic parasites. They do not feed on flesh or blood; they feed on negative emotions such as despair, anger, jealousy, or resentment. They are drawn to these emotions like carrion birds to a corpse. A place where someone has suffered deeply, or where many people suffer together, becomes a beacon to them.",
        },
        {
          type: "p",
          text: "They are not intelligent in the way humans or Drümen are. They cannot plan complex strategies or hold conversations. But they possess a cunning; a low, instinctual cleverness that makes them expert at hiding, at ambush, at finding the cracks in a household's defenses. They understand suffering, and they know how to make it worse.",
        },
        {
          type: "terms",
          items: [
            {
              term: "The Hob-Grim",
              text: "When a group of Grimlings grows large enough, usually a dozen or more, one of them undergoes a transformation. It grows larger, its eyes gain a flicker of true intelligence, and it develops the ability to curse livestock, spoil crops, and inflict minor physical maladies on those who offend it. The Hob-Grim becomes the leader of the pack, directing the others with a low, chittering language that seems to be more instinct than speech.",
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
          text: "Grimlings are common throughout the Duskward Realms. They are found wherever suffering festers: abandoned battlefields, plague-ridden towns, the homes of the bitterly unhappy, and the deep mines of the [[/world/races/drumen|Drümen]], where they are known as Knockers.",
        },
        {
          type: "p",
          text: "They prefer dark, enclosed spaces; crawlspaces, cellars, the spaces between walls, the shadowed corners of abandoned rooms. They are most active at night, though they are not harmed by sunlight. They simply prefer the dark, where their prey is already frightened and alone.",
        },
        {
          type: "p",
          text: "In the Drümen mines, Grimlings, known as Knockers, are a constant nuisance. They are blamed for cave-ins, lost tools, and the maddening tapping sounds that echo through the tunnels. Some miners leave offerings of stale bread at the face of a new seam, the last crusts of their midday meal, in the hope that the Knockers will knock where the ore runs rich rather than where the roof comes down. Others trust to iron instead, and nail old horseshoes above the tunnel mouth. No miner does both: you either pay the Knockers in bread, or you bar the way against them.",
        },
      ],
    },
    {
      id: "behavior-ecology",
      title: "Behavior & Ecology",
      blocks: [
        {
          type: "p",
          text: "Grimlings do not build. They do not farm, and nor do they create. They simply take. They find a place where suffering already exists and make it worse.",
        },
        {
          type: "steps",
          label: "The Pattern of Infestation",
          items: [
            {
              label: "Attraction",
              text: "A single Grimling is drawn to a place where strong negative emotions are present. It hides, observes, and waits.",
            },
            {
              label: "Amplification",
              text: "The Grimling begins its work: spoiling food, hiding tools, breaking pottery, whispering in the dark. The victim becomes more frustrated and more angry.",
            },
            {
              label: "Multiplication",
              text: "The increased suffering attracts more Grimlings. Within weeks, a single creature becomes a pack.",
            },
            {
              label: "Festering",
              text: "The household spirals. Bad luck compounds. Fights break out. People stop caring. The Grimlings grow fat on the misery.",
            },
            {
              label: "Collapse",
              text: "Eventually, the household is abandoned or destroyed. The Grimlings move on, following the trail of despair to a new victim.",
            },
          ],
        },
        {
          type: "terms",
          items: [
            {
              term: "What They Eat",
              text: "Grimlings do not eat physical food. They consume emotional residue, the psychic byproduct of suffering. A place where someone has wept bitterly is a feast. A place where someone has died in despair is a banquet.",
            },
            {
              term: "How They Reproduce",
              text: "Grimlings reproduce by division. When a Grimling has consumed enough emotional energy, it splits into two smaller Grimlings. These grow and eventually split again. This is why a single Grimling can become a pack so quickly if not addressed.",
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
              term: "Spoilage",
              text: "Grimlings can accelerate decay in organic matter. Food rots faster in their presence. Milk sours. Meat becomes maggot-ridden. This is not magic, it is a passive effect of their presence, a hastening of entropy.",
            },
            {
              term: "Mischief",
              text: "They hide tools, untie knots, break pottery, and cause minor accidents. None of this is lethal, but it is relentless. A household plagued by Grimlings will find itself in a constant state of low-grade chaos.",
            },
            {
              term: "Whispering",
              text: "Grimlings can whisper in the dark, their voices carrying just enough to be heard but never understood. These whispers are not words; they are emotions given sound. They worm into the mind, amplifying whatever negative feelings are already present.",
            },
            {
              term: "The Hob-Grim's Curse",
              text: "A Hob-Grim can curse livestock, causing them to sicken and die. It can spoil crops, withering them in the field. It can inflict minor maladies—headaches, nausea, persistent fatigue—on those who offend it.",
            },
            {
              term: "Psychic Vulnerability",
              text: "Grimlings are particularly effective against those already suffering. A person in the depths of grief or despair is more vulnerable to their influence, more easily amplified. They are the carrion birds of the soul.",
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
              text: "Cold wrought iron is repellent to Grimlings. They cannot touch it without pain. Iron nails driven into doorways and window frames will keep them out. Iron weapons will kill them, though they are quick and difficult to hit.",
            },
            {
              term: "Loud Noises",
              text: "Grimlings hate loud, sudden noises—church bells, shouting, the clash of metal on metal. These sounds disrupt their concentration and hurt their sensitive ears. They will flee from a place where such sounds are common.",
            },
            {
              term: "Pure Joy",
              text: "The presence of true, unwavering joy; not forced cheerfulness, but genuine, profound happiness, is anathema to Grimlings. They cannot endure it. A home filled with genuine laughter and love is a home they cannot infest. This is rare in the Duskward Realms, which is why Grimlings are so common.",
            },
            {
              term: "Salt and Herbs",
              text: "Lines of salt and certain herbs, such as rowan, Saint-John's-wort, or garlic, can deter them. These are not lethal, but they create barriers that Grimlings are reluctant to cross.",
            },
            {
              term: "Killing Them",
              text: "Grimlings can be killed. They are small, fragile, and not physically formidable. The challenge is not in the killing, it is in finding them, and in preventing more from coming. A single Grimling killed is replaced by two more if the suffering that attracted it remains.",
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
          text: "**Threat Level:** Low (individually)",
        },
        {
          type: "p",
          text: "A single Grimling is a nuisance. A pack is a plague. An infestation can destroy a household, drive a family to madness, or cause the collapse of an entire village's spirit. They are not deadly in direct combat, they avoid confrontation, but their slow, grinding erosion of hope is just as lethal as any blade.",
        },
        {
          type: "p",
          text: "They are particularly dangerous in the Duskward Realms because the world is already filled with suffering. [[/world#wounding|The Grey Rot]] makes everything harder, and Grimlings thrive on that hardness. They are the shadows that gather where the light has already begun to fade.",
        },
      ],
    },
    {
      id: "cultural-significance",
      title: "Cultural Significance",
      blocks: [
        {
          type: "p",
          text: "Grimlings are a common scourge, and every culture has its own name for them, its own methods of warding them off, and its own stories about their origins. They are blamed for misfortune, feared as omens of despair, and treated with a mixture of contempt and genuine dread. The specifics of how each region views them—their folk names, their superstitions, their rituals of appeasement—vary from place to place, but the underlying truth is universal: where there is suffering, Grimlings will gather.",
        },
        {
          type: "aside",
          text: "Regional variations on Grimlings will be documented in their respective locations.",
        },
        {
          type: "quotes",
          label: "Common Sayings",
          items: [
            "\"A Grimling in the wall means a hole in the heart.\"",
            "\"Laugh loudly, or the Grimlings will laugh for you.\"",
            "\"Iron in the door, salt on the sill, and a song on your lips. That's the trinity of a happy home.\"",
          ],
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
              term: "The Hob-Grim",
              text: "Larger, more intelligent, and more dangerous. It leads packs, curses livestock, and acts as a general of the Grimling host. Hob-Grims are the only variant that can be reasoned with—barely—though they are deceitful and cruel.",
            },
            {
              term: "The Deep-Knocker",
              text: "A variant found in the deepest Drümen mines. They are paler than surface Grimlings, nearly blind, and their mischief is more destructive. They are blamed for cave-ins and gas explosions.",
            },
            {
              term: "The Wall-Weep",
              text: "A rare variant that grows fat on the suffering of a single, isolated person. They are more powerful than normal Grimlings, but they cannot divide and multiply. A Wall-Weep will attach itself to one victim and feed on them until they die.",
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
              label: "The Grey Rot",
              text: "Grimlings thrive where the Rot has taken root, as suffering is more common and joy is harder to find.",
              to: "/world#wounding",
              toLabel: "The World",
            },
            {
              label: "Bogarts",
              text: "A [[bogarts|Bogart]] will actively fight off Grimlings, making them invaluable allies in any home plagued by the creatures.",
              to: "/bestiary/general",
              toLabel: "The General Bestiary",
            },
            {
              label: "The Gloaming",
              text: "The Gloaming is the ultimate source of despair, making it a perfect breeding ground for Grimlings. However, the creatures avoid the Gloaming's deeper reaches, as even they cannot stomach the concentrated sorrow of [[sighs|the Sighs]].",
              to: "/regions",
              toLabel: "The Regions",
            },
            {
              label: "Phookas",
              text: "Natural rivals, in their way. A Phooka's chaos keeps misery moving, and misery that moves will not fester; a farm with a Phooka in its fields is a farm Grimlings cannot settle. Misery, unlike fun, does not travel.",
              to: "/bestiary/general/phookas",
              toLabel: "The Phookas record",
            },
          ],
        },
      ],
    },
  ],
};

export default grimlings;
