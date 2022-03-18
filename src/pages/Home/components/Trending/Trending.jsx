import '../../Home.css';
import React from 'react';
import Card from '../../../../components/Card/Card';
import { manchesterUnited, realMadrid } from '../../../../assets';
import { useProducts } from '../../../../context/product/productContext';
function Trending() {
  const products = useProducts();
  console.log(products);
  return (
    <>
      <h2 className="text-center">Trending</h2>
      <div className="underline"></div>
      <div className="grid grid-column-2">
        {products.slice(0, 2).map(({ imgSrc, id, title, price }) => {
          return (
            <Card
              key={id}
              imgSrc={imgSrc}
              id={id}
              name={title}
              price={price}
            ></Card>
          );
        })}
      </div>
    </>
  );
}

export default Trending;
