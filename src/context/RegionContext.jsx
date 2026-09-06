import { createContext, useContext, useState, useMemo } from 'react';

const RegionContext = createContext();

export function RegionProvider({ children }) {
  const [activeRegion, setActiveRegion] = useState('Home');

  // PERFORMANCE: memoized so consumers only re-render when activeRegion actually changes
  const value = useMemo(
    () => ({ activeRegion, setActiveRegion }),
    [activeRegion]
  );

  return (
    <RegionContext.Provider value={value}>
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  return useContext(RegionContext);
}