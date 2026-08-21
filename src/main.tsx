import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import './styles/global.css'; // Make sure this points to your active CSS file

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);