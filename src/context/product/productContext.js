import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data.products);
      } catch (err) {
        console.err(err);
      }
    }
    getProducts();
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
