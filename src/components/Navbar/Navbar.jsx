import React from 'react';
import './Navbar.css';
function Navbar() {
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
          <button className="btn primary-btn">Login</button>
          <ul>
            <li>
              <div className="badge">
                <i className="fas fa-heart fa-2x"></i>
                <div className="badge-number">1</div>
              </div>
            </li>
            <li>
              <div className="badge">
                <i className="fas fa-shopping-cart fa-2x"></i>
                <div className="badge-number">1</div>
              </div>
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
