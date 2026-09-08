import { useParams, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { getPeopleBySlug } from '../data/peoples';
import Breadcrumb from '../components/Breadcrumb';
import { LinkedText } from '../components/WikiLink';

export default function RaceDetail() {
  const { raceSlug } = useParams();
  const people = getPeopleBySlug(raceSlug);

  if (!people) {
    return (
      <div className="pt-8 text-center">
        <h1 className="text-3xl mb-4">The mists obscure this people...</h1>
        <Link to="/world/races" className="font-body text-gothic-bronze underline">
          Return to the peoples index
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-4 sm:pt-8">
      <Breadcrumb items={[{ label: 'World', to: '/world' }, { label: 'Peoples', to: '/world/races' }, { label: people.name }]} />

      <PageHeader title={people.name} subtitle={people.categoryTitle} compact />

      <p className="max-w-2xl mx-auto font-body text-gothic-parchment/85 leading-relaxed">
        <LinkedText text={people.description} links={people.links ?? []} />
      </p>

      {people.subraces && (
        <div className="max-w-2xl mx-auto mt-8 border-t border-gothic-gold/20 pt-6 space-y-4">
          <h2 className="font-heading text-gothic-bronze text-sm tracking-widest uppercase text-center">
            Known Subraces
          </h2>
          {people.subraces.map((sub) => (
            <div key={sub.name}>
              <h3 className="font-heading text-gothic-gold text-lg">{sub.name}</h3>
              <p className="font-body text-gothic-parchment/75 text-sm leading-relaxed mt-1">
                {sub.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* FUTURE LORE: dashed = "unwritten", matching the Home changelog convention */}
      <div className="max-w-2xl mx-auto mt-10 border border-dashed border-gothic-gold/30 rounded-lg p-5 text-center">
        <h2 className="font-heading text-gothic-gold text-sm tracking-widest uppercase mb-2">
          Lore of the {people.name}
        </h2>
        <p className="font-body text-gothic-parchment/60 text-xs italic">
          The mists have not yet parted on this page. Deeper lore — culture,
          history, notable figures — will be woven here.
        </p>
      </div>

      <div className="text-center mt-8">
        <Link to="/world/races" className="font-body text-gothic-bronze hover:text-gothic-gold transition-colors text-sm">
          ← Back to all peoples
        </Link>
      </div>
    </div>
  );
}