import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <>
      <footer className="footer">
        Made with code by Kevin Solomon
        <div className="footer-links">
          <a href="">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="">
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a href="">
            <i className="fab fa-linkedin-in fa-lg"></i>
          </a>
        </div>
        <div>© 2021 KevinSolomon</div>
      </footer>
    </>
  );
}

export default Footer;
