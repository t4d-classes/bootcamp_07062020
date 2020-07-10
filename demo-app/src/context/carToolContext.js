import React, { createContext, useContext } from 'react';

import { useCarToolStore } from '../hooks/useCarToolStore';

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'red', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'blue', price: 120000 },
  { id: 3, make: 'Nissan', model: 'Pathfinder', year: 2018, color: 'red', price: 40000 },
  { id: 4, make: 'Chevrolet', model: 'Volt', year: 2017, color: 'green', price: 50000 },
];

const carToolContext = createContext(null);

// pass data to the context
export const CarToolProvider = ({ children }) => {

  const carToolStore = useCarToolStore(carList);

  return <carToolContext.Provider value={carToolStore}>
    {children}
  </carToolContext.Provider>;

}

// retrieve data from the context
export const useCarToolContext = () => {
  // carToolContext.Consumer
  return useContext(carToolContext);
};
