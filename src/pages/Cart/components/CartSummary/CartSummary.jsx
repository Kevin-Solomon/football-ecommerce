import React from 'react';
import { useCart } from './../../../../context/cart/cartContext';
import { getTotalPrice } from './../../../../util';
import { NoItemFound } from './../../../../components/NoItemFound/NoItemFound';
import Razorpay from 'razorpay';
import { useAuth } from '../../../../context/auth/authContext';
function CartSummary() {
  const { token } = useAuth();
  async function loadSdk() {
    return new Promise(resolve => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        console.log('loaded');
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function payHandler() {
    const response = await loadSdk();
    if (!response) return alert('Something went wrong with sdk');
    var options = {
      key_id: 'rzp_test_7EiY4hDu9fMvM7',
      key: 'rzp_test_7EiY4hDu9fMvM7', // Enter the Key ID generated from the Dashboard
      key_secret: 'cbxlj9Iw814xs1FDZsh9RWmi',
      amount: (499 + getTotalPrice(cartState.cart)) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'FootballHQ',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: `${token.user.firstName} ${token.user.lastName}`, //user details will be provided here.
        email: token.user.email,
        contact: '9999999999',
      },
      theme: {
        color: '#3399cc',
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
    e.preventDefault();
  }

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
          <button
            className="btn primary-btn"
            onClick={() => {
              payHandler();
            }}
          >
            Place Order
          </button>
        </div>
      )}
    </>
  );
}

export default CartSummary;
