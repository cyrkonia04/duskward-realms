import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import SecondaryNav from './SecondaryNav';
import Footer from './Footer';
import { useRegion } from '../context/RegionContext';

const regionLabels = {
  '': 'Home',
  world: 'World',
  regions: 'Regions',
  bestiary: 'Bestiary',
  characters: 'Characters',
  stories: 'Stories',
};

export default function Layout() {
  const location = useLocation();
  const mistRef = useRef(null);
  const { setActiveRegion } = useRegion();

  useEffect(() => {
    // FIX: only the FIRST path segment counts, so /world/races/fey-touched
    // reads "World" — not the whole directory
    const top = location.pathname.split('/')[1] ?? '';
    const region = regionLabels[top] ?? (top.replace(/^./, (c) => c.toUpperCase()) || 'The Realms');
    setActiveRegion(region);

const titles = {
  '/': 'Duskward Realms',
  '/world': 'The World',
  '/world/races': 'The Peoples',
  '/world/magic': 'The Nature of Magic',
  '/world/history': 'History of the Realms',
  '/world/calendar': 'The Calendar',
  '/regions': 'Regions',
  '/bestiary': 'Bestiary',
};
    document.title = titles[location.pathname] ?? (region === 'Home' ? 'Duskward Realms' : `Duskward Realms · ${region}`);

    // If the URL carries a hash (e.g. from search), scroll to that section;
    // otherwise start at the top.
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView());
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash, setActiveRegion]);

  // SIDE EFFECT: gentle parallax drift on the mist (mount only)
  useEffect(() => {
    const onScroll = () => {
      if (mistRef.current) {
        mistRef.current.style.transform = `translateY(${window.scrollY * 0.05}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        ref={mistRef}
        className="fixed -z-20 -top-48 left-0 h-[calc(100lvh_+_24rem)] w-full bg-mist bg-cover bg-center bg-no-repeat opacity-30 will-change-transform"
      />

      <Navbar />

      {/* CHAPTER NAV: appears on every /world/* page */}
      {location.pathname.startsWith('/world') && <SecondaryNav />}

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 min-h-[85vh]">
        <div className="relative z-10">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}