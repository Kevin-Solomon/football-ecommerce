import React from 'react';
import Card from '../../../../components/Card/Card';
import { useProducts } from '../../../../context/product/productContext';
import { useFilter } from '../../../../context/filter/filterContext';
import { getRatingList, getSorted, getCategory } from '../../../../util';
function ProductListing() {
  const products = useProducts();
  const { filterState } = useFilter();
  const categoryList = getCategory(filterState, products);
  const sortedList = getSorted(filterState, categoryList);
  const ratingList = getRatingList(filterState, sortedList);
  return (
    <>
      <main className="products-display">
        <h2>Showing All Products (showing {ratingList.length} products)</h2>
        <div className="grid-products">
          {ratingList.map(item => {
            return (
              <Card
                key={item.id}
                price={item.price}
                name={item.title}
                imgSrc={item.imgSrc}
                _id={item._id}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default ProductListing;
