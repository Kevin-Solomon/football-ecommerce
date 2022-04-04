import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { ProductProvider } from './context/product/productContext';
import { AuthProvider } from './context/auth/authContext';
import { FilterProvider } from './context/filter/filterContext';
import { BrowserRouter } from 'react-router-dom';
import { WishlistProvider } from './context/wishlist/wishlistContext';
import { CartProvider } from './context/cart/cartContext';
import { OrderProvider } from './context/order/orderContext';
import { ToastProvider } from './context/toast/toastContext';
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <OrderProvider>
            <WishlistProvider>
              <CartProvider>
                <ProductProvider>
                  <FilterProvider>
                    <App />
                  </FilterProvider>
                </ProductProvider>
              </CartProvider>
            </WishlistProvider>
          </OrderProvider>
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
