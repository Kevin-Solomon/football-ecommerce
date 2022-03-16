import React from 'react';
import Card from '../../../../components/Card/Card';
import { realMadrid, manchesterUnited } from '../../../../assets';
import { useProducts } from '../../../../context/product/productContext';
import { useFilter } from '../../../../context/filter/filterContext';
import { getCategory } from './../../../../util/getCategory';
import { getSorted } from './../../../../util/getSorted';
function ProductListing() {
  const products = useProducts();
  const { filterState, filterDispatch } = useFilter();
  const sortedList = getSorted(filterState, products);
  const categoryList = getCategory(filterState, sortedList);
  return (
    <>
      <main className="products-display">
        <h2>Showing All Products (showing {categoryList.length} products)</h2>
        <div className="grid-products">
          {categoryList.map(item => {
            return (
              <Card price={item.price} name={item.title} imgSrc={item.imgSrc} />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default ProductListing;
