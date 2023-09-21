import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Clicker from './Clicker';
import Ref from "./Ref";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Clicker />
    <Ref />
  </React.StrictMode>
);

