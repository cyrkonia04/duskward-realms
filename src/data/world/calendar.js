// ─── THE CALENDAR OF THE DUSKWARD REALMS ───

export const calendarLede =
  'The world keeps its own time — seven phases, twenty-eight Naming Days, and the days that belong to no month.';

// WHY TIME IS COUNTED THIS WAY — the intro speaks this, not a table.
export const calendarIntro = [
  'Before the Great Wounding, the kingdoms of light kept clocks and calendars of their own devising. The Wounding tore that order apart: time itself was fractured, and the tidy units mortals once imposed upon it; weeks, seasons, and fixed years lost their grip on the world. What remained was older and simpler. The pulse of a living, wounded thing.',
  'So time is no longer counted. It is listened to. The cycle falls into seven phases, each named in an old tongue for the condition of the world itself — grief, rage, longing, apathy, regret, hope, despair. The names are not commemorations of anything so small as history; they are diagnoses. The realms do not remember a month. They endure it.',
  'Day to day, nobody counts moons at all. The pulse governs the long rhythm, the Naming Days are its heartbeats, and the moons between them are the silences of waiting. Small life moves to smaller beats: the sun, the tides, the burning-down of a candle. Every land feels the same pulse under different names.',
];

// SHORT-TERM TIMEKEEPING — "the pulse governs long time; the world governs short time."
export const theThreeMeasures = [
  {
    name: 'Sun & Sky',
    text: 'The sun still rises and sets, even veiled in mist. Dawn, noon, dusk and night are universal markers; folk name their meetings for "sun-high", "sun-low", or "twilight".',
  },
  {
    name: 'Tides',
    text: 'Along coasts and rivers, tides mark the passing hours. "Two tides from now" is common speech in the Free Cities and along the Blackwater. Inland, bells and the sun take the tide\'s place.',
  },
  {
    name: 'Candles & Glasses',
    text: 'For precise work — forge-timing, alchemy, cookery — a "candle" burns down to a marked line, and a "turn" empties the sand glass. Local units, but within a workshop or hearth, reliable.',
  },
];

export const timeVoices = [
  { quote: 'The shipment arrives in three tides.', who: 'a merchant of Silverspur' },
  { quote: 'The blade needs two candles more in the forge.', who: 'a Drümen smith of Khazad-Kûr' },
  { quote: 'Meet me at the crossroads when the sun is high.', who: 'a farmer of the Weeping Hills' },
  { quote: 'The ritual begins at dusk, two turns after the evening bell.', who: 'a scholar of the Ashen Athenaeum' },
];

// THE SEVEN MONTHS — name, numeral, a whispered evocation of the phase,
// and the four Naming Days with the world's condition at each heartbeat.
export const months = [
  {
    name: 'Banat',
    numeral: 'I',
    whisper: 'The sky forgets its colour, and sound grows distant.',
    days: [
      { name: 'The Unnamed', condition: 'The sky turns grey. A silence falls over the land. Sound seems muffled.' },
      { name: 'The Weeping Tide', condition: 'Rain falls without pause. Rivers swell. The air is heavy and wet.' },
      { name: 'The Hollow Crown', condition: 'The light grows thin and pale. Shadows lengthen. Colours fade.' },
      { name: 'The Final Harvest', condition: 'The wind stills. The leaves fall all at once. A stillness settles.' },
    ],
  },
  {
    name: 'Bijes',
    numeral: 'II',
    whisper: 'The dawn burns red, and the ground remembers its anger.',
    days: [
      { name: 'The Blood-Tithe', condition: 'The sky turns red at dawn and dusk. The air is hot and dry.' },
      { name: 'The Sundering', condition: 'The ground trembles. Cracks appear in stone and earth.' },
      { name: 'The War-Scream', condition: 'Storms rage. Thunder rolls constantly. Lightning splits the sky.' },
      { name: 'The Ash-Fall', condition: 'The storms pass. The air is thick with dust and ash. The world is exhausted.' },
    ],
  },
  {
    name: 'Rindu',
    numeral: 'III',
    whisper: 'Mist rises from the ground, and the world blurs at its edges.',
    days: [
      { name: 'The Sending', condition: 'A soft rain falls. Mist rises from the ground. The world is blurred.' },
      { name: 'The Far Road', condition: 'The wind picks up, blowing constantly in one direction.' },
      { name: 'The Empty Cradle', condition: 'The wind dies. Silence. The air is cold and still.' },
      { name: 'The Unfinished Song', condition: 'A faint hum fills the air, barely audible, like a song half-remembered.' },
    ],
  },
  {
    name: 'Apati',
    numeral: 'IV',
    whisper: 'Frost claims every surface, and colour drains from things.',
    days: [
      { name: 'The Hearth-Fires', condition: 'The temperature drops. Frost forms on every surface.' },
      { name: 'The Greying', condition: 'Colours drain from the world. Everything appears in shades of grey.' },
      { name: 'The Slumbering', condition: 'The world grows quiet. Animals hibernate. Plants wither.' },
      { name: 'The Still-Water', condition: 'The rivers stop flowing. Lakes become glassy and motionless.' },
    ],
  },
  {
    name: 'Paenitet',
    numeral: 'V',
    whisper: 'The ice cracks like breaking stone, and the ground softens to mire.',
    days: [
      { name: 'The Telling Stone', condition: 'The ice begins to crack. A sound like breaking stone echoes across the land.' },
      { name: 'The Broken Oath', condition: 'The ground softens. Mud and mire spread.' },
      { name: 'The Unraveling', condition: 'The first flowers wilt. Petals fall without wind.' },
      { name: 'The Forgotten Grave', condition: 'The last snow melts. The ground is bare and cold.' },
    ],
  },
  {
    name: 'Umyt',
    numeral: 'VI',
    whisper: 'The light turns golden, and something dares to bloom.',
    days: [
      { name: 'The Dawn-Promise', condition: 'The sun rises earlier. The light is warm and golden.' },
      { name: 'The First Blossom', condition: 'The first flowers bloom. The air is sweet with fragrance.' },
      { name: 'The Unbroken Line', condition: 'The birds return. Their songs fill the air.' },
      { name: 'The Kindling', condition: 'The air warms. The world feels alive again.' },
    ],
  },
  {
    name: 'Nirasha',
    numeral: 'VII',
    whisper: 'The nights grow long, and the world holds its breath.',
    days: [
      { name: 'The Night-Watch', condition: 'The sun sets earlier. The nights grow long and cold.' },
      { name: 'The Closing', condition: 'The leaves fall. The trees are bare.' },
      { name: 'The Silent Bell', condition: 'The wind dies. The world is silent.' },
      { name: 'The Final Breath', condition: 'The sky darkens. The world holds its breath.' },
    ],
  },
];

