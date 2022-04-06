import React from 'react';
import './Loading.css';
import './../Card/Card.css';
function Loading() {
  return (
    <div class="product-card">
      <div class="card-image-container">
        <img
          class="responsive-img skeletal skeletal-image"
          src="../../assets/real-madrid-21-22-home-jersey.jpg"
        />
        <i class="far fa-heart fa-lg"></i>
      </div>
      <h4 className="skeletal skeletal-text"> </h4>
      <h4 className="skeletal skeletal-price"></h4>
      <button class="btn skeletal skeletal-btn"></button>
    </div>
  );
}

export default Loading;
