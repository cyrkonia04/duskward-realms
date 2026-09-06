import { Link } from 'react-router-dom';

const exploreData = [
  { name: 'Valerium', path: '/regions', desc: 'Flooded streets, gilded armor, and empty forums.' },
  { name: 'Drümen', path: '/regions', desc: 'The smell of hot metal and the heartbeat of the forges.' },
  { name: 'Free Cities', path: '/regions', desc: 'Salt wind, spices, and the desperate energy of denial.' },
  // TODO: point each at its own page later, e.g. '/regions/valerium'
];

export default function Home() {
  return (
    <div className="pt-8">
        <h1 className="text-[2.1rem] sm:text-4xl md:text-5xl text-balance text-center mb-6 leading-tight w-full">
          Welcome, traveler, to the <span className="text-gothic-purple">Duskward Realms</span> ✦
        </h1>

      {/* INTRO COLUMN — closes here now, before the cards */}
      <div className="max-w-3xl mx-auto space-y-6 font-body text-gothic-parchment/90 leading-relaxed text-lg">
        <p>
          This is a world where twilight reigns eternal, where sorrow and beauty intertwine, and where even the smallest spark of hope can shine against the gloom. Consider this your armchair by the fire—a safe haven to learn about the misty valleys, crumbling manors, and quiet heroes that call this place home.
        </p>
        <p>
          Within these pages, you'll uncover the secrets of this fading age. You'll walk the flooded streets of Aurelia, where the nobility's gilded armor is spotted with verdigris and their grand orations echo through empty forums. Descend into the mountain forges of the Drümen, where the air smells of hot metal and the rhythmic strike of hammer on anvil is the heartbeat of a people who refuse to break. Then there are the Free Cities, where the salt wind carries the scent of spices, sewage, and the desperate energy of a civilization that has chosen denial over despair.
        </p>
        <p>
          The story is always growing. New characters, new places, and new secrets will be added as they are discovered. Bookmark this page and check back often. I'd be delighted to have you along for the journey.
        </p>
        <p className="text-gothic-gold/70">
          Thank you for visiting.
        </p>
      </div>

      {/* EXPLORE CARDS — sibling of the intro column, so max-w-4xl applies */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative z-20 max-w-4xl mx-auto px-4">
        {exploreData.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="block bg-gothic-parchment/10 backdrop-blur-sm border border-gothic-gold/30 p-6 shadow-xl hover:border-gothic-purple/40 hover:bg-gothic-parchment/20 transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="font-heading text-gothic-gold text-lg mb-2">Explore {item.name}</h3>
            <p className="text-gothic-parchment/70 text-sm font-body leading-relaxed">{item.desc}</p>
          </Link>
        ))}
      </div>

      {/* CHANGELOG BOX */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 mt-8">
        <div className="border border-dashed border-gothic-gold/30 rounded-lg p-5">
          <h3 className="font-heading text-gothic-gold text-sm mb-2 tracking-widest uppercase">Recent Discoveries</h3>
          <p className="text-gothic-parchment/60 text-xs font-body italic">
            [Placeholder: Newest lore entry will be added here automatically soon.]
          </p>
        </div>
      </div>
    </div>
  );
}
