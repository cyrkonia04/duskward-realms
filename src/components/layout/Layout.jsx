import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import SecondaryNav from '@/components/layout/SecondaryNav';
import Footer from '@/components/layout/Footer';
import { useRegion } from '@/context/RegionContext';
import { rememberGoodPath } from '@/utils/navMemory';

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
  '/style-lab': 'The Style Lab',
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

  // LAST GOOD PATH: remember every path that renders, for the 404
  // page's "Return the way you came" (typed or edited URLs blindside
  // the router; see utils/navMemory.js). NotFound claims its own path
  // first, so a dead end is never remembered as a good page.
  useEffect(() => {
    rememberGoodPath(location.pathname);
  }, [location.pathname]);

  // SIDE EFFECT: gentle parallax drift on the mist (mount only).
  // BUG FIX: the mist layer sits 12rem above the viewport (-top-48) and
  // extends 24rem past its bottom edge, so it can afford exactly 12rem
  // (192px) of downward drift before its TOP edge would enter the frame.
  // On long pages scrollY*0.05 eventually exceeds that budget, which is
  // why the imageless background used to peek in from above. The cap
  // holds the drift inside the budget; past it the mist simply holds
  // still, which is invisible at 5% speed.
  const MIST_DRIFT_CAP = 192; // px — must match -top-48 (12rem)
  useEffect(() => {
    const onScroll = () => {
      if (mistRef.current) {
        const drift = Math.min(window.scrollY * 0.05, MIST_DRIFT_CAP);
        mistRef.current.style.transform = `translateY(${drift}px)`;
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
      {/* PAPER GRAIN — generated noise, not a photo (see .grain in index.css).
          TUNING: invisible? -> opacity-[0.10]. Site feels lighter/foggy? ->
          add mix-blend-soft-light, or drop opacity. Specks too fine/coarse?
          -> baseFrequency 1.1 / 0.6 in the .grain rule. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[60] grain opacity-[0.01]"
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