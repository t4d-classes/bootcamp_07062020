import React, { createContext, useContext } from 'react';

import { useColorToolStore } from '../hooks/useColorToolStore';

const colorList = [
  { id: 1, name: 'aquamarine', hexcode: '6BCAE2' },
  { id: 2, name: 'neon pink', hexcode: 'FF6EC7' },
  { id: 3, name: 'black', hexcode: '000000' },
  { id: 4, name: 'blue', hexcode: '0000FF' },
];

const colorToolContext = createContext(null);

// pass data to the context
export const ColorToolProvider = ({ children }) => {

  const colorToolStore = useColorToolStore(colorList);

  return <colorToolContext.Provider value={colorToolStore}>
    {children}
  </colorToolContext.Provider>;

}

// retrieve data from the context
export const useColorToolContext = () => {
  return useContext(colorToolContext);
};
