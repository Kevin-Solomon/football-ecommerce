import React from 'react';
import { useCart } from './../../../../context/cart/cartContext';
import { getTotalPrice } from './../../../../util';
import { NoItemFound } from './../../../../components/NoItemFound/NoItemFound';
function CartSummary() {
  const { cartState } = useCart();
  return (
    <>
      {cartState.cart.length === 0 ? (
        <NoItemFound component="cart" />
      ) : (
        <div className="cart-summary">
          <h2>Price Details</h2>
          <div className="price">
            <p>Price</p>
            <p>₹ {getTotalPrice(cartState.cart)}</p>
          </div>

          <div className="delivery">
            <p>Delivery Charges</p>
            <p>₹ 499</p>
          </div>
          <div className="total-amount">
            <p>Total Amount</p>
            <p>₹ {499 + getTotalPrice(cartState.cart)}</p>
          </div>
          <button className="btn primary-btn">Place Order</button>
        </div>
      )}
    </>
  );
}

export default CartSummary;
