import { Link } from 'react-router-dom';
import PageHeader from '@/components/ui/PageHeader';
import Breadcrumb from '@/components/ui/Breadcrumb';
import LoreTable from '@/components/ui/LoreTable';
import { magicLede, magicSources, magicPractices, unbreakableRules } from '@/data/world/magic';

export default function Magic() {
  return (
    <div className="pt-4 sm:pt-8">
      <Breadcrumb items={[{ label: 'World', to: '/world' }, { label: 'Magic' }]} />

      <PageHeader title="The Nature of Magic" subtitle="How possibility leaks into the world" compact />

      <p className="max-w-2xl mx-auto font-body text-gothic-parchment/85 leading-relaxed">
        {magicLede}
      </p>

      <div className="max-w-3xl mx-auto space-y-10 mt-12">
        <div>
          <h2 className="font-heading text-gothic-gold text-xl mb-3">The Three Sources</h2>
          <LoreTable
            columns={[
              { key: 'name', label: 'Source', emphasis: true },
              { key: 'nature', label: 'Nature' },
              { key: 'origin', label: 'Origin' },
            ]}
            rows={magicSources}
          />
        </div>

        <div>
          <h2 className="font-heading text-gothic-gold text-xl mb-3">The Three Practices</h2>
          <LoreTable
            columns={[
              { key: 'name', label: 'Practice', emphasis: true },
              { key: 'action', label: 'Action' },
              { key: 'cost', label: 'Cost' },
            ]}
            rows={magicPractices}
          />
        </div>

        <div className="border border-gothic-gold/30 p-6">
          <h2 className="font-heading text-gothic-gold text-sm tracking-widest uppercase mb-4 text-center">
            The Unbreakable Rules
          </h2>
          <ul className="space-y-3">
            {unbreakableRules.map((rule) => (
              <li key={rule} className="flex gap-3 font-body text-gothic-parchment/80 text-sm leading-relaxed">
                <span className="text-gothic-bronze select-none" aria-hidden="true">†</span>
                {rule}
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-dashed border-gothic-gold/30 rounded-lg p-5 text-center">
          <h2 className="font-heading text-gothic-gold text-sm tracking-widest uppercase mb-2">
            Deeper Lore
          </h2>
          <p className="font-body text-gothic-parchment/60 text-xs italic">
            Famous practitioners, forbidden workings, and the price they paid — still unwritten.
          </p>
        </div>
      </div>

      <div className="text-center mt-10">
        <Link to="/world" className="font-body text-gothic-bronze hover:text-gothic-gold transition-colors text-sm">
          ← Back to The World
        </Link>
      </div>
    </div>
  );
}