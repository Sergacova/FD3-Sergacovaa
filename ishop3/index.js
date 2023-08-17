import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './src/data/App.jsx';

const productsArr = require('./src/data/products.json');
const shopName = 'ISHOP3';

ReactDOM.render(
  <React.StrictMode>
    <App shopName={shopName} productsArr={productsArr} />
  </React.StrictMode>,
  document.getElementById('root')
);

