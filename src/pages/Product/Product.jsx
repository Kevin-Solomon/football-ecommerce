import Navbar from '../../components/Navbar/Navbar';
import { useProducts } from '../../context/product/productContext';
import { useReducer, useState } from 'react';
import Filter from './components/Filter/Filter';
import ProductListing from './components/ProductListing/ProductListing';
import { initialState, filterReducer } from './../../reducer/filterReducer';
import './Product.css';
import { FilterProvider, useFilter } from '../../context/filter/filterContext';

function Product() {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <FilterProvider>
        <Navbar />
        <button
          onClick={() => {
            setHidden(!hidden);
          }}
          className="filter-btn"
        >
          Filters
        </button>
        <div className="display-container">
          <Filter hidden={hidden} />
          <ProductListing />
        </div>
      </FilterProvider>
    </>
  );
}

export default Product;
