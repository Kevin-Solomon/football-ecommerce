import Navbar from '../../components/Navbar/Navbar';
import Filter from './components/Filter/Filter';
import ProductListing from './components/ProductListing/ProductListing';
import './Product.css';
function Product() {
  return (
    <>
      <Navbar />
      <div className="display-container">
        <Filter />
        <ProductListing />
      </div>
    </>
  );
}

export default Product;
