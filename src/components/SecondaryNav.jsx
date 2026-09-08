import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// CURATED CHAPTERS, not a sitemap — detail pages live in their hubs.
const items = [
  { label: 'Overview', to: '/world', end: true },
  { label: 'Peoples', to: '/world/races' },
  { label: 'Magic', to: '/world/magic' },
  { label: 'History', to: '/world/history' },
  { label: 'Calendar', to: '/world/calendar' },
];

function useCurrentChapter() {
  const { pathname } = useLocation();
  return (
    items.find((i) => i.to && (i.end ? pathname === i.to : pathname.startsWith(i.to))) ??
    items[0]
  );
}

export default function SecondaryNav() {
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);
  const current = useCurrentChapter();
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  return (
    /* relative z-30 is the bug fix: without it, this strip's backdrop-blur
       creates a stacking context at z:auto and the mobile dropdown loses
       to main's z-10 */
    <div className="relative z-30 border-b border-gothic-gold/10 bg-gothic-bg/60 backdrop-blur-sm">
      {/* MOBILE: collapsed dropdown */}
      <div ref={boxRef} className="md:hidden relative px-4 py-2">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="w-full flex items-center justify-between border border-gothic-gold/30 bg-gothic-surface/60 px-3 py-2 font-body text-sm text-gothic-parchment/85"
        >
          <span>
            <span className="text-gothic-gold/50 mr-2">Chapter</span>
            {current.label}
          </span>
          <span
            className={`inline-block text-gothic-gold transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          >
            ▾
          </span>
        </button>

        {open && (
          <div className="absolute left-4 right-4 top-full mt-1 z-40 bg-gothic-bg/95 backdrop-blur-md border border-gothic-gold/30 shadow-lg shadow-black/40">
            {items.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `block px-4 py-2.5 text-sm font-body border-b border-gothic-gold/10 last:border-b-0 transition-colors ${
                    isActive ? 'text-gothic-gold' : 'text-gothic-parchment/80 hover:text-gothic-gold'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>

      {/* DESKTOP: horizontal strip */}
      <div className="hidden md:block">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto scrollbar-hide">
          {items.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `whitespace-nowrap px-3 py-2.5 text-sm font-body border-b-2 transition-colors ${
                  isActive
                    ? 'text-gothic-gold border-gothic-gold/70'
                    : 'text-gothic-parchment/60 border-transparent hover:text-gothic-gold'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}