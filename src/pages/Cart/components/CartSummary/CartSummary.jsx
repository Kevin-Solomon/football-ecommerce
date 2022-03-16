import React from 'react';

function CartSummary() {
  return (
    <>
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
    </>
  );
}

export default CartSummary;
