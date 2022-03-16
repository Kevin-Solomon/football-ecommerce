import React from 'react';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import PriceFilter from '../PriceFilter/PriceFilter';
import RatingFilter from '../RatingFilter/RatingFilter';
import SortFilter from '../SortFilter/SortFilter';

function Filter({ filterState, filterDispatch }) {
  return (
    <>
      <aside className="aside">
        <div className="filter-reset">
          Filter
          <a>Clear</a>
        </div>
        <PriceFilter />
        <CategoryFilter />
        <RatingFilter />
        <SortFilter />
      </aside>
    </>
  );
}

export default Filter;
