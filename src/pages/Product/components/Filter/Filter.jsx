import React from 'react';
import { useState } from 'react';
function Filter() {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <aside className="aside">
        <div className="filter-reset">
          Filter
          <a>Clear</a>
        </div>
        <div className="filter-price">
          <h4>Price</h4>
          <div className="filter-price-range">
            <label></label>
            <input type="range" />
          </div>
        </div>
        <div className="filter-category">
          <h4>Category</h4>
          <div className="filter-category-men">
            <input id="men-clothing" type="checkbox" />
            <label htmlFor="men-clothing">Men Clothing</label>
          </div>
          <div className="filter-category-women">
            <input id="women-clothing" type="checkbox" />
            <label htmlFor="women-clothing">Women Clothing</label>
          </div>
        </div>
        <div className="filter-rating">
          <h4>Rating</h4>
          <div className="filter-rating-four">
            <input name="rating" id="four-stars" type="radio" />
            <label htmlFor="four-stars">4 Stars and Above</label>
          </div>
          <div className="filter-rating-three">
            <input name="rating" id="three-stars" type="radio" />
            <label htmlFor="three-stars">3 Stars and Above</label>
          </div>
          <div className="filter-rating-two">
            <input name="rating" id="two-stars" type="radio" />
            <label htmlFor="two-stars">2 Stars and Above</label>
          </div>
          <div className="filter-rating-one">
            <input name="rating" id="one-star" type="radio" />
            <label htmlFor="one-star">1 Stars and Above</label>
          </div>
        </div>
        <div className="filter-sort">
          <h4>Sort</h4>
          <div className="filter-sort-low">
            <input id="sort-low" name="sortType" type="radio" />
            <label htmlFor="sort-low">Price - Low to High</label>
          </div>
          <div className="filter-sort-high">
            <input id="sort-high" name="sortType" type="radio" />
            <label htmlFor="sort-high">Price - High to Low</label>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Filter;
