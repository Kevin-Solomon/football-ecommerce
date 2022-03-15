import React from 'react';
import { useState } from 'react';
function Filter() {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <aside class="aside">
        <div class="filter-reset">
          Filter
          <a>Clear</a>
        </div>
        <div class="filter-price">
          <h4>Price</h4>
          <div class="filter-price-range">
            <label></label>
            <input type="range" />
          </div>
        </div>
        <div class="filter-category">
          <h4>Category</h4>
          <div class="filter-category-men">
            <input id="men-clothing" type="checkbox" />
            <label for="men-clothing">Men Clothing</label>
          </div>
          <div class="filter-category-women">
            <input id="women-clothing" type="checkbox" />
            <label for="women-clothing">Women Clothing</label>
          </div>
        </div>
        <div class="filter-rating">
          <h4>Rating</h4>
          <div class="filter-rating-four">
            <input name="rating" id="four-stars" type="radio" />
            <label for="four-stars">4 Stars and Above</label>
          </div>
          <div class="filter-rating-three">
            <input name="rating" id="three-stars" type="radio" />
            <label for="three-stars">3 Stars and Above</label>
          </div>
          <div class="filter-rating-two">
            <input name="rating" id="two-stars" type="radio" />
            <label for="two-stars">2 Stars and Above</label>
          </div>
          <div class="filter-rating-one">
            <input name="rating" id="one-star" type="radio" />
            <label for="one-star">1 Stars and Above</label>
          </div>
        </div>
        <div class="filter-sort">
          <h4>Sort</h4>
          <div class="filter-sort-low">
            <input id="sort-low" name="sortType" type="radio" />
            <label for="sort-low">Price - Low to High</label>
          </div>
          <div class="filter-sort-high">
            <input id="sort-high" name="sortType" type="radio" />
            <label for="sort-high">Price - High to Low</label>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Filter;
