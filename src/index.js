import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { OptionsProvider } from './context/OptionsContext';
import { ModalProvider } from './context/ModalContext';
import { AreaProvider } from './context/AreaContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OptionsProvider>
      <ModalProvider>
        <AreaProvider>
          <App />
        </AreaProvider>
      </ModalProvider>
    </OptionsProvider>
  </React.StrictMode>
);
