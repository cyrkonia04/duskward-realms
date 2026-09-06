import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegionProvider } from './context/RegionContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import World from './pages/World';
import Regions from './pages/Regions';
import Bestiary from './pages/Bestiary';

function App() {
  return (
    <RegionProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/world" element={<World />} />
            <Route path="/regions" element={<Regions />} />
            <Route path="/bestiary" element={<Bestiary />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RegionProvider>
  );
}

export default App;