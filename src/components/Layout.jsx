import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useRegion } from '../context/RegionContext';

export default function Layout() {
  const location = useLocation();
  const mistRef = useRef(null);
  const { setActiveRegion } = useRegion();

  // SIDE EFFECT: runs on every route change
  useEffect(() => {
    const titles = {
      '/': 'Duskward Realms',
      '/world': 'The World',
      '/regions': 'Regions',
      '/bestiary': 'Bestiary',
    };
    document.title = titles[location.pathname] || 'Duskward Realms';

    // CENTRALIZED: derive the region from the path ("/world" -> "World").
    // Every future page updates the Footer with zero extra wiring.
    const region =
      location.pathname === '/'
        ? 'Home'
        : location.pathname.slice(1).replace(/^./, (c) => c.toUpperCase());
    setActiveRegion(region);

    // Instant scroll feels snappier for navigation than smooth
    window.scrollTo(0, 0);
  }, [location.pathname, setActiveRegion]);

  // SIDE EFFECT: gentle parallax drift on the mist (mount only)
  useEffect(() => {
    const onScroll = () => {
      if (mistRef.current) {
        mistRef.current.style.transform = `translateY(${window.scrollY * 0.1}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
    {/* FOREST-MIST: height is locked to the LARGE viewport (100lvh), which does NOT
        change when the browser URL bar hides/shows. Extra height + negative top give the parallax headroom. */}
    <div
      ref={mistRef}
      className="fixed -z-20 -top-48 left-0 h-[calc(100lvh_+_24rem)] w-full bg-mist bg-cover bg-center bg-no-repeat opacity-30 will-change-transform"
    />

      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 min-h-[85vh]">
        <div className="relative z-10">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}
