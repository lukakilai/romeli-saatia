import { useState, createContext } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [activeCity, setActiveCity] = useState(1);

  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{ activeCity, setActiveCity, loading, setLoading }}
    >
      {children}
    </AppContext.Provider>
  );
}
