// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // 'react-dom/client'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // createRoot() en lugar de render()
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
