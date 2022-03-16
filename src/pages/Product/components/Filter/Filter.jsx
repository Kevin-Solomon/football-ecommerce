import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import PriceFilter from '../PriceFilter/PriceFilter';
import RatingFilter from '../RatingFilter/RatingFilter';
import SortFilter from '../SortFilter/SortFilter';
import {
  initialState,
  filterReducer,
} from './../../../../reducer/filterReducer';
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
