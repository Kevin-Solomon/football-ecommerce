import Navbar from '../../components/Navbar/Navbar';
import { useProducts } from '../../context/product/productContext';
import { useReducer } from 'react';
import Filter from './components/Filter/Filter';
import ProductListing from './components/ProductListing/ProductListing';
import { initialState, filterReducer } from './../../reducer/filterReducer';
import './Product.css';
import { FilterProvider } from '../../context/filter/filterContext';
function Product() {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialState);
  return (
    <>
      <FilterProvider>
        <Navbar />
        <div className="display-container">
          <Filter filterState={filterState} filterDispatch={filterDispatch} />
          <ProductListing filterState={filterState} />
        </div>
      </FilterProvider>
    </>
  );
}

export default Product;
