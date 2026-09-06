import { useState, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'World', path: '/world' },
  { name: 'Regions', path: '/regions' },
  { name: 'Bestiary', path: '/bestiary' },
];

// Shared active/inactive styling for desktop + mobile
const desktopClass = ({ isActive }) =>
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
          {/* LEFT: Logo — Link, not <a>, so no full reload */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center gap-2 font-heading text-2xl text-gothic-gold tracking-wider"
          >
            <span className="text-gothic-purple text-3xl">✦</span>
            <span className="hidden sm:inline">Duskward Realms</span>
          </Link>

          {/* CENTER: Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'} // otherwise "Home" matches every route
                className={desktopClass}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* RIGHT: Hamburger Button */}
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

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-gothic-surface border-t border-gothic-gold/30 pb-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `block px-6 py-3 transition-all border-b border-gothic-gold/10 ${
                    isActive
                      ? 'text-gothic-gold bg-gothic-purple/10'
                      : 'text-gothic-parchment hover:text-gothic-gold hover:bg-gothic-purple/10'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}