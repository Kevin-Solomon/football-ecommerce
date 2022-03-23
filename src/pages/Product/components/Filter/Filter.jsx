import React from 'react';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import PriceFilter from '../PriceFilter/PriceFilter';
import RatingFilter from '../RatingFilter/RatingFilter';
import SortFilter from '../SortFilter/SortFilter';
import { useFilter } from './../../../../context/filter/filterContext';
function Filter({ hidden }) {
  const { filterDispatch } = useFilter();
  return (
    <>
      <aside className={hidden ? 'aside' : 'aside show'}>
        <div className="filter-reset">
          Filter
          <button onClick={() => filterDispatch({ type: 'RESET' })}>
            Clear
          </button>
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
