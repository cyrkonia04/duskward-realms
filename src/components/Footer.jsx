import { useRegion } from '../context/RegionContext';

export default function Footer() {
  const { activeRegion } = useRegion();

  const dynamicText =
    activeRegion === 'Home'
      ? 'The story is always growing...'
      : `Currently exploring: ${activeRegion}`;

  return (
    <footer className="relative z-10 border-t border-gothic-gold/20 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="font-body italic text-gothic-gold/70 text-sm">
          "{dynamicText}"
        </p>
        <p className="font-body text-gothic-parchment/50 text-xs mt-2">
          Last updated: September 2026
        </p>
        <p className="font-body text-gothic-parchment/30 text-xs mt-4">
          Woven by Cyrko
        </p>
      </div>
    </footer>
  );
}