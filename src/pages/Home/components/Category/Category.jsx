import React from 'react';
import '../../Home.css';
import {
  football,
  footballBoots,
  realMadrid,
  sneakers,
} from '../../../../assets';
function Category() {
  return (
    <>
      <h2 className="text-center">Shop By Categories</h2>
      <div className="underline"></div>
      <div className="grid grid-column-4">
        <div className="grid-category-card">
          <div className="text-overlay-container">
            <img className="responsive-img" src={footballBoots} />
            <p className="text-overlay">Boots</p>
          </div>
        </div>
        <div className="grid-category-card">
          <div className="text-overlay-container">
            <img className="responsive-img" src={realMadrid} />
            <p className="text-overlay">Football Jersey</p>
          </div>
        </div>
        <div className="grid-category-card">
          <div className="text-overlay-container">
            <img className="responsive-img" src={sneakers} />
            <p className="text-overlay">Sneakers</p>
          </div>
        </div>
        <div className="grid-category-card">
          <div className="text-overlay-container">
            <img className="responsive-img" src={football} />
            <p className="text-overlay">Football</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
