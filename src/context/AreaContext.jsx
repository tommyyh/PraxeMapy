import React, { createContext, useState } from 'react';
import { v4 } from 'uuid';

export const AreaContext = createContext(null);
export const AreaProvider = ({ children }) => {
  const [areas, setAreas] = useState([
    {
      id: v4(),
      title: 'Metro plocha 1',
      type: 'metro',
    },
    {
      id: v4(),
      title: 'Metro plocha 2',
      type: 'metro',
    },
    {
      id: v4(),
      title: 'Budova plocha',
      type: 'budova',
    },
    {
      id: v4(),
      title: 'Billboard',
      type: 'billboard',
    },
    {
      id: v4(),
      title: 'Billboard 2',
      type: 'billboard',
    },
    {
      id: v4(),
      title: 'Billboard 3',
      type: 'billboard',
    },
  ]);

  return (
    <AreaContext.Provider value={{ areas, setAreas }}>
      {children}
    </AreaContext.Provider>
  );
};
