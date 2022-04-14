import React, { createContext, useState } from 'react';

const ModeContext = createContext();

export default ModeContext;

export const StateMode = ({ children }) => {
  const [mode, setMode] = useState({
    fun: JSON.parse(localStorage.getItem('fun')),
    darkMode: JSON.parse(localStorage.getItem('dark')),
  });
  return (
    <ModeContext.Provider value={[mode, setMode]}>
      {children}
    </ModeContext.Provider>
  );
};
