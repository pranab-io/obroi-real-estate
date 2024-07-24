'use client';

import { createContext, useContext, useState } from 'react';

// Create context
const GlobalContext = createContext();

// create a provider
export function GlobalProvider({ children }) {
  const [unread, setUnread] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        unread,
        setUnread,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// create a custom hook to access context
export function useGlobalContext() {
  return useContext(GlobalContext);
}
