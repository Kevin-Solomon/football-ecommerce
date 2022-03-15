import React from 'react';

function ProductListing() {
  return (
    <>
      <main class="products-display">
        <h2>Showing All Products (showing 20 products)</h2>
        <div class="grid-products">
          <div class="product-card">
            <div class="card-image-container">
              <img
                class="responsive-img"
                src="../../assets/real-madrid-21-22-home-jersey.jpg"
              />
              <i class="far fa-heart fa-lg"></i>
            </div>
            <h4>Real Madrid Jersey</h4>
            <h4>₹2000</h4>
            <button class="btn">Add to cart</button>
          </div>
          <div class="product-card">
            <div class="card-image-container">
              <img
                class="responsive-img"
                src="../../assets/real-madrid-21-22-home-jersey.jpg"
              />
              <i class="far fa-heart fa-lg"></i>
            </div>
            <h4>Real Madrid Jersey</h4>
            <h4>₹2000</h4>
            <button class="btn">Add to cart</button>
          </div>
          <div class="product-card">
            <div class="card-image-container">
              <img
                class="responsive-img"
                src="../../assets/real-madrid-21-22-home-jersey.jpg"
              />
              <i class="far fa-heart fa-lg"></i>
            </div>
            <h4>Real Madrid Jersey</h4>
            <h4>₹2000</h4>
            <button class="btn">Add to cart</button>
          </div>
          <div class="product-card">
            <div class="card-image-container">
              <img
                class="responsive-img"
                src="../../assets/real-madrid-21-22-home-jersey.jpg"
              />
              <i class="far fa-heart fa-lg"></i>
            </div>
            <h4>Real Madrid Jersey</h4>
            <h4>₹2000</h4>
            <button class="btn">Add to cart</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductListing;
