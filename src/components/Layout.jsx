import { useEffect, useRef } from 'react'; // Added useEffect, useRef
import { useLocation } from 'react-router-dom'; // Needed to know the current URL
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const location = useLocation();
  const mistRef = useRef(null); // ADVANCED: Ref for the background image

  // SIDE EFFECTS: Run every time the URL changes
  useEffect(() => {
    // 1. Update Browser Tab Title dynamically based on route
    const titles = {
      '/': 'Duskward Realms',
      '/world': 'The World',
      '/regions': 'Regions',
      '/bestiary': 'Bestiary'
    };
    document.title = titles[location.pathname] || 'Duskward Realms';
    
    // 2. Scroll to top smoothly when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* ADVANCED: useRef applied to the background div */}
      <div ref={mistRef} className="fixed inset-0 -z-20 bg-[url('images/misty-forest.jpg')] bg-cover bg-center bg-no-repeat opacity-30"></div>

      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[85vh]">
        <div className="relative z-10">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}