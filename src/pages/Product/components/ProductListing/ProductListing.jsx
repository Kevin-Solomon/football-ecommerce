import React from 'react';
import Card from '../../../../components/Card/Card';
import { realMadrid, manchesterUnited } from '../../../../assets';
function ProductListing() {
  return (
    <>
      <main className="products-display">
        <h2>Showing All Products (showing 20 products)</h2>
        <div className="grid-products">
          <Card price={5000} imgSrc={realMadrid} name="Real Madrid Jersey" />
          <Card
            price={3000}
            imgSrc={manchesterUnited}
            name="Manchester United Jersey"
          />
        </div>
      </main>
    </>
  );
}

export default ProductListing;
