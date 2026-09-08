import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { RegionProvider } from './context/RegionContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import World from './pages/World';
import RacesHub from './pages/RacesHub';
import RaceDetail from './pages/RaceDetail';
import Magic from './pages/Magic';
import History from './pages/History';
import Calendar from './pages/Calendar';
import Regions from './pages/Regions';
import Bestiary from './pages/Bestiary';

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