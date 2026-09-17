import { Link, useParams, useSearchParams } from 'react-router-dom';
import PageHeader from '@/components/ui/PageHeader';
import Breadcrumb from '@/components/ui/Breadcrumb';
import OrnamentalDivider from '@/components/ui/OrnamentalDivider';
import EndOfRecord from '@/components/ui/EndOfRecord';
import NotFound from '@/pages/NotFound';
import { cabinets, cursedCrossLink } from '@/data/world/bestiary';
import { beastByRoute } from '@/data/world/beasts';
import { tagGroups, tagIndex } from '@/data/world/bestiaryTags';

// THE CABINET PAGES — tier two of three. A category page lists its
// records the way a shelf holds files: one row per creature, the name
// and known-as on the spine, the whisper beside it. A row whose entry
// carries a `page` field links to the creature's full record; other
// rows stay quiet until their records are written. Records kept
// elsewhere (the Peoples index, the Regions) point across instead.
//
// THE TAG SIEVE — the marks under each whisper are not decoration.
// Every row carries its taxonomy tags (the record's own where a record
// exists, the entry's provisional array until then), and the bar above
// the shelf turns them into a working index: select marks, and only
// the records that bear all of them remain. The sieve reads and writes
// the URL (?tag=origin:fey), so a sieved shelf can be linked from
// anywhere — including a record's own tag strip.
//
// Styling note: the wound rows deliberately wear the archive's neutral
// gold here. The purple (deeps) ledger treatment the author liked is
// parked for the future pages of specific wound-born beasts. See the
// note at the top of src/data/world/bestiary.js.

function TagChip({ tag, active, onClick }) {
  const info = tagIndex[tag];
  return (
    <button
      type="button"
      onClick={onClick}
      title={info ? `${info.groupLabel} — ${info.meaning}` : undefined}
      className={`font-mono text-[10px] px-2 py-0.5 rounded-sm border transition-colors ${
        active
          ? 'bg-gothic-gold/90 text-gothic-bg border-gothic-gold'
          : 'text-gothic-bronze/80 border-gothic-gold/20 bg-gothic-surface/40 hover:border-gothic-gold/50 hover:text-gothic-gold'
      }`}
    >
      {tag}
    </button>
  );
}

