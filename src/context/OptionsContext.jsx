import React, { createContext, useState } from 'react';

const center = [49.8175, 15.47296];

export const OptionsContext = createContext(null);
export const OptionsProvider = ({ children }) => {
  const [options, setOptions] = useState({
    zoom: 8,
    center: center,
    markers: [],
    polylines: [],
    suggestions: [],
    radiuses: [],
  });

  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      {children}
    </OptionsContext.Provider>
  );
};
