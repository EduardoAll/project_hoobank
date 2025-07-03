import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'animate.css';
import { ContactProvider } from './context/ContactContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactProvider>
      <App />
    </ContactProvider>
  </React.StrictMode>
);
