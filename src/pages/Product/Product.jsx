import Navbar from '../../components/Navbar/Navbar';
import { useProducts } from '../../context/product/productContext';
import Filter from './components/Filter/Filter';
import ProductListing from './components/ProductListing/ProductListing';
import './Product.css';
function Product() {
  const products = useProducts();
  console.log(products);
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
