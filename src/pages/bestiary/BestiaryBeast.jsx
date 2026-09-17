import { Link, useParams } from 'react-router-dom';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import OrnamentalDivider from '@/components/ui/OrnamentalDivider';
import EndOfRecord from '@/components/ui/EndOfRecord';
import RichText from '@/components/ui/RichText';
import NotFound from '@/pages/NotFound';
import { cabinets } from '@/data/world/bestiary';
import { beastByRoute } from '@/data/world/beasts';
import { tagIndex } from '@/data/world/bestiaryTags';

// THE RECORD PAGES — tier three of three. One beast, one file, one
// page. The record's sections render in the order the author wrote
// them; each block type maps to its own layout:
//
//   p      — running prose (RichText inline emphasis)
//   terms  — bold-led entries: abilities, weaknesses, variants
//   steps  — numbered procedure (the Pattern of Infestation)
//   list   — plain bulleted list (Common Forms)
//   quotes — folk sayings, italic, centered
//   aside  — a muted authorial note
//   refs   — cross-references, linked where the archive has a page
//
// The tag strip under the header prints the raw taxonomy ids (they
// are the machine layer); each chip is a tunnel back to the cabinet,
// sieved by that mark. Hovering a chip explains it.

function Block({ block }) {
  switch (block.type) {
    case 'p':
      return (
        <p className="font-body text-gothic-parchment/80 leading-relaxed max-w-3xl mx-auto mb-5">
          <RichText text={block.text} />
        </p>
      );
    case 'terms':
      return (
        <div className="max-w-3xl mx-auto space-y-6 mb-6">
          {block.items.map((item) => (
            <div key={item.term}>
              <h3 className="font-heading text-lg text-gothic-gold mb-1.5">{item.term}</h3>
              <p className="font-body text-sm text-gothic-parchment/75 leading-relaxed">
                <RichText text={item.text} />
              </p>
            </div>
          ))}
        </div>
      );
    case 'steps':
      return (
        <div className="max-w-3xl mx-auto mb-6">
          {block.label && (
            <h3 className="font-heading text-lg text-gothic-gold mb-4">{block.label}</h3>
          )}
          <ol className="space-y-5">
            {block.items.map((item, i) => (
              <li key={item.label ?? i} className="flex gap-4">
                <span
                  className="font-heading text-gothic-gold/70 text-base shrink-0 w-6 text-right"
                  aria-hidden="true"
                >
                  {i + 1}.
                </span>
                <div>
                  {item.label && (
                    <h4 className="font-body font-semibold text-gothic-parchment/90 text-sm mb-1">
                      {item.label}
                    </h4>
                  )}
                  <p className="font-body text-sm text-gothic-parchment/75 leading-relaxed">
                    <RichText text={item.text} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );
    case 'list':
      return (
        <div className="max-w-3xl mx-auto mb-6">
          {block.label && (
            <h3 className="font-heading text-lg text-gothic-gold mb-4">{block.label}</h3>
          )}
          <ul className="space-y-2.5">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="text-gothic-gold/60 text-xs leading-6 shrink-0"
                  aria-hidden="true"
                >
                  ✦
                </span>
                <p className="font-body text-sm text-gothic-parchment/75 leading-relaxed">
                  <RichText text={item} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      );
    case 'quotes':
      return (
        <div className="max-w-2xl mx-auto mb-6">
          {block.label && (
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gothic-bronze text-center mb-4">
              {block.label}
            </p>
          )}
          <div className="space-y-3">
            {block.items.map((quote) => (
              <p
                key={quote}
                className="font-body italic text-gothic-parchment/70 text-center leading-relaxed"
              >
                {quote}
              </p>
            ))}
          </div>
        </div>
      );
    case 'aside':
      return (
        <p className="max-w-2xl mx-auto mb-6 font-body italic text-sm text-gothic-parchment/55 text-center leading-relaxed">
          <RichText text={block.text} />
        </p>
      );
    case 'refs':
      return (
        <div className="max-w-3xl mx-auto space-y-6">
          {block.items.map((ref) => (
            <div key={ref.label}>
              <h3 className="font-heading text-lg text-gothic-gold mb-1.5">{ref.label}</h3>
              <p className="font-body text-sm text-gothic-parchment/75 leading-relaxed">
                <RichText text={ref.text} />
              </p>
              {ref.to && (
                <Link
                  to={ref.to}
                  className="inline-block mt-1.5 font-body text-xs text-gothic-bronze hover:text-gothic-gold transition-colors"
                >
                  {ref.toLabel} →
                </Link>
              )}
            </div>
          ))}
        </div>
      );
    default:
      // Unknown block: render nothing rather than crash the record.
      return null;
  }
}

export default function BestiaryBeast() {
  const { cabinetId, beastSlug } = useParams();
  const cabinet = cabinets.find((c) => c.slug === cabinetId);
  const beast = beastByRoute[`${cabinetId}/${beastSlug}`];

  if (!cabinet || !beast) {
    // Unknown cabinet or a record not yet written: the mists take it.
    return <NotFound />;
  }

  return (
    <div className="pt-4 sm:pt-8">
      <Breadcrumb
        className="max-w-5xl"
        items={[
          { label: 'Bestiary', to: '/bestiary' },
          { label: cabinet.title, to: `/bestiary/${cabinet.slug}` },
          { label: beast.name },
        ]}
      />

      <PageHeader title={beast.name} subtitle={`Known As: ${beast.knownAs}`} compact />

      {/* THE TAG STRIP — raw taxonomy ids; hover explains each */}
      <div className="max-w-3xl mx-auto mb-8 flex flex-wrap items-center justify-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gothic-bronze/80">
          Tags
        </span>
        {(beast.tags ?? []).map((tag) => {
          const info = tagIndex[tag];
          return (
            <Link
              key={tag}
              to={`/bestiary/${cabinet.slug}?tag=${encodeURIComponent(tag)}`}
              title={info ? `${info.groupLabel} — ${info.meaning}` : undefined}
              className="font-mono text-[11px] text-gothic-gold/85 border border-gothic-gold/25 bg-gothic-surface/50 px-2.5 py-1 rounded-sm hover:border-gothic-gold/60 hover:text-gothic-gold transition-colors"
            >
              {tag}
            </Link>
          );
        })}
      </div>

      <OrnamentalDivider variant="vesper" className="mb-12" />

      {beast.sections.map((section) => (
        <section key={section.id} className="mb-14">
          <SectionHeading id={section.id} title={section.title} />
          {section.blocks.map((block, i) => (
            <Block key={`${section.id}-${i}`} block={block} />
          ))}
        </section>
      ))}

      <EndOfRecord />

      <div className="text-center mt-14">
        <Link
          to={`/bestiary/${cabinet.slug}`}
          className="font-body text-gothic-bronze hover:text-gothic-gold transition-colors text-sm"
        >
          ← Back to {cabinet.title}
        </Link>
      </div>
    </div>
  );
}
