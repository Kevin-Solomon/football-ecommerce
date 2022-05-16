import React from 'react';
import { useCart } from './../../../../context/cart/cartContext';
import { getTotalPrice } from './../../../../util';
import { NoItemFound } from './../../../../components/NoItemFound/NoItemFound';
import Razorpay from 'razorpay';
import { useAuth } from '../../../../context/auth/authContext';
import { useOrder } from '../../../../context/order/orderContext';
import axios from 'axios';
function CartSummary() {
  const { token } = useAuth();
  const { orders, setOrders } = useOrder();
  const { cartState, cartDispatch } = useCart();
  console.log(cartState);
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
      key: 'rzp_test_7EiY4hDu9fMvM7',
      key_secret: 'cbxlj9Iw814xs1FDZsh9RWmi',
      amount: (499 + getTotalPrice(cartState.cart)) * 100,
      currency: 'INR',
      name: 'FootballHQ',
      description: 'Purchase',
      image: 'https://example.com/your_logo',

      handler: function (response) {
        alert(response.razorpay_payment_id);
        setOrders(prevOrder => {
          return [
            ...prevOrder,
            {
              orderId: response.razorpay_payment_id,
              orderedItems: cartState.cart,
              timestamp: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`,
            },
          ];
        });
        async function removeAllItems() {
          try {
            console.log('in cart remove');
            const response = await axios({
              method: 'POST',
              url: '/api/user/remove/cart',
              headers: { authorization: token.token },
            });
            console.log(response);
          } catch (err) {
            console.log('in cart remove,dasda');
            console.error(err.response);
          }
        }
        removeAllItems();
        cartDispatch({ type: 'CHECKOUT' });
      },
      prefill: {
        name: `${token.user.firstName} ${token.user.lastName}`,
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
    rzp1.on('payment.failed', function (response) {
      alert('Something went wrong', response.error.code);
    });
  }

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
