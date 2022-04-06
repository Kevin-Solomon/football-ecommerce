import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/auth/authContext';
import { useCart } from '../../context/cart/cartContext';
import { useWishlist } from './../../context/wishlist/wishlistContext';
import './Card.css';
function LandscapeCard({ _id, price, name, qty, imgSrc }) {
  const { removeFromCart, decreaseQuantity, increaseQuantity } = useCart();
  const [disabled, setDisabled] = useState(false);
  const { addToWishlist } = useWishlist();
  const { token } = useAuth();
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
                decreaseQuantity(_id, qty, setDisabled, name);
              }}
            >
              -
            </button>
          </div>
          <button
            className="btn primary-btn"
            onClick={() => {
              removeFromCart(_id, name);
            }}
          >
            Remove from Cart
          </button>
          <button
            className="btn outline-primary"
            onClick={() => {
              addToWishlist(
                { _id, name, price, imgSrc },
                token.token,
                setDisabled
              );
              removeFromCart(_id, name);
            }}
          >
            Move To Wishlist
          </button>
        </div>
      </div>
    </>
  );
}

export default LandscapeCard;
