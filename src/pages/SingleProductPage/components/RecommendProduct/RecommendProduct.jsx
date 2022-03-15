import React from 'react';
import Card from '../../../../components/Card/Card';
import { realMadrid, manchesterUnited } from '../../../../assets';
function RecommendProduct() {
  return (
    <>
      <section class="recommended-products">
        <h2 class="recommended-products-header">You may also like</h2>
        <div class="underline"></div>
        <div class="grid grid-column-4">
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
