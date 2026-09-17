import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from '@/components/layout/ErrorBoundary';
import { RegionProvider } from '@/context/RegionContext';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Discoveries from '@/pages/Discoveries';
import World from '@/pages/world/World';
import RacesHub from '@/pages/world/races/RacesHub';
import RaceDetail from '@/pages/world/races/RaceDetail';
import Magic from '@/pages/world/Magic';
import History from '@/pages/world/History';
import Calendar from '@/pages/world/Calendar';
import Regions from '@/pages/regions/Regions';
import Bestiary from '@/pages/bestiary/Bestiary';
import BestiaryCabinet from '@/pages/bestiary/BestiaryCabinet';
import BestiaryBeast from '@/pages/bestiary/BestiaryBeast';
import NotFound from '@/pages/NotFound';
import StyleLab from '@/pages/StyleLab';

function App() {
  return (
    <ErrorBoundary>
      <RegionProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/discoveries" element={<Discoveries />} />
              <Route path="/world" element={<World />} />
              <Route path="/world/races" element={<RacesHub />} />
              <Route path="/world/races/:raceSlug" element={<RaceDetail />} />
              <Route path="/world/magic" element={<Magic />} />
              <Route path="/world/history" element={<History />} />
              <Route path="/world/calendar" element={<Calendar />} />
              <Route path="/regions" element={<Regions />} />
              <Route path="/bestiary" element={<Bestiary />} />
              {/* TIER TWO: each cabinet is a hub of its own category */}
              <Route path="/bestiary/:cabinetId" element={<BestiaryCabinet />} />
              {/* TIER THREE: each creature's full record page */}
              <Route path="/bestiary/:cabinetId/:beastSlug" element={<BestiaryBeast />} />
              {/* WORKSHOP: design-trial page — remove before launch */}
              <Route path="/style-lab" element={<StyleLab />} />
              {/* CATCH-ALL: unknown roads end in the mists */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RegionProvider>
    </ErrorBoundary>
  );
}

export default App;