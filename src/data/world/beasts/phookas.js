// THE PHOOKAS RECORD — the second full page of the General Bestiary
// (tier three: /bestiary/general/phookas).
//
// Content is the author's, verbatim: header fields, every section,
// the encounter, the cross-references. Em dashes are left exactly as
// written. One typographic repair: a missing space after a comma in
// the Shape-Eater entry ("them,taking" -> "them, taking"). Inline
// markers follow the archive convention: **bold** is reserved for
// labels ("Threat Level:"), and [[...]] marks a reference to another
// entry (bold; linked when its record exists, bold-in-bronze until
// then).
//
// For Dangers & Threat Level the author wrote two modules (one for
// hunters, one for general readers) and left the choice to the
// archive; the general module is used here, as the encyclopedia
// speaks to farmers and travelers first. The author has since ruled
// (2026-09-17) that the hunter-oriented rating stands: the label is
// renamed to "Threat Level:" and the threat tag reads threat:moderate
// to match the body. The hunter module's unique details (no trail, no
// bounty, a body that dissolves into mist) remain noted in CHANGES
// for possible reuse.
//
// Sections are a block list (p / terms / steps / list / quotes /
// aside / refs) so future beasts with different shapes need no
// schema change. Tags follow the taxonomy in bestiaryTags.js, ids
// verbatim.

