import React from 'react';
import { useFilter } from '../../../../context/filter/filterContext';

function SortFilter() {
  const { filterState, filterDispatch } = useFilter();
  return (
    <>
      <div className="filter-sort">
        <h4>Sort</h4>
        <div className="filter-sort-low">
          <input
            defaultChecked={filterState.sortBy === 'LOW_TO_HIGH' ? true : false}
            id="sort-low"
            name="sortType"
            type="radio"
            onChange={() => filterDispatch({ type: 'LOW_TO_HIGH' })}
          />
          <label htmlFor="sort-low">Price - Low to High</label>
        </div>
        <div className="filter-sort-high">
          <input
            defaultChecked={filterState.sortBy === 'HIGH_TO_LOW' ? true : false}
            id="sort-high"
            name="sortType"
            type="radio"
            onChange={() => filterDispatch({ type: 'HIGH_TO_LOW' })}
          />
          <label htmlFor="sort-high">Price - High to Low</label>
        </div>
      </div>
    </>
  );
}

export default SortFilter;