export default function BestiaryCabinet() {
  const { cabinetId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const cabinet = cabinets.find((c) => c.slug === cabinetId);

  if (!cabinet) {
    // Unknown cabinet: the mists take it, same as any lost road.
    return <NotFound />;
  }

  const isCursed = cabinet.slug === 'the-cursed';
  const activeTags = searchParams.getAll('tag');

  const toggleTag = (tag) => {
    const next = activeTags.includes(tag)
      ? activeTags.filter((t) => t !== tag)
      : [...activeTags, tag];
    setSearchParams(next.length ? { tag: next } : {}, { preventScrollReset: true });
  };

  // The tags a row shows: the record's own where a record exists, the
  // entry's provisional array until then (see bestiary.js).
  const tagsOf = (entry) => {
    const record = entry.page ? beastByRoute[`${cabinet.slug}/${entry.page}`] : null;
    return record?.tags ?? entry.tags ?? [];
  };

  const visible = cabinet.entries.filter((entry) =>
    activeTags.every((tag) => tagsOf(entry).includes(tag)),
  );

  // Only the marks that actually occur on this shelf are offered.
  const shelfTags = new Set(cabinet.entries.flatMap((entry) => tagsOf(entry)));
  const groups = tagGroups
    .map((group) => ({
      ...group,
      tags: group.tags.filter((t) => shelfTags.has(`${group.id}:${t.id}`)),
    }))
    .filter((group) => group.tags.length > 0);

  return (
    <div className="pt-4 sm:pt-8">
      <Breadcrumb
        className="max-w-5xl"
        items={[{ label: 'Bestiary', to: '/bestiary' }, { label: cabinet.title }]}
      />

      <PageHeader title={cabinet.title} subtitle={cabinet.lede} compact />

      <OrnamentalDivider variant="vesper" className="mb-10" />

      {/* THE TAG SIEVE — pick marks, the shelf narrows */}
      <div className="max-w-3xl mx-auto mb-10 border border-gothic-gold/20 bg-gothic-surface/30 p-5">
        <div className="flex items-baseline justify-between gap-4 mb-3.5">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gothic-bronze">
            Sift the shelf
          </p>
          <p className="font-mono text-[11px] text-gothic-bronze/80" aria-live="polite">
            {visible.length} of {cabinet.entries.length} records
          </p>
        </div>
        <div className="space-y-2.5">
          {groups.map((group) => (
            <div key={group.id} className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gothic-bronze/60 w-[4.75rem] shrink-0">
                {group.label}
              </span>
              {group.tags.map((t) => {
                const id = `${group.id}:${t.id}`;
                return (
                  <TagChip
                    key={id}
                    tag={id}
                    active={activeTags.includes(id)}
                    onClick={() => toggleTag(id)}
                  />
                );
              })}
            </div>
          ))}
        </div>
        {activeTags.length > 0 && (
          <button
            type="button"
            onClick={() => setSearchParams({}, { preventScrollReset: true })}
            className="mt-4 font-body text-xs text-gothic-bronze hover:text-gothic-gold transition-colors"
          >
            Loosen the sieve — show every record ×
          </button>
        )}
      </div>

      {/* THE SHELF — one row per record */}
      <div className="max-w-3xl mx-auto">
        {visible.map((entry) => {
          // A full record exists for this row? Then the spine is a
          // link and the row carries the record's own tags.
          const record = entry.page ? beastByRoute[`${cabinet.slug}/${entry.page}`] : null;
          const tags = tagsOf(entry);
          return (
            <div
              key={entry.name}
              className="grid sm:grid-cols-[220px_1fr] gap-x-8 gap-y-2 py-6 border-b border-gothic-gold/15 last:border-b-0"
            >
              <div>
                <h3 className="font-heading text-lg text-gothic-gold">
                  {record ? (
                    <Link
                      to={`/bestiary/${cabinet.slug}/${entry.page}`}
                      className="hover:text-gothic-gold underline decoration-gothic-gold/30 underline-offset-4"
                    >
                      {entry.name}
                    </Link>
                  ) : entry.to ? (
                    <Link
                      to={entry.to}
                      className="hover:text-gothic-gold underline decoration-gothic-gold/30 underline-offset-4"
                    >
                      {entry.name}
                    </Link>
                  ) : (
                    entry.name
                  )}
                </h3>
                {entry.knownAs && (
                  <p className="font-mono text-[11px] text-gothic-bronze/90 mt-1">{entry.knownAs}</p>
                )}
                {entry.site && (
                  <p className="font-body text-[10px] uppercase tracking-[0.25em] text-gothic-bronze/80 mt-1.5">
                    {entry.site}
                  </p>
                )}
              </div>
              <div className="pt-0.5">
                <p className="font-body text-sm text-gothic-parchment/75 leading-relaxed">
                  {entry.whisper}
                </p>
                {tags.length > 0 && (
                  <ul
                    className="mt-2 flex flex-wrap gap-x-1.5 gap-y-1"
                    aria-label={`${entry.name} taxonomy tags`}
                  >
                    {tags.map((tag) => (
                      <li key={tag}>
                        <TagChip
                          tag={tag}
                          active={activeTags.includes(tag)}
                          onClick={() => toggleTag(tag)}
                        />
                      </li>
                    ))}
                  </ul>
                )}
                {entry.to && entry.toLabel && (
                  <Link
                    to={entry.to}
                    className="inline-block mt-2 font-body text-xs text-gothic-bronze hover:text-gothic-gold transition-colors"
                  >
                    {entry.toLabel} →
                  </Link>
                )}
              </div>
            </div>
          );
        })}
        {visible.length === 0 && (
          <p className="py-12 text-center font-body italic text-sm text-gothic-parchment/50">
            No record on this shelf bears all of those marks.
          </p>
        )}
      </div>

      {/* The cursed are also a people: the threat record stays here, the
          tragedy lives in the Peoples index */}
      {isCursed && (
        <div className="max-w-2xl mx-auto mt-10 text-center border border-gothic-gold/25 bg-gothic-surface/40 p-6">
          <p className="font-body text-gothic-parchment/80 leading-relaxed">
            {cursedCrossLink.text}
          </p>
          <Link
            to={cursedCrossLink.to}
            className="mt-3 inline-block font-body text-sm text-gothic-bronze hover:text-gothic-gold transition-colors"
          >
            {cursedCrossLink.label} →
          </Link>
        </div>
      )}

      {/* The shelf is honest about its gaps: full records are still being written */}
      <p className="max-w-2xl mx-auto mt-12 text-center font-body italic text-sm text-gothic-parchment/50">
        (Full records for the other creatures will be woven into the archive in time.)
      </p>

      {/* The record closes, the way a file closes in the Hall of Whispers */}
      <EndOfRecord />

      <div className="text-center mt-14">
        <Link to="/bestiary" className="font-body text-gothic-bronze hover:text-gothic-gold transition-colors text-sm">
          ← Back to the Bestiary
        </Link>
      </div>
    </div>
  );
}
