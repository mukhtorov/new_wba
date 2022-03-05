import React, { createContext, useState } from 'react';

const StateController = createContext();
export default StateController;

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState({ isShowFunText: false, isDark: false });
  return (
    <StateController.Provider value={[state, setState]}>
      {children}
    </StateController.Provider>
  );
};
