import React from 'react';
import LandscapeCard from '../../components/Card/LandscapeCard';
import Navbar from '../../components/Navbar/Navbar';
import './Cart.css';
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

          <div className="cart-summary">
            <h2>Price Details</h2>
            <div className="price">
              <p>Price</p>
              <p>₹4999</p>
            </div>
            <div className="discount">
              <p>Discount</p>
              <p>-₹1999</p>
            </div>
            <div className="delivery">
              <p>Delivery Charges</p>
              <p>₹499</p>
            </div>
            <div className="total-amount">
              <p>Total Amount</p>
              <p>₹3499</p>
            </div>
            <p>You wil save XXX on this order</p>
            <button className="btn primary-btn">Place Order</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Cart;
