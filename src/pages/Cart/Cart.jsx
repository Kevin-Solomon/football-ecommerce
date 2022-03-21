import React from 'react';
import LandscapeCard from '../../components/Card/LandscapeCard';
import Navbar from '../../components/Navbar/Navbar';
import './Cart.css';
import CartSummary from './components/CartSummary/CartSummary';
import { useCart } from './../../context/cart/cartContext';
function Cart() {
  const { cartState } = useCart();
  console.log(cartState.cart);
  return (
    <>
      <Navbar />
      <main>
        <div className="cart-container">
          <div className="cart-card-container">
            {cartState.cart.map(item => {
              return (
                <LandscapeCard
                  _id={item._id}
                  price={item.price}
                  name={item.name}
                  qty={item.qty}
                  imgSrc={item.imgSrc}
                />
              );
            })}
          </div>
          <CartSummary />
        </div>
      </main>
    </>
  );
}

export default Cart;
