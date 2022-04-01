import React from 'react';
import { useFilter } from '../../../../context/filter/filterContext';

function CategoryFilter() {
  const { filterState, filterDispatch } = useFilter();
  console.log(filterState);
  return (
    <>
      <div className="filter-category">
        <h4>Category</h4>
        <div className="filter-category">
          <input
            checked={filterState.jersey}
            id="jersey"
            type="checkbox"
            onChange={() => filterDispatch({ type: 'jersey' })}
          />
          <label htmlFor="jersey">Jersey</label>
        </div>
        <div className="filter-category-women">
          <input
            checked={filterState.boots}
            id="boots"
            type="checkbox"
            onChange={() => filterDispatch({ type: 'boots' })}
          />
          <label htmlFor="boots">Boots</label>
        </div>
        <div className="filter-category-sneaker">
          <input
            checked={filterState.sneakers}
            id="sneakers"
            type="checkbox"
            onChange={() => filterDispatch({ type: 'sneakers' })}
          />
          <label htmlFor="sneakers">Sneakers</label>
        </div>
        <div className="filter-category-football">
          <input
            checked={filterState.football}
            id="football"
            type="checkbox"
            onChange={() => filterDispatch({ type: 'football' })}
          />
          <label htmlFor="football">Football</label>
        </div>
      </div>
    </>
  );
}

export default CategoryFilter;
