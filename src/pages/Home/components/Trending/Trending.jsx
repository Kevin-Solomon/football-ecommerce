import '../../Home.css';
import React from 'react';
import Card from '../../../../components/Card/Card';
import { manchesterUnited, realMadrid } from '../../../../assets';
import { useProducts } from '../../../../context/product/productContext';
function Trending() {
  const products = useProducts();
  return (
    <>
      <h2 className="text-center">Trending</h2>
      <div className="underline"></div>
      <div className="grid grid-column-2">
        {products
          .slice(0, 2)
          .map(({ imgSrc, id, title, price, _id, rating }) => {
            return (
              <Card
                key={id}
                imgSrc={imgSrc}
                _id={_id}
                name={title}
                price={price}
                rating={rating}
              ></Card>
            );
          })}
      </div>
    </>
  );
}

export default Trending;
