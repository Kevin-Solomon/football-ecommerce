import React from 'react';

function ProductListing() {
  return (
    <>
      <main className="products-display">
        <h2>Showing All Products (showing 20 products)</h2>
        <div className="grid-products">
          <div className="product-card">
            <div className="card-image-container">
              <img
                className="responsive-img"
                src="../../assets/real-madrid-21-22-home-jersey.jpg"
              />
              <i className="far fa-heart fa-lg"></i>
            </div>
            <h4>Real Madrid Jersey</h4>
            <h4>₹2000</h4>
            <button className="btn">Add to cart</button>
          </div>
          <div className="product-card">
            <div className="card-image-container">
              <img
                className="responsive-img"
                src="../../assets/real-madrid-21-22-home-jersey.jpg"
              />
              <i className="far fa-heart fa-lg"></i>
            </div>
            <h4>Real Madrid Jersey</h4>
            <h4>₹2000</h4>
            <button className="btn">Add to cart</button>
          </div>
          <div className="product-card">
            <div className="card-image-container">
              <img
                className="responsive-img"
                src="../../assets/real-madrid-21-22-home-jersey.jpg"
              />
              <i className="far fa-heart fa-lg"></i>
            </div>
            <h4>Real Madrid Jersey</h4>
            <h4>₹2000</h4>
            <button className="btn">Add to cart</button>
          </div>
          <div className="product-card">
            <div className="card-image-container">
              <img
                className="responsive-img"
                src="../../assets/real-madrid-21-22-home-jersey.jpg"
              />
              <i className="far fa-heart fa-lg"></i>
            </div>
            <h4>Real Madrid Jersey</h4>
            <h4>₹2000</h4>
            <button className="btn">Add to cart</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductListing;
