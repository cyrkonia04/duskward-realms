import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/ui/PageHeader';
import useFetch from '@/hooks/useFetch';
import { formatDate } from '@/utils/formatDate';

const TYPES = ['feature', 'chapter', 'revision', 'milestone'];

const chipClass = (active) =>
  `font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 border transition-colors ${
    active
      ? 'border-gothic-gold/60 text-gothic-gold bg-gothic-gold/10'
      : 'border-gothic-gold/20 text-gothic-parchment/50 hover:text-gothic-gold hover:border-gothic-gold/40'
  }`;

export default function Discoveries() {
  const { status, data, error } = useFetch('/data/changelog.json');

  // DATABASE CONTROLS: plain useState here on purpose — Bestiary rebuilds
  // this exact toolbar with useReducer, so the two patterns can be compared.
  const [typeFilter, setTypeFilter] = useState('all');
  const [newestFirst, setNewestFirst] = useState(true);

  // Counts per type — computed once per data load, so chips stay honest.
  const counts = useMemo(() => {
    const c = { all: 0 };
    for (const t of TYPES) c[t] = 0;
    for (const e of data?.entries ?? []) {
      c.all += 1;
      if (c[e.type] !== undefined) c[e.type] += 1;
    }
    return c;
  }, [data]);

  // DERIVED: filter + sort in one memo. ISO dates compare correctly as strings.
  const entries = useMemo(() => {
    const all = data?.entries ?? [];
    const filtered = typeFilter === 'all' ? all : all.filter((e) => e.type === typeFilter);
    return [...filtered].sort((a, b) =>
      newestFirst ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)
    );
  }, [data, typeFilter, newestFirst]);

  return (
    <div className="pt-4 sm:pt-8">
      <PageHeader title="Recent Discoveries" subtitle="A chronicle of the realms' growth" compact />

      <p className="max-w-2xl mx-auto text-center font-body text-gothic-parchment/85 leading-relaxed mb-10">
        Every addition, revision, and repair to the archive. The mists part
        slowly, but they part.
      </p>

      {/* THE LEDGER: one solid panel — same shell in every state, so nothing jumps */}
      <div className="max-w-4xl mx-auto border border-gothic-gold/30 bg-gothic-surface shadow-xl shadow-black/30">
        {/* Path bar: the archive's "address" */}
        <div className="flex items-center justify-between gap-4 border-b border-gothic-gold/20 bg-gothic-bg/60 px-4 sm:px-5 py-2.5">
          <p className="font-mono text-[11px] text-gothic-bronze/90">duskward://chronicle</p>
          <p className="font-mono text-[11px] text-gothic-gold/50">
            {status === 'success' ? `${entries.length} record${entries.length === 1 ? '' : 's'}` : '…'}
          </p>
        </div>

        {status === 'loading' && (
          <p className="px-5 py-12 text-center font-body italic text-gothic-parchment/50 text-sm">
            Consulting the archives
            <span className="animate-blink text-gothic-gold/60" aria-hidden="true">▊</span>
          </p>
        )}

        {status === 'error' && (
          <div className="px-5 py-10 text-center">
            <p className="font-body italic text-gothic-parchment/50 text-sm">
              The archive is unreachable — the mists have taken it.
            </p>
            <p className="font-mono text-[10px] text-gothic-bronze/60 mt-3">{error?.message}</p>
          </div>
        )}

        {status === 'success' && (
          <>
            {/* Toolbar: type filter chips + sort toggle */}
            <div className="flex flex-wrap items-center gap-2 border-b border-gothic-gold/15 px-4 sm:px-5 py-3">
              {['all', ...TYPES].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTypeFilter(t)}
                  aria-pressed={typeFilter === t}
                  className={chipClass(typeFilter === t)}
                >
                  {t} ({counts[t]})
                </button>
              ))}

              <button
                type="button"
                onClick={() => setNewestFirst((v) => !v)}
                className="ml-auto font-mono text-[10px] uppercase tracking-widest text-gothic-bronze hover:text-gothic-gold transition-colors"
                aria-label={
                  newestFirst
                    ? 'Sorted newest first — switch to oldest first'
                    : 'Sorted oldest first — switch to newest first'
                }
              >
                {newestFirst ? '↓ newest' : '↑ oldest'}
              </button>
            </div>

            {/* Records */}
            {entries.length === 0 ? (
              <p className="px-5 py-12 text-center font-mono text-xs text-gothic-parchment/40">
                0 records match this query<span className="animate-blink" aria-hidden="true">_</span>
              </p>
            ) : (
              <div>
                {entries.map((entry) => (
                  <article
                    key={entry.id}
                    className="grid sm:grid-cols-[96px_88px_1fr] gap-x-4 gap-y-1 px-4 sm:px-5 py-4 border-b border-gothic-gold/10 last:border-b-0 odd:bg-gothic-parchment/[0.03] hover:bg-gothic-parchment/[0.06] transition-colors"
                  >
                    {/* sm:contents — on mobile this is a flex row (date + tag inline);
                        on desktop it dissolves and its children become grid columns */}
                    <div className="flex items-baseline gap-3 sm:contents">
                      <time
                        dateTime={entry.date}
                        className="font-mono text-[11px] text-gothic-bronze/90"
                      >
                        {formatDate(entry.date)}
                      </time>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-gothic-gold/50">
                        {entry.type === 'milestone' && '✦ '}
                        {entry.type}
                      </p>
                    </div>

                    <div className="min-w-0">
                      <h2 className="font-heading text-gothic-gold text-[15px] leading-snug">
                        {entry.title}
                      </h2>
                      <p className="font-body text-sm text-gothic-parchment/70 leading-relaxed mt-1">
                        {entry.summary}
                      </p>
                      {entry.links?.length > 0 && (
                        <p className="mt-1.5 space-x-4">
                          {entry.links.map((link) => (
                            <Link
                              key={link.to}
                              to={link.to}
                              className="font-body text-xs text-gothic-bronze hover:text-gothic-gold transition-colors"
                            >
                              {link.label} →
                            </Link>
                          ))}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}