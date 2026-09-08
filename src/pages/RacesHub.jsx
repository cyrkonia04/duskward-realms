import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Breadcrumb from '../components/Breadcrumb';
import { peoplesCategories } from '../data/peoples';

export default function RacesHub() {
  const indexable = peoplesCategories.filter((c) => c.peoples);

  return (
    <div className="pt-4 sm:pt-8">
      <Breadcrumb
        className="max-w-5xl"
        items={[{ label: 'World', to: '/world' }, { label: 'Peoples' }]}
      />

      <PageHeader title="The Peoples" subtitle="An index of those who dwell in the Duskward Realms" compact />

      <p className="max-w-2xl mx-auto text-center font-body text-gothic-parchment/85 leading-relaxed">
        From the brief-burning Humans to the alien Fey of the Twilight Deeps,
        every people of the realms is gathered here. Choose a name to begin.
      </p>

      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-[210px_1fr] gap-10">
        {/* RAIL: category jump links with counts (desktop only) */}
        <aside className="hidden md:block">
          <div className="sticky top-24">
            <p className="font-heading text-xs tracking-widest uppercase text-gothic-gold/60 mb-3">
              Categories
            </p>
            {indexable.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="block py-1.5 font-body text-sm text-gothic-parchment/60 hover:text-gothic-gold transition-colors"
              >
                {c.title} <span className="text-gothic-bronze/70">({c.peoples.length})</span>
              </a>
            ))}
          </div>
        </aside>

        {/* INDEX: rows, not cards — the "table of contents" signature */}
        <div>
          {peoplesCategories.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-28 mb-12">
              <h2 className="font-heading text-gothic-gold text-xl tracking-wide">
                {category.title}
              </h2>
              <div className="mt-1 mb-2 w-16 border-t border-gothic-gold/30" />

              {category.standalone ? (
                <p className="font-body text-gothic-parchment/80 leading-relaxed">
                  {category.standalone}
                  <span className="block mt-2 text-sm italic text-gothic-parchment/50">
                    (Individual entries for the cursed will be woven in time.)
                  </span>
                </p>
              ) : (
                <div>
                  {category.peoples.map((people) => (
                    <Link
                      key={people.slug}
                      to={`/world/races/${people.slug}`}
                      className="group block py-4 border-b border-dashed border-gothic-gold/20 hover:bg-gothic-parchment/5 px-2 -mx-2 transition-colors"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-heading text-lg text-gothic-gold group-hover:text-gothic-gold">
                          {people.name}
                        </h3>
                        <span className="font-body text-sm text-gothic-bronze opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          Read →
                        </span>
                      </div>
                      <p className="font-body text-sm text-gothic-parchment/60 leading-relaxed mt-1 line-clamp-2">
                        {people.description}
                      </p>
                      {people.subraces && (
                        <p className="font-body text-xs text-gothic-bronze/90 mt-1.5">
                          Includes: {people.subraces.map((s) => s.name).join(' · ')}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      <div className="text-center mt-4">
        <Link to="/world" className="font-body text-gothic-bronze hover:text-gothic-gold transition-colors text-sm">
          ← Back to The World
        </Link>
      </div>
    </div>
  );
}