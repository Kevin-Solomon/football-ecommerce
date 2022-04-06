import './App.css';

import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import WishList from './pages/WishList/WishList';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Mockman from 'mockman-js';
import NotFound from './pages/NotFound/NotFound';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/product/:productId" element={<SingleProductPage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
}

export default App;