// THE UNBOUND DAYS — skipped heartbeats between the months.
export const unbound = {
  intro:
    'Between the months, and once more at the cycle\'s end, fall the Unbound Days: skipped heartbeats, moments when the world\'s pulse falters entirely. They are not measured, and they are not named. Time grows thin. The past bleeds into the present, and the boundary between the mortal realm and the Twilight Deeps wears through.',
  effectsTitle: 'What walks the unbound hours',
  effects: [
    'Time becomes unstable. The past bleeds into the present.',
    'The Fey walk openly. Spirits grow bold.',
    'Promises made on an Unbound Day bind in ways that transcend ordinary oaths.',
    'The Grey Rot recedes, but so does reality.',
  ],
  superstitionsTitle: 'What the cautious keep',
  superstitions: [
    'Never make a promise on an Unbound Day, the world will hold you to it forever.',
    'Never look directly at a stranger\'s face, for they might not be real.',
    'Always keep iron on your person.',
    'The Drümen seal their mines. The Free Cities empty their streets. Only the desperate walk the Unbound Days.',
  ],
};

export const greatUnbound =
  'Once every seven cycles, the final Unbound Day becomes the Great Unbound: the world\'s pulse stops entirely for an indeterminate span. The world holds its breath. The Fey walk openly. No one knows how long it will last, or what will remain when it ends.';

// ONE PULSE, MANY NAMES — the same heartbeat under regional names.
export const regionalNames = {
  prose:
    'For comparison, the Memory-Wardens have recorded the names other cultures give these days. The grey and silent first day of Banat is "The Mountain\'s Breath" in a Drümen hold, "The Silvering" to a Free City merchant, and simply "The Unnamed" in Valerium. One day, one heartbeat, many names. Banat\'s four days are kept here as an example of that correspondence; the full ledgers of each region will be kept with the region\'s own pages.',
  columns: [
    { key: 'universal', label: 'The Day Itself', emphasis: true },
    { key: 'valerium', label: 'Valerium' },
    { key: 'drumen', label: 'The Drümen' },
    { key: 'freeCities', label: 'The Free Cities' },
    { key: 'weepingHills', label: 'The Weeping Hills' },
  ],
  // SAMPLE LEDGER: only the four days of Banat, kept as one leaf from
  // the Wardens' correspondence work. When the region pages arrive, each
  // region's full calendar becomes its own ledger there (calendar/<Region>)
  // and this table stays small. The `group` field still drives LoreTable's
  // divider, so the single band labels whose days these are.
  rows: [
    { group: 'Month of Banat', universal: 'The Unnamed', valerium: 'The Unnamed', drumen: "The Mountain's Breath", freeCities: 'The Silvering', weepingHills: 'The First Stillness' },
    { universal: 'The Weeping Tide', valerium: 'The Weeping Tide', drumen: 'The Deep Surge', freeCities: 'The High Water', weepingHills: "The River's Grief" },
    { universal: 'The Hollow Crown', valerium: 'The Hollow Crown', drumen: 'The Long Dark', freeCities: 'The Long Watch', weepingHills: 'The Vigil' },
    { universal: 'The Final Harvest', valerium: 'The Final Harvest', drumen: 'The Last Grain', freeCities: 'The Closing Market', weepingHills: 'The Reaping' },
  ],
};

// SPEAKING OF TIME — dates, moons, and the counting of a life.
export const inPractice = {
  dateFormat: 'The [ordinal] moon of [Naming Day], in the month of [Month]',
  dateExamples: [
    '"The fourth moon of the Weeping Tide, in the month of Banat."',
    '"The third moon of the Unnamed" — the third period of waiting after the Naming Day called The Unnamed.',
  ],
  moons:
    'A moon is not a fixed unit but a space between heartbeats; a period of waiting, of silence, of listening. A month holds approximately forty-five moons, but the count breathes: in healthy times the silences are short, and in times of suffering they stretch. The Grey Rot lengthens every month it touches.',
  ageTitle: 'Counting a life',
  age: 'Age is counted in cycles completed since birth — "in their third cycle", "five cycles old". One cycle is what other worlds would call a year; the word does not exist here.',
  birthTitle: 'Outside the count',
  birth:
    'Birthdays are observed on the Naming Day closest to one\'s birth. Those born on Unbound Days are "outside the count", and are often viewed with superstition.',
};
