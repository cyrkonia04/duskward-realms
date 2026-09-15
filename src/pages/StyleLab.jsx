import { Link } from 'react-router-dom';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeading from '@/components/ui/SectionHeading';
import OrnamentalDivider from '@/components/ui/OrnamentalDivider';

const dividerVariants = [
  {
    id: 'baseline',
    name: 'A — Baseline (current)',
    note: 'The existing divider. Shown first so every option is judged against what the site already does.',
  },
  {
    id: 'vesper',
    name: 'B — Vesper',
    note: 'A crescent cradling a spark — literally the dusk the Realms are named for. Quiet, thematic, reads clearly even at 16px.',
  },
  {
    id: 'reliquary',
    name: 'C — Reliquary',
    note: 'An outlined diamond holding a solid gem, flanked by two small shards. The most "illuminated manuscript" of the set.',
  },
  {
    id: 'shrine',
    name: 'D — Shrine',
    note: 'A tiny lancet arch — the gothic window shape — enshrining a gem. The most explicitly architectural option.',
  },
];

const veilStrengths = [
  {
    label: 'As saved (raw texture)',
    veilClass: null,
    note: 'The problem, on display: bright, solid, yellow — a daylight object in a twilight world.',
  },
  {
    label: 'Candlelit veil · 60%',
    // NOTE: literal class strings — Tailwind JIT cannot see runtime-built classes
    veilClass: 'bg-gothic-bg/60',
    note: 'The texture darkened under the site color. Still clearly parchment, but pushed into the same key as everything else.',
  },
  {
    label: 'Shadowed veil · 80%',
    veilClass: 'bg-gothic-bg/80',
    note: 'Barely-there parchment — a whisper of aged paper. Maximum blending, least contrast for long text.',
  },
];

const QUOTE = 'In a world growing numb, feeling anything deeply is a radical act.';

export default function StyleLab() {
  return (
    <div className="pt-4 sm:pt-8">
      <PageHeader
        title="The Style Lab"
        subtitle="A temporary workshop — design trials for the Realms"
        compact
      />

      <div className="max-w-2xl mx-auto border border-dashed border-gothic-gold/30 rounded-lg p-4 text-center">
        <p className="font-body text-gothic-parchment/60 text-xs italic leading-relaxed">
          This page is scaffolding for design decisions, not a lore page. It
          will be removed — or rebuilt as a proper styleguide — before launch.
          Nothing here is indexed by search.
        </p>
      </div>

      {/* ================= DIVIDER GALLERY ================= */}
      <section className="mt-14">
        <SectionHeading
          id="dividers"
          title="Ornamental Dividers"
          lede="Four candidates to replace the plain line-and-star rule under every heading. Judged in situ, over the mist, in the real fonts."
        />

        <div className="max-w-3xl mx-auto space-y-12 mt-12">
          {dividerVariants.map((v) => (
            <div key={v.id}>
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <h3 className="font-heading text-gothic-gold text-base tracking-wide">{v.name}</h3>
                <span className="font-mono text-[10px] text-gothic-bronze/70 shrink-0">
                  &lt;OrnamentalDivider variant="{v.id}" /&gt;
                </span>
              </div>
              <OrnamentalDivider variant={v.id} lineClass="w-24" />
              <p className="font-body text-gothic-parchment/60 text-sm leading-relaxed mt-4">
                {v.note}
              </p>
            </div>
          ))}
        </div>

        {/* IN CONTEXT — how the leading candidate behaves in a real page rhythm */}
        <div className="max-w-3xl mx-auto mt-16 border border-gothic-gold/20 p-6 sm:p-8">
          <p className="font-mono text-[10px] text-gothic-bronze/70 mb-6 text-center tracking-widest uppercase">
            Context test · Vesper in a live page section
          </p>
          <div className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl">A Chapter Heading</h3>
            <p className="font-body italic text-gothic-parchment/60 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
              This is how the divider sits beneath a real heading, with a lede
              line, before body text begins.
            </p>
            <OrnamentalDivider variant="vesper" className="mt-4" />
          </div>
          <p className="font-body text-gothic-parchment/80 text-sm leading-relaxed max-w-2xl mx-auto">
            The ornament should be felt rather than seen — a small ceremony at
            the end of each heading, the way a manuscript breaks its chapters
            with a flourish before the ink resumes. If it draws the eye away
            from the title above it, it is too loud; if it disappears entirely,
            it is too timid. Judge each candidate on that knife's edge.
          </p>
        </div>
      </section>

      {/* ================= PARCHMENT TRIALS ================= */}
      <section className="mt-20">
        <SectionHeading
          id="parchment"
          title="The Parchment Question"
          lede="You were right: raw, the texture is a daylight object — very solid, very yellow. The proposed fix is a veil of the site's own darkness over it, keeping the grain while drowning the yellow. All three cards below use the exact texture you saved."
        />

        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
          {veilStrengths.map((card) => (
            <div key={card.label}>
              <div
                className="relative h-56 border border-gothic-gold/30 overflow-hidden flex items-center justify-center p-6"
                style={{
                  backgroundImage: 'url(/images/parchment-texture.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {card.veilClass && <div className={`absolute inset-0 ${card.veilClass}`} />}
                <p
                  className={`relative font-body italic leading-relaxed text-center ${
                    card.veilClass ? 'text-gothic-parchment/90 text-sm sm:text-base' : 'text-[#4a3820] text-sm sm:text-base'
                  }`}
                >
                  “{QUOTE}”
                </p>
              </div>
              <h3 className="font-heading text-gothic-gold text-sm tracking-wide mt-3">{card.label}</h3>
              <p className="font-body text-gothic-parchment/60 text-xs leading-relaxed mt-1.5">
                {card.note}
              </p>
            </div>
          ))}
        </div>

        <p className="max-w-2xl mx-auto font-body text-gothic-parchment/60 text-sm leading-relaxed text-center mt-8">
          My take: if we use it at all, the candlelit veil is the balance
          point — visibly parchment, no longer yellow. But if it still feels
          like a guest at the funeral, we retire the texture with no hard
          feelings. The site doesn't need it.
        </p>
      </section>

      <div className="text-center mt-16">
        <Link to="/" className="font-body text-gothic-bronze hover:text-gothic-gold transition-colors text-sm">
          ← Back to the fire
        </Link>
      </div>
    </div>
  );
}
