import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { ProductProvider } from './context/product/productContext';
import { AuthProvider } from './context/auth/authContext';
import { FilterProvider } from './context/filter/filterContext';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <FilterProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </FilterProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
