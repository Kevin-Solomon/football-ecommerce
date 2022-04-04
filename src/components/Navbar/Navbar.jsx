import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth/authContext';
import { useWishlist } from './../../context/wishlist/wishlistContext';
import { useCart } from './../../context/cart/cartContext';
function Navbar({ inLogin, inProductListing, value, setValue }) {
  const { token, setToken } = useAuth();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();
  console.log(inProductListing);
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h2>
            <Link to="/">FootballHQ</Link>
          </h2>
        </div>

        {inProductListing ? (
          <form className="form">
            <input
              type="text"
              value={value}
              onChange={e => setValue(e.target.value)}
              className="form-input small-text"
              placeholder="Enter Product"
            />
          </form>
        ) : null}

        <div className="right-nav">
          {token.token === null ? (
            inLogin ? null : (
              <Link to="/login">
                <button className="btn primary-btn">Login</button>
              </Link>
            )
          ) : (
            <Link to="/login">
              <button
                className="btn primary-btn"
                onClick={() => {
                  setToken({ token: null });
                  cartDispatch({ type: 'RESET' });
                  wishlistDispatch({ type: 'RESET' });
                }}
              >
                Logout
              </button>
            </Link>
          )}

          <ul>
            <li>
              <div className="badge">
                <Link to="/wishlist">
                  <i className="fas fa-heart fa-2x"></i>
                  <div className="badge-number">
                    {token.token ? wishlistState.length : 0}
                  </div>
                </Link>
              </div>
            </li>
            <li>
              <Link to="/cart">
                <div className="badge">
                  <i className="fas fa-shopping-cart fa-2x"></i>
                  <div className="badge-number">
                    {token.token ? cartState.cart.length : 0}
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <button className="navbar-btn">
          <span className="hamburger"></span>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
