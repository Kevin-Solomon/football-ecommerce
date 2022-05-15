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
import RequireAuth from './components/RequireAuth/RequireAuth';
import Order from './pages/Order/Order';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/wishlist"
        element={
          <RequireAuth>
            <WishList />
          </RequireAuth>
        }
      />
      <Route path="/product/:productId" element={<SingleProductPage />} />
      <Route path="/product" element={<Product />} />
      <Route
        path="/cart"
        element={
          <RequireAuth>
            <Cart />
          </RequireAuth>
        }
      />
      <Route path="*" element={<NotFound />} />
      <Route path="/mockman" element={<Mockman />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export default App;
