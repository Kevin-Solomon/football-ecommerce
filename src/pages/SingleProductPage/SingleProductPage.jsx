import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ProductContainer from './components/ProductContainer/ProductContainer';
import RecommendProduct from './components/RecommendProduct/RecommendProduct';
import ToastContainer from '../../components/Toast/ToastContainer';
import './SingleProductPage.css';
function SingleProductPage() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <ProductContainer />
      <RecommendProduct />
    </>
  );
}

export default SingleProductPage;
