import Navbar from '../../components/Navbar/Navbar';
import Filter from './components/Filter/Filter';
import ProductListing from './components/ProductListing/ProductListing';
import './Product.css';
function Product() {
  return (
    <>
      <Navbar />
      <div class="display-container">
        <Filter />
        <ProductListing />
        {/* <MobileFilter />
        <MobileSort /> */}
      </div>
    </>
  );
}

export default Product;
