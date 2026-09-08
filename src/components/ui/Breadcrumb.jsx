import { Link } from 'react-router-dom';

export default function Breadcrumb({ items, className = 'max-w-3xl' }) {
  return (
    <nav aria-label="Breadcrumb" className={`${className} mx-auto font-body text-xs mb-6 -mt-5 sm:mt-0`}>
      <ol className="flex items-center gap-2">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {isLast || !item.to ? (
                <span className="text-gothic-parchment/60">{item.label}</span>
              ) : (
                <Link to={item.to} className="text-gothic-bronze hover:text-gothic-gold transition-colors">
                  {item.label}
                </Link>
              )}
              {!isLast && <span className="text-gothic-gold/40" aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}