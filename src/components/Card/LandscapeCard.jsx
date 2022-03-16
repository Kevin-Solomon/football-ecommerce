import React from 'react';
import { manchesterUnited } from '../../assets';
import './Card.css';
function LandscapeCard() {
  return (
    <>
      <div className="card-landscape">
        <img src={manchesterUnited} />
        <div className="card-content">
          <h3>Manchester United</h3>
          <div className="price">
            <h2>₹2000</h2>
            <h3 className="text-muted line-strike">₹3000</h3>
          </div>

          <h3>50%</h3>
          <div className="quantity-container">
            <button className="increase-btn">+</button>
            <input className="quantity-input" type="number" />
            <button className="decrease-btn">-</button>
          </div>
          <button className="btn outline-primary">Remove from Cart</button>
          <button className="btn">Move To Wishlist</button>
        </div>
      </div>
    </>
  );
}

export default LandscapeCard;
