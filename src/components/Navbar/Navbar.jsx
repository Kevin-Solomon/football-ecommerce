import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth/authContext';
import { useWishlist } from './../../context/wishlist/wishlistContext';
import { useCart } from './../../context/cart/cartContext';
function Navbar() {
  const { token, setToken } = useAuth();
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();
  console.log(cartState);
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h2>
            <a href="/">FootballHQ</a>
          </h2>
        </div>

        <form className="form">
          <input
            type="text"
            className="form-input small-text"
            placeholder="Enter Product"
          />
        </form>

        <div className="right-nav">
          {token.token === null ? (
            <Link to="/login">
              <button className="btn primary-btn">Login</button>
            </Link>
          ) : (
            <Link to="/login">
              <button
                className="btn primary-btn"
                onClick={() => setToken({ token: null })}
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
                  <div className="badge-number">{wishlistState.length}</div>
                </Link>
              </div>
            </li>
            <li>
              <Link to="/cart">
                <div className="badge">
                  <i className="fas fa-shopping-cart fa-2x"></i>
                  <div className="badge-number">{cartState.cart.length}</div>
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
