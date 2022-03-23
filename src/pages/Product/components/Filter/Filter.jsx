import React from 'react';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import PriceFilter from '../PriceFilter/PriceFilter';
import RatingFilter from '../RatingFilter/RatingFilter';
import SortFilter from '../SortFilter/SortFilter';

function Filter({ hidden }) {
  return (
    <>
      <aside className={hidden ? 'aside' : 'aside show'}>
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
