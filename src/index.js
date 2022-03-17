import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { ProductProvider } from './context/product/productContext';
import { AuthProvider } from './context/auth/authContext';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
