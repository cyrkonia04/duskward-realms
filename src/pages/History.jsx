import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Breadcrumb from '../components/Breadcrumb';
import { eras } from '../data/history';

export default function History() {
  return (
    <div className="pt-4 sm:pt-8">
      <Breadcrumb items={[{ label: 'World', to: '/world' }, { label: 'History' }]} />

      <PageHeader title="History of the Realms" subtitle="What the fade remembers" compact />

      <p className="max-w-2xl mx-auto text-center font-body text-gothic-parchment/85 leading-relaxed">
        The realms keep their history unevenly — carved in stone, sung in forges,
        hoarded by the Fey. What follows is the spine of the record: the eras
        every story in the Duskward Realms stands upon.
      </p>

      {/* TIMELINE SPINE */}
      <div className="relative max-w-2xl mx-auto mt-14">
        <div className="absolute left-[7px] top-1 bottom-1 w-px bg-gothic-gold/30" aria-hidden="true" />

        {eras.map((era) => (
          <article key={era.id} id={era.id} className="relative pl-10 pb-12 last:pb-2 scroll-mt-28">
            <span
              className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-gothic-gold/60 bg-gothic-bg"
              aria-hidden="true"
            >
              <span className="h-[5px] w-[5px] rounded-full bg-gothic-gold/70" />
            </span>

            <p className="font-body text-xs uppercase tracking-widest text-gothic-bronze">{era.span}</p>
            <h2 className="font-heading text-gothic-gold text-xl mt-1">{era.name}</h2>
            <p
              className={`font-body text-sm leading-relaxed mt-2 ${
                era.placeholder ? 'italic text-gothic-parchment/50' : 'text-gothic-parchment/75'
              }`}
            >
              {era.summary}
            </p>
          </article>
        ))}
      </div>

      <div className="max-w-2xl mx-auto border border-dashed border-gothic-gold/30 rounded-lg p-5 text-center mt-4">
        <h2 className="font-heading text-gothic-gold text-sm tracking-widest uppercase mb-2">
          Deeper Histories
        </h2>
        <p className="font-body text-gothic-parchment/60 text-xs italic">
          Wars, pacts, and turning points will be woven here. Notable figures
          will live in the Characters index and appear throughout as linked names.
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