import React, { useState, useEffect } from 'react';
import { manchesterUnited } from '../../assets';
import { useCart } from '../../context/cart/cartContext';
import './Card.css';
function LandscapeCard({ _id, price, name, qty, imgSrc }) {
  const [quantity, setQuantity] = useState(0);
  const { removeFromCart } = useCart();
  // useEffect(() => {
  //   setQuantity(qty);
  // }, []);
  return (
    <>
      <div className="card-landscape">
        <img src={imgSrc} />
        <div className="card-content">
          <h3>{name}</h3>
          <div className="price">
            <h2>{price}</h2>
          </div>

          <div className="quantity-container">
            <button className="increase-btn">+</button>
            <input value={qty} className="quantity-input" type="number" />
            <button className="decrease-btn">-</button>
          </div>
          <button
            className="btn outline-primary"
            onClick={() => removeFromCart(_id)}
          >
            Remove from Cart
          </button>
          <button className="btn">Move To Wishlist</button>
        </div>
      </div>
    </>
  );
}

export default LandscapeCard;
