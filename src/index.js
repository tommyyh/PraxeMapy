import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { OptionsProvider } from './context/OptionsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OptionsProvider>
      <App />
    </OptionsProvider>
  </React.StrictMode>
);
