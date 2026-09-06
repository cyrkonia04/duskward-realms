import { useState, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'World', path: '/world' },
  { name: 'Regions', path: '/regions' },
  { name: 'Bestiary', path: '/bestiary' },
];

const desktopLinkClass = ({ isActive }) =>
  `font-body tracking-wide transition-colors duration-300 ${
    isActive ? 'text-gothic-gold' : 'text-gothic-parchment/70 hover:text-gothic-gold'
  }`;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-gothic-bg/90 backdrop-blur-md border-b border-gothic-gold/30 shadow-lg shadow-black/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LEFT: Logo — now visible on mobile too, just smaller */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center gap-2 font-heading text-xl sm:text-2xl text-gothic-gold tracking-wider"
          >
            <span className="text-gothic-purple text-2xl sm:text-3xl">✦</span>
            <span>Duskward Realms</span>
          </Link>

          {/* CENTER: Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={desktopLinkClass}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* RIGHT: Hamburger */}
          <button
            className="md:hidden text-gothic-gold focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu: full-width sibling of the bar, SAME surface + blur,
          so it reads as one continuous piece of UI */}
      {isMenuOpen && (
        <div className="md:hidden bg-gothic-bg/95 backdrop-blur-md border-t border-gothic-gold/30 shadow-lg shadow-black/20">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `block px-6 py-3 font-body tracking-wide border-b border-gothic-gold/10 last:border-b-0 transition-colors ${
                  isActive ? 'text-gothic-gold' : 'text-gothic-parchment/80'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
