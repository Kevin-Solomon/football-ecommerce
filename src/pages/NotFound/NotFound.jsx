import React from 'react';
import { Link } from 'react-router-dom';
import { notfound } from '../../assets';
import Navbar from '../../components/Navbar/Navbar';
import './NotFound.css';
function NotFound() {
  return (
    <>
      <Navbar />
      <div>
        <img className="responsive-img not-found" src={notfound} />
        <div className="btn-wrapper">
          <Link to="/">
            <h2 className="not-found-header">Something Went Wrong !!</h2>
            <button className="btn primary-btn">Go Back to Home Page</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
