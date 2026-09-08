import { Link } from 'react-router-dom';
import PageHeader from '@/components/ui/PageHeader';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { festivals } from '@/data/world/calendar';

export default function Calendar() {
  return (
    <div className="pt-4 sm:pt-8">
      <Breadcrumb items={[{ label: 'World', to: '/world' }, { label: 'Calendar' }]} />

      <PageHeader title="The Calendar" subtitle="Measuring a fade" compact />

      <p className="max-w-2xl mx-auto text-center font-body text-gothic-parchment/85 leading-relaxed">
        Time is wounded — it cannot be healed, and perhaps it cannot be fully
        counted. Still, the peoples try: Valerian water-clocks, the forges'
        tallies, the Fey's elegant refusal of years. And twice a season, they
        stop counting altogether, and celebrate instead.
      </p>

      {/* FESTIVALS GRID */}
      <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mt-12">
        {festivals.map((festival) => (
          <div key={festival.name} className="bg-gothic-parchment/10 border border-gothic-gold/30 p-5">
            <p className="font-body text-xs uppercase tracking-widest text-gothic-bronze">{festival.when}</p>
            <h2 className="font-heading text-gothic-gold text-lg mt-1">{festival.name}</h2>
            <p
              className={`font-body text-sm leading-relaxed mt-2 ${
                festival.placeholder ? 'italic text-gothic-parchment/50' : 'text-gothic-parchment/75'
              }`}
            >
              {festival.blurb}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto border border-dashed border-gothic-gold/30 rounded-lg p-5 text-center mt-10">
        <h2 className="font-heading text-gothic-gold text-sm tracking-widest uppercase mb-2">
          How Time Is Counted
        </h2>
        <p className="font-body text-gothic-parchment/60 text-xs italic">
          The structure of the year — months, moons, and how the seasons shift
          beneath the Rot — is still unwritten.
        </p>
      </div>

      <div className="text-center mt-10">
        <Link to="/world" className="font-body text-gothic-bronze hover:text-gothic-gold transition-colors text-sm">
          ← Back to The World
        </Link>
      </div>
    </div>
  );
}