import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MouseTrail from './util/MouseTrail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MouseTrail/>
    <App />
  </React.StrictMode>
);

