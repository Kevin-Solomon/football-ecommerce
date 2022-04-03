import Navbar from '../../components/Navbar/Navbar';
import { useProducts } from '../../context/product/productContext';
import { useReducer, useState, useEffect } from 'react';
import Filter from './components/Filter/Filter';
import ProductListing from './components/ProductListing/ProductListing';
import { initialState, filterReducer } from './../../reducer/filterReducer';
import './Product.css';
import { FilterProvider, useFilter } from '../../context/filter/filterContext';
import ToastContainer from '../../components/Toast/ToastContainer';

function Product() {
  const [hidden, setHidden] = useState(true);
  const { filterDispatch } = useFilter();
  useEffect(() => {
    return () => filterDispatch({ type: 'RESET' });
  }, []);
  return (
    <>
      <Navbar />
      <ToastContainer />
      <button
        onClick={() => {
          setHidden(!hidden);
        }}
        className="filter-btn"
      >
        Filters
        {hidden ? (
          <i class="fas fa-arrow-down"></i>
        ) : (
          <i class="fas fa-arrow-up"></i>
        )}
      </button>
      <div className="display-container">
        <Filter hidden={hidden} />
        <ProductListing />
      </div>
    </>
  );
}

export default Product;
