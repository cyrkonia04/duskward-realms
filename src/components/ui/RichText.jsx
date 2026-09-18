// RICH INLINE TEXT — the beast records are stored as plain strings that
// carry the author's own markers (**bold**, *italic*, [[wiki-links]]).
// This component splits on those markers and renders emphasis and
// links, leaving every other character untouched: a string in, the
// same words out.
//
// Design rules:
// - No HTML parsing, no dangerouslySetInnerHTML — the split produces
//   plain text nodes, so lore text can never inject markup.
// - Unknown/stray asterisks pass through as literal characters.
// - **bold** is RESERVED for labels and mini-headings in running text
//   ("Threat Level:"); it wears the archive's gold.
// - [[target]] / [[target|display]] is the rabbit-hole marker: a bold
//   reference to another entry. Targets resolve in two steps:
//     1. a path ("/world#wounding") links straight to that page;
//     2. a bare slug resolves through the beast registry and links to
//        the record at /bestiary/<cabinet>/<slug>.
//   A slug whose record is not written yet stays bold (in the link's
//   bronze) with no link: the rabbit hole is dug, the tunnel opens
//   the day the record lands. Planned slugs so far: bogarts, sighs,
//   drowners, reflectors, blight-sworn.
// - Self-references never link; an entry does not rabbit-hole into
//   itself.

import { Link } from 'react-router-dom';
import { beastByRoute } from '@/data/world/beasts';

const TOKEN = /(\[\[[^\]]+\]\]|\*\*[^*]+\*\*|\*[^*]+\*)/g;

// slug -> { route: 'cabinet/slug', name } — one step from a bare
// [[slug]] to its record's address.
const beastBySlug = Object.fromEntries(
  Object.entries(beastByRoute).map(([route, beast]) => [
    beast.slug,
    { route, name: beast.name },
  ]),
);

const linkClass =
  'text-gothic-bronze underline decoration-gothic-gold/40 decoration-dotted underline-offset-4 hover:text-gothic-gold hover:decoration-gothic-gold transition-colors';

function WikiRef({ target, display }) {
  const isPath = target.startsWith('/');
  const resolved = isPath ? { to: target } : beastBySlug[target];
  const to = resolved ? resolved.to ?? `/bestiary/${resolved.route}` : null;
  const text = display ?? (isPath ? target : resolved?.name ?? target);

  if (!to) {
    // A record not yet written: bold in bronze, no tunnel yet.
    return (
      <strong className="font-semibold text-gothic-bronze/90" title="This record is not yet written.">
        {text}
      </strong>
    );
  }
  return (
    <strong className="font-semibold">
      <Link to={to} className={linkClass}>
        {text}
      </Link>
    </strong>
  );
}

export default function RichText({ text }) {
  if (!text) return null;
  const parts = text.split(TOKEN).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('[[') && part.endsWith(']]') && part.length > 4) {
          const [rawTarget, rawDisplay] = part.slice(2, -2).split('|');
          const target = rawTarget.trim();
          const display = rawDisplay?.trim() || null;
          return <WikiRef key={i} target={target} display={display} />;
        }
        if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
          return (
            <strong key={i} className="text-gothic-gold font-semibold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
