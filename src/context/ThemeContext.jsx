import { createContext, useContext, useState } from 'react';

// Create the Context
const ThemeContext = createContext();

// The Provider component (We wrap our App in this)
export function ThemeProvider({ children }) {
  // STATE: Holds data relevant to the whole site
  const [activeRegion, setActiveRegion] = useState('Home');
  
  return (
    <ThemeContext.Provider value={{ activeRegion, setActiveRegion }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook to easily access the context
export function useTheme() {
  return useContext(ThemeContext);
}