import React from 'react';
import LandscapeCard from '../../components/Card/LandscapeCard';
import Navbar from '../../components/Navbar/Navbar';
import './Cart.css';
import CartSummary from './components/CartSummary/CartSummary';
function Cart() {
  return (
    <>
      <Navbar />
      <main>
        <div className="cart-container">
          <div className="cart-card-container">
            <LandscapeCard />
            <LandscapeCard />
            <LandscapeCard />
          </div>
          <CartSummary />
        </div>
      </main>
    </>
  );
}

export default Cart;
