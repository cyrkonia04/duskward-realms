// THE PHOOKAS RECORD — the second full page of the General Bestiary
// (tier three: /bestiary/general/phookas).
//
// REMADE (2026-09-18) by the author: Phookas are now narrative
// fragments — stories that leaked into the mortal world from the
// Twilight Deeps, plots that demand to be completed. The Folklore
// Origin, Physical Description, Habitat, and most of the Behavior
// sections carry over; the rest is the author's new text, verbatim.
// Em dashes are left exactly as written. Typographic repairs,
// announced: "stories,it consumes them" gains its missing space
// ("stories, it consumes them"). Inline markers follow the archive
// convention: **bold** is reserved for labels ("Threat Level:"), and
// [[...]] marks a reference to another entry (bold; linked when its
// record exists, bold-in-bronze until then).
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
// The 2026-09-15 variants (The Puck, The Bogie, The Shape-Eater) are
// retired by the remake, replaced by the four tale-shapes. The former
// Grimlings cross-reference is likewise retired for now; the
// Grimlings still point here, one-way.
//
// Sections are a block list (p / terms / steps / list / quotes /
// aside / refs) so future beasts with different shapes need no schema
// change. Tags follow the taxonomy in bestiaryTags.js, ids verbatim.

const phookas = {
  slug: "phookas",
  cabinet: "general",
  name: "Phookas",
  knownAs: "Púcas, Puck, Shape-shifters, Story-Things",
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
          text: "Phookas are narrative fragments, stories that leaked into the mortal world from the [[/world|Twilight Deeps]] when the boundaries frayed. They are not living beings with their own wills or desires. They are plots, sequences of events that demand to be completed. A Phooka is a story about a trickster, stuck in the middle of its third act, forever seeking the characters and setting it needs to reach its conclusion.",
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
          text: "A Phooka's true form is nebulous and rarely seen. Those who have glimpsed it describe a smoky, shadowy creature with glowing eyes—a shape that seems to shift even as it is observed, never quite settling into a fixed form. It is a presence, a gathering of shadow and intent that takes shape only when it chooses.",
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
          text: "Phookas are compelled by their own narratives. They cannot stop being tricksters any more than a river can stop flowing. They must trick, must mislead, must cause chaos, because that is what the story demands. They do not choose their actions, they are driven by the shape of the tale they are trying to tell.",
        },
        {
          type: "p",
          text: "They seek out mortals not out of malice or amusement, but because they need other characters. A story cannot be told with only one actor. Every traveler, every farmer, every lost soul becomes a player in their unfinished tale, whether they consent or not. The Phooka does not care about the consequences of its actions. It cares only about reaching the end of its story. The fact that the farmer might die of fright, or fall down a ravine, or be blamed for whatever the Phooka did afterward, are not considerations. They are simply not part of the Phooka's understanding.",
        },
        {
          type: "terms",
          items: [
            {
              term: "Different Stories, Different Phookas",
              text: "Not all Phookas are the same. Each is a fragment of a specific story, a particular tale that leaked through from the [[/world|Twilight Deeps]]. Some Phookas are fragments of stories about outsmarting a clever hero. Others are fragments of stories about leading a lost traveler home. Others still are fragments of darker tales: stories of punishment, of warnings, of bargains gone wrong. A Phooka will seek to recreate the conditions of its original story, casting mortals in the roles it needs them to play.",
            },
            {
              term: "Reasoning with a Phooka",
              text: "It is possible, though difficult, to bargain with a Phooka. They value cleverness, novelty, and entertainment above all else. A mortal who can tell a good story, solve a riddle, or propose a better prank might earn a Phooka's respect. They can be appeased with offerings of cream or honey, though such offerings are more of a bribe than a tribute. But even when bargained with, a Phooka remains bound by its narrative. It cannot break character. It cannot stop being what it is.",
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
              text: "The Phooka, satisfied that its story has progressed, moves on to its next scene.",
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
              text: "Phookas can take any form their story requires, though their glowing eyes always betray them. They can shift in the blink of an eye, often multiple times in rapid succession to confuse and terrify.",
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
              term: "Narrative Compulsion",
              text: "A Phooka cannot act outside its story. It cannot choose to be kind if its story is about cruelty. It cannot choose to be honest if its story is about deception. This is both its greatest limitation and its most predictable weakness, if you know the story it is trying to tell, you can predict what it will do next.",
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
              text: "Cold wrought iron disrupts a Phooka's narrative coherence. A line of iron nails across a threshold will keep one out. A weapon made of cold iron can cause a Phooka to lose its form temporarily; it does not die, but it dissolves into mist and must reform elsewhere, often far away.",
            },
            {
              term: "Salt and Running Water",
              text: "Phookas cannot cross a line of salt or running water. These are barriers they cannot pass, though they may wait on the other side for an unwary traveler to make a mistake.",
            },
            {
              term: "Riddles and Stories",
              text: "Phookas love riddles and stories. A traveler who can tell a good story, solve a riddle, or propose a wager might earn the Phooka's temporary attention. This is not a permanent solution, but it can buy time, and sometimes, if the story is good enough, the Phooka may forget its original narrative entirely and adopt the new one.",
            },
            {
              term: "Narrative Disruption",
              text: "If a Phooka's story is interrupted; if the characters refuse to play their roles, if the setting is wrong, or the plot is derailed, the Phooka becomes confused and disoriented. It will attempt to steer events back toward the story it knows, but a clever mortal can use this confusion to escape.",
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
          text: "Phookas are not hunters. They do not stalk prey or seek to kill. But they are dangerous in the way that a prank can be dangerous; a farmer led into a marsh might drown. A traveler terrified by a shape-shifting monster might fall from a cliff. A wedding ruined by a Phooka's chaos might lead to feuds and violence that the Phooka finds endlessly entertaining.",
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
              term: "The Broken Tale",
              text: "A Phooka whose story was damaged during its passage through the Twilight Deeps. It cannot remember its own narrative: it knows only fragments, disconnected scenes, characters without context. It is confused, desperate, and dangerous, lashing out at anything that interrupts its attempts to reconstruct its story. Unlike other Phookas, it has no consistent form; it shifts randomly between shapes, sometimes multiple times in a single encounter.",
            },
            {
              term: "The Endless Tale",
              text: "A Phooka whose story has no conclusion. It was a tale that was never finished; a plot that simply stopped mid-sentence, without resolution. It is trapped in an eternal middle act, forever seeking the ending it cannot reach. It is more persistent than other Phookas, following victims for days or weeks, growing increasingly frantic as its story refuses to conclude. Some say these Phookas are the most tragic, they are stories that will never be told.",
            },
            {
              term: "The Borrowed Tale",
              text: "A Phooka that has adopted someone else's story. It encountered another Phooka, or a mortal storyteller, or a book of tales, and it absorbed the narrative, making it its own. These Phookas are more adaptable than others, they can change their story if they find a better one. They are also more dangerous, as they have no fixed nature to predict. Their behavior is dictated entirely by whatever tale they currently inhabit.",
            },
            {
              term: "The Story-Eater",
              text: "The rarest variant. A Phooka that does not merely tell stories, it consumes them. It feeds on the narratives of others, draining meaning from books, songs, and even memories. A Story-Eater is a hollow thing, a fragment that has outlived its own tale and now survives by stealing the tales of others. It is the rarest and most dangerous variant, for it does not just trick its victims; it forgets them, erasing their stories from the world.",
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
              label: "Nixalka",
              text: "Phookas and [[nixalka|Nixalka]] sometimes work together to lead travelers to their doom, the Phooka drives the victim toward the water, and the Nixalka finishes the job. This is not cooperation; it is simply two forces of chaos finding mutual amusement.",
              to: "/bestiary/general/nixalka",
              toLabel: "The Nixalka record",
            },
          ],
        },
      ],
    },
  ],
};

export default phookas;