const phookas = {
  slug: "phookas",
  cabinet: "general",
  name: "Phookas",
  knownAs: "Púcas, Puck, Shape-shifters",
  tags: [
    "origin:fey",
    "behavior:trickster",
    "habitat:liminal",
    "habitat:wilderness",
    "threat:moderate",
    "rarity:uncommon",
    "folklore:celtic",
  ],
  sections: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        {
          type: "p",
          text: "Phookas are trickster fey of the wilderness—a force of chaos, neither good nor evil, but profoundly dangerous due to their amorality. They are shapeshifters, capable of appearing as anything from a sleek black horse to a handsome traveler to a shimmering light in the dark. Their goal is simple: to create mayhem for their own amusement.",
        },
        {
          type: "p",
          text: "They are not malevolent in the way of [[grimlings|Grimlings]] or [[/bestiary/wound-sites|the Gloaming's children]]. They do not seek to destroy or corrupt. They simply find mortal confusion and terror entertaining, and they have all the time in the world to pursue their amusement.",
        },
      ],
    },
    {
      id: "folklore-origin",
      title: "Folklore Origin",
      blocks: [
        {
          type: "p",
          text: "Phookas derive from Irish folklore: the púca, a shapeshifting trickster spirit known for leading travelers astray, terrifying farmers, and causing general mischief. In the original tales, the púca could be either helpful or harmful depending on its mood and how it was treated. It was sometimes a bringer of good fortune, sometimes a nightmare.",
        },
      ],
    },
    {
      id: "physical-description",
      title: "Physical Description",
      blocks: [
        {
          type: "p",
          text: "A Phooka's true form is nebulous and rarely seen. Those who have glimpsed it describe a smoky, shadowy creature with glowing eyes—a shape that seems to shift even as it is observed, never quite settling into a fixed form. It is not a physical thing in the way of most creatures; it is a presence, a gathering of shadow and intent that takes shape only when it chooses.",
        },
        {
          type: "p",
          text: "In its shapeshifted forms, the Phooka is convincing but never quite perfect. Its eyes give it away; they glow with a faint, unnatural light, usually yellow or gold, and they hold a spark of something other that no mortal creature possesses. A horse's eyes might be too knowing. A dog's gaze might be too calculating. A traveler's smile might be too sharp.",
        },
        {
          type: "list",
          label: "Common Forms",
          items: [
            "A sleek black horse with glowing yellow eyes",
            "A large, shaggy dog",
            "A rabbit or hare",
            "A handsome traveler with an unsettling smile",
            "A shimmering light in the dark",
          ],
        },
      ],
    },
    {
      id: "nature-psychology",
      title: "Nature & Psychology",
      blocks: [
        {
          type: "p",
          text: "Phookas are tricksters. They do not want to kill, they want to play. Their amusement comes from confusion, frustration, and the terror of the unknown. They delight in leading travelers astray, in transforming in front of witnesses, in causing chaos at weddings and festivals and quiet evenings by the fire.",
        },
        {
          type: "p",
          text: "They are not malicious. They do not understand the harm they cause. To a Phooka, a terrified farmer running from a shape-shifting horse is not a victim, it is a punchline. The fear, the confusion, the chaos: these are the joke. The fact that the farmer might die of fright, or fall down a ravine, or be blamed for whatever the Phooka did afterward, are not considerations. They are simply not part of the Phooka's understanding.",
        },
        {
          type: "terms",
          items: [
            {
              term: "Reasoning with a Phooka",
              text: "It is possible, though difficult, to bargain with a Phooka. They value cleverness, novelty, and entertainment above all else. A mortal who can tell a good story, solve a riddle, or propose a better prank might earn a Phooka's respect. They can be appeased with offerings of cream or honey, though such offerings are more of a bribe than a tribute.",
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
          text: "Phookas are uncommon but found wherever there are crossroads and liminal spaces, the places where one world touches another. They are most common in the wilderness, especially along lonely roads, at the edges of forests, and near ancient standing stones. They are also drawn to rural settlements, where they can torment farmers and travelers with ease.",
        },
        {
          type: "p",
          text: "They avoid highly urban areas. Dense cities, with their iron, their noise, and their crowds, are uncomfortable for Phookas. They prefer the quiet edges of civilization; forgotten crossroads, overgrown paths, the places where the wild still presses close. The more ordered and populated a place is, the less appealing it becomes.",
        },
      ],
    },
    {
      id: "behavior-ecology",
      title: "Behavior & Ecology",
      blocks: [
        {
          type: "p",
          text: "Phookas are solitary creatures. They do not form societies, do not build homes, and do not reproduce in any known way. They simply are, unfolding from [[/world|the Twilight Deeps]] into the mortal realm as naturally as fog rolling off a river.",
        },
        {
          type: "steps",
          label: "A Typical Encounter",
          items: [
            {
              text: "The traveler encounters something unusual: a horse in an empty field, a dog on a lonely road, a stranger at a crossroads.",
            },
            {
              text: "The creature behaves strangely. The horse's eyes are too knowing. The dog doesn't bark. The stranger smiles too much.",
            },
            {
              text: "The traveler becomes uneasy. The creature follows, not threatening, but persistent.",
            },
            {
              text: "The chaos begins. The creature leads the traveler into a marsh, or transforms into something terrifying, or simply laughs and disappears, leaving the traveler lost and confused.",
            },
            {
              text: "The Phooka, satisfied, moves on to its next amusement.",
            },
          ],
        },
        {
          type: "terms",
          items: [
            {
              term: "What They Eat",
              text: "Phookas do not eat in the way mortals do. They are sustained by chaos and novelty; the confusion of the lost, the terror of the frightened, and the laughter of the pranked. Offerings of cream or honey are appreciated as tokens, but they are not necessary for survival.",
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
              term: "Shapeshifting",
              text: "Phookas can take any form they choose, though their glowing eyes always betray them. They can shift in the blink of an eye, often multiple times in rapid succession to confuse and terrify.",
            },
            {
              term: "Illusions",
              text: "They can create minor illusions; phantom lights, misleading paths, sounds that have no source. These are not perfect; they are impressions of reality, just enough to lead a traveler astray.",
            },
            {
              term: "Language",
              text: "Phookas can speak any language they hear, though they often speak in riddles, rhymes, or nonsense that is just barely comprehensible. They understand the meaning of words, but they do not respect them.",
            },
            {
              term: "Oaths and Promises",
              text: "Phookas are bound by their word, though they will twist its meaning to their advantage. A Phooka who promises not to harm someone might help someone else harm them.",
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
              text: "Cold wrought iron is repellent to Phookas, as it is to all [[/world/races/the-fey|Fey]]. A line of iron nails across a threshold will keep them out. A weapon made of cold iron can harm them, though they are quick and rarely allow themselves to be caught.",
            },
            {
              term: "Salt and Running Water",
              text: "Phookas cannot cross a line of salt or running water. These are barriers they cannot pass, though they may wait on the other side for an unwary traveler to make a mistake.",
            },
            {
              term: "Riddles and Stories",
              text: "Phookas love riddles and stories. A traveler who can tell a good story, solve a riddle, or propose a wager might earn the Phooka's temporary attention. This is not a permanent solution, but it can buy time.",
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
          text: "**Threat Level:** Moderate",
        },
        {
          type: "p",
          text: "Phookas are not hunters. They do not stalk prey or seek to kill. But they are dangerous in the way that a prank can be dangerous, a farmer led into a marsh might drown. A traveler terrified by a shape-shifting monster might fall from a cliff. A wedding ruined by a Phooka's chaos might lead to feuds and violence that the Phooka finds endlessly entertaining.",
        },
        {
          type: "p",
          text: "They are a moderate threat because their danger is indirect. They do not attack; they incite. They do not kill; they create situations in which people are killed. And they do not care, because to a Phooka, the chaos is the point.",
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
              term: "The Puck",
              text: "A larger, more powerful Phooka that has developed a taste for human interaction. Pucks are more likely to speak, more likely to make bargains, and more likely to linger in one place. Some have been known to take a liking to a specific village or family and protect them, not out of kindness, but because the Phooka finds their continued existence amusing.",
            },
            {
              term: "The Bogie",
              text: "A Phooka that has become attached to a specific place: a bridge, a crossroads, a ruined mill. It has grown territorial and will torment anyone who passes through its domain with relentless, focused mischief. Bogies are more dangerous than normal Phookas because they do not wander; they wait.",
            },
            {
              term: "The Shape-Eater",
              text: "A rumor or legend. Some say that there are Phookas who do not merely mimic other creatures, but consume them, taking their form and forgetting they were ever anything else. These Phookas are said to be lost, confused, and profoundly dangerous, lashing out at anything that threatens their fragile sense of self.",
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
              label: "The Fey",
              text: "Phookas are the most commonly encountered Fey in the Duskward Realms, the thin edge of a very large wedge.",
              to: "/world/races/the-fey",
              toLabel: "Full record among the Peoples",
            },
            {
              label: "Bogarts",
              text: "A [[bogarts|Bogart]] will drive off a Phooka, as the Phooka's chaos disrupts the order of a household. The two are natural enemies.",
              to: "/bestiary/general",
              toLabel: "The General Bestiary",
            },
            {
              label: "Nixies",
              text: "Phookas and [[nixies|Nixies]] sometimes work together to lead travelers to their doom—the Phooka drives the victim toward the water, and the Nixie finishes the job. This is not cooperation; it is simply two forces of chaos finding mutual amusement.",
              to: "/bestiary/general",
              toLabel: "The General Bestiary",
            },
            {
              label: "Grimlings",
              text: "Villagers who hear laughter in a ruined house and knocking in the walls often blame the same creature for both. The mistake can be costly. A Phooka's chaos passes and takes its music with it; a Grimling's infestation stays and rots. The two are rarely found together: a Grimling-haunted house has nothing left to laugh about, and a Phooka will not linger where nothing is fun.",
              to: "/bestiary/general/grimlings",
              toLabel: "The Grimlings record",
            },
          ],
        },
      ],
    },
  ],
};

export default phookas;
