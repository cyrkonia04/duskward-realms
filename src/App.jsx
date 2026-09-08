import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from '@/components/layout/ErrorBoundary';
import { RegionProvider } from '@/context/RegionContext';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import World from '@/pages/world/World';
import RacesHub from '@/pages/world/races/RacesHub';
import RaceDetail from '@/pages/world/races/RaceDetail';
import Magic from '@/pages/world/Magic';
import History from '@/pages/world/History';
import Calendar from '@/pages/world/Calendar';
import Regions from '@/pages/regions/Regions';
import Bestiary from '@/pages/bestiary/Bestiary';

function App() {
  return (
    <ErrorBoundary>
      <RegionProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/world" element={<World />} />
              <Route path="/world/races" element={<RacesHub />} />
              <Route path="/world/races/:raceSlug" element={<RaceDetail />} />
              <Route path="/world/magic" element={<Magic />} />
              <Route path="/world/history" element={<History />} />
              <Route path="/world/calendar" element={<Calendar />} />
              <Route path="/regions" element={<Regions />} />
              <Route path="/bestiary" element={<Bestiary />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RegionProvider>
    </ErrorBoundary>
  );
}

export default App;