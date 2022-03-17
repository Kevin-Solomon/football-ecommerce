import Navbar from '../../components/Navbar/Navbar';
import { useProducts } from '../../context/product/productContext';
import { useReducer } from 'react';
import Filter from './components/Filter/Filter';
import ProductListing from './components/ProductListing/ProductListing';
import { initialState, filterReducer } from './../../reducer/filterReducer';
import './Product.css';
import { FilterProvider, useFilter } from '../../context/filter/filterContext';
function Product() {
  return (
    <>
      <FilterProvider>
        <Navbar />
        <div className="display-container">
          <Filter />
          <ProductListing />
        </div>
      </FilterProvider>
    </>
  );
}

export default Product;
