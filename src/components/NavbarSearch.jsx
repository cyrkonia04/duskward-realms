import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchIndex } from '../data/searchIndex';

// Fold diacritics + lowercase: "ü" -> "u", so "drumen" finds "The Drümen".
// GUARD: a search utility must never be able to crash the page —
// missing fields fail open as "no match", never as a render error.
const fold = (s) =>
  (s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

function matchScore(query, entry) {
  const q = fold(query).trim();
  if (!q) return -1;

  const name = fold(entry.name);
  if (name.startsWith(q)) return 100;

  const at = name.indexOf(q);
  if (at > -1) return 70 - Math.min(at, 40);

  const hay = `${name} ${fold(entry.hint)}`;
  const hi = hay.indexOf(q);
  if (hi > -1) return 50 - Math.min(hi, 30);

  // Subsequence fallback, lowest tier: "drmen" finds "The Drümen".
  let i = 0;
  for (const ch of hay) {
    if (ch === q[i]) i++;
    if (i === q.length) return 10;
  }
  return -1;
}

export default function NavbarSearch({ onNavigate, inputClassName = '' }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const boxRef = useRef(null);
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchIndex
      .map((e) => ({ ...e, score: matchScore(query, e) }))
      .filter((e) => e.score >= 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
  }, [query]);

  // SIDE EFFECT: close when clicking anywhere outside the search box
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  const go = (entry) => {
    if (!entry) return;
    setQuery('');
    setOpen(false);
    setActive(0);
    onNavigate?.();
    navigate(entry.to);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') { setOpen(false); return; }
    if (!results.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => (a + 1) % results.length); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => (a - 1 + results.length) % results.length); }
    if (e.key === 'Enter') { e.preventDefault(); go(results[active] ?? results[0]); }
  };

  return (
    <div ref={boxRef} className="relative">
      <form
        onSubmit={(e) => { e.preventDefault(); go(results[0]); }}
        role="search"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); setActive(0); }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder="Search the realms…"
          aria-label="Search the realms"
          className={`bg-gothic-surface/70 border border-gothic-gold/30 rounded-sm px-3 py-1.5 text-sm font-body text-gothic-parchment placeholder:text-gothic-parchment/40 focus:outline-none focus:border-gothic-gold/60 transition-all ${inputClassName}`}
        />
      </form>

      {open && query.trim() && (
        <div className="absolute left-0 right-0 top-full mt-2 md:left-auto md:right-0 md:w-72 bg-gothic-bg/95 backdrop-blur-md border border-gothic-gold/30 shadow-lg shadow-black/40 z-50">
          {results.length === 0 ? (
            <p className="px-4 py-3 font-body text-sm italic text-gothic-parchment/50">
              No whispers match " {query} ".
            </p>
          ) : (
            <ul role="listbox">
              {results.map((r, i) => (
                <li key={r.to + r.name} role="option" aria-selected={i === active}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(r)}
                    className={`w-full text-left px-4 py-2.5 flex items-center gap-2 transition-colors ${
                      i === active ? 'bg-gothic-purple/25' : ''
                    }`}
                  >
                    <span className={`text-xs ${i === active ? 'text-gothic-gold' : 'text-gothic-gold/30'}`} aria-hidden="true">✦</span>
                    <span className="font-body text-sm text-gothic-parchment">{r.name}</span>
                    <span className="ml-auto font-body text-[11px] text-gothic-bronze/80">{r.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}