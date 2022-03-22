import React from 'react';
import { noItemFound } from './../../assets';
import { Link } from 'react-router-dom';
import './NoItemFound.css';
export const NoItemFound = ({ component }) => {
  return (
    <div>
      <img className="no-item-img" src={noItemFound}></img>
      <p>
        Your {component} is empty. Click the button the button below to add
        items to your {component}
      </p>
      <div className="center">
        <Link to="/product">
          <button className="btn primary-btn">Back To Menu</button>
        </Link>
      </div>
    </div>
  );
};
