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
      <h2 class="text-center">Shop By Categories</h2>
      <div class="underline"></div>
      <div class="grid grid-column-4">
        <div class="grid-category-card">
          <div class="text-overlay-container">
            <img class="responsive-img" src={footballBoots} />
            <p class="text-overlay">Boots</p>
          </div>
        </div>
        <div class="grid-category-card">
          <div class="text-overlay-container">
            <img class="responsive-img" src={realMadrid} />
            <p class="text-overlay">Football Jersey</p>
          </div>
        </div>
        <div class="grid-category-card">
          <div class="text-overlay-container">
            <img class="responsive-img" src={sneakers} />
            <p class="text-overlay">Sneakers</p>
          </div>
        </div>
        <div class="grid-category-card">
          <div class="text-overlay-container">
            <img class="responsive-img" src={football} />
            <p class="text-overlay">Football</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
