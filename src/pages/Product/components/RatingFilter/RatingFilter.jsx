import React from 'react';
import { useFilter } from '../../../../context/filter/filterContext';

function RatingFilter() {
  const { filterState, filterDispatch } = useFilter();
  return (
    <>
      <div className="filter-rating">
        <h4>Rating</h4>

        <div className="filter-rating-four">
          <input
            type="radio"
            id="four-stars"
            name="rating"
            checked={filterState.rating === 4}
            onChange={e => {
              filterDispatch({ type: 'rating', payload: 4 });
            }}
          />

          <label htmlFor="four-stars">4 Stars and Above</label>
        </div>
        <div className="filter-rating-three">
          <input
            checked={filterState.rating === 3}
            name="rating"
            id="three-stars"
            type="radio"
            onChange={() => filterDispatch({ type: 'rating', payload: 3 })}
          />
          <label htmlFor="three-stars">3 Stars and Above</label>
        </div>
        <div className="filter-rating-two">
          <input
            checked={filterState.rating === 2}
            name="rating"
            id="two-stars"
            type="radio"
            onChange={() => filterDispatch({ type: 'rating', payload: 2 })}
          />
          <label htmlFor="two-stars">2 Stars and Above</label>
        </div>
        <div className="filter-rating-one">
          <input
            checked={filterState.rating === 1}
            name="rating"
            id="one-star"
            type="radio"
            onChange={() => filterDispatch({ type: 'rating', payload: 1 })}
          />
          <label htmlFor="one-star">1 Stars and Above</label>
        </div>
      </div>
    </>
  );
}

export default RatingFilter;
