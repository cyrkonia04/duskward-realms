import { Link } from 'react-router-dom';

export default function SectionHeading({ id, title, lede, linkTo, linkLabel }) {
  return (
    <div id={id} className="scroll-mt-24 text-center mb-8">
      <h2 className="text-2xl sm:text-3xl">{title}</h2>
      {lede && (
        <p className="font-body italic text-gothic-parchment/60 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
          {lede}
        </p>
      )}
      <div className="mx-auto mt-4 flex items-center justify-center gap-2">
        <span className="block w-16 border-t border-gothic-gold/40" />
        <span className="text-gothic-gold/60 text-xs" aria-hidden="true">✦</span>
        <span className="block w-16 border-t border-gothic-gold/40" />
      </div>
      {linkTo && (
        <Link
          to={linkTo}
          className="mt-3 inline-block font-body text-sm text-gothic-bronze hover:text-gothic-gold transition-colors"
        >
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}