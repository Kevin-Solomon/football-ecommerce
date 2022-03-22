import Navbar from '../../components/Navbar/Navbar';
import { useProducts } from '../../context/product/productContext';
import { useReducer, useState } from 'react';
import Filter from './components/Filter/Filter';
import ProductListing from './components/ProductListing/ProductListing';
import { initialState, filterReducer } from './../../reducer/filterReducer';
import './Product.css';
import { FilterProvider, useFilter } from '../../context/filter/filterContext';
import MobileFilter from './components/MobileFilter/MobileFilter';
function Product() {
  const [hidden, setHidden] = useState(false);
  return (
    <>
      <FilterProvider>
        <Navbar />
        <div className="display-container">
          <Filter />
          <ProductListing />
          <MobileFilter />
        </div>
      </FilterProvider>
    </>
  );
}

export default Product;
