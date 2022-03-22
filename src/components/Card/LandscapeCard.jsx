import React, { useState, useEffect } from 'react';
import { manchesterUnited } from '../../assets';
import { useCart } from '../../context/cart/cartContext';
import './Card.css';
function LandscapeCard({ _id, price, name, qty, imgSrc }) {
  const { removeFromCart, decreaseQuantity, increaseQuantity } = useCart();
  const [disabled, setDisabled] = useState(false);
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
            <button
              className="increase-btn"
              onClick={() => increaseQuantity(_id)}
            >
              +
            </button>
            <input value={qty} className="quantity-input" type="number" />
            <button
              disabled={disabled}
              className="decrease-btn"
              onClick={() => {
                setDisabled(true);
                decreaseQuantity(_id, qty, setDisabled);
              }}
            >
              -
            </button>
          </div>
          <button
            className="btn primary-btn"
            onClick={() => removeFromCart(_id)}
          >
            Remove from Cart
          </button>
          <button className="btn outline-primary">Move To Wishlist</button>
        </div>
      </div>
    </>
  );
}

export default LandscapeCard;
