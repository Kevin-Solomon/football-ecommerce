import React from 'react';
import Card from '../../../../components/Card/Card';
import { realMadrid, manchesterUnited } from '../../../../assets';
function RecommendProduct() {
  return (
    <>
      <section className="recommended-products">
        <h2 className="recommended-products-header">You may also like</h2>
        <div className="underline"></div>
        <div className="grid grid-column-4">
          <Card price={5000} imgSrc={realMadrid} name="Real Madrid Jersey" />
          <Card
            price={3000}
            imgSrc={manchesterUnited}
            name="Manchester United Jersey"
          />
        </div>
      </section>
    </>
  );
}

export default RecommendProduct;
