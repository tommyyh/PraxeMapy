import React, { createContext, useState } from 'react';

export const ModalContext = createContext(null);
export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    // Modals state
    editArea: false,
    editRadius: false,
    // Modal values
    area: {
      id: '',
      active: false,
      points: '',
      area: {},
    },
    radius: {
      id: '',
      selectedId: '',
      active: false,
      radius: {},
    },
  });

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};
