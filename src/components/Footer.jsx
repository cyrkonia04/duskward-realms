import React, { memo } from 'react'; // PERFORMANCE: React.memo
import { useTheme } from '../context/ThemeContext'; // CONTEXT: Read global state

// PERFORMANCE: Wrapped in memo. This component will NEVER re-render unless its specific props/context change.
export default memo(function Footer() {
  const { activeRegion } = useTheme(); // CONTEXT: Read global state

  // DYNAMIC CONTENT: Changes based on what page the user is on
  const dynamicText = activeRegion === 'Home' 
    ? "The story is always growing..." 
    : `Currently exploring: ${activeRegion}`;

  return (
    <footer className="relative z-10 border-t border-gothic-gold/20 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="font-body italic text-gothic-gold/70 text-sm">
          "{dynamicText}"
        </p>
        <p className="font-body text-gothic-parchment/50 text-xs mt-2">
          Last updated: October 2023
        </p>
        <p className="font-body text-gothic-parchment/30 text-xs mt-4">
          Woven by Cyrko
        </p>
      </div>
    </footer>
  );
});