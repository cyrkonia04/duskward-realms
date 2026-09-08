import { Link } from 'react-router-dom';

export default function WikiLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-gothic-bronze underline decoration-gothic-gold/40 decoration-dotted underline-offset-4 hover:text-gothic-gold hover:decoration-gothic-gold transition-colors"
    >
      {children}
    </Link>
  );
}

// Splits `text` on the link phrases and rebuilds it with WikiLinks spliced in.
export function LinkedText({ text, links = [] }) {
  if (!links.length) return text;
  const escaped = [...links]
  .sort((a, b) => b.text.length - a.text.length)
  .map((l) => l.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const parts = text.split(new RegExp(`(${escaped.join('|')})`, 'g'));
  return parts.map((part, i) => {
    const link = links.find((l) => l.text === part);
    return link ? <WikiLink key={i} to={link.to}>{part}</WikiLink> : part;
  });
}