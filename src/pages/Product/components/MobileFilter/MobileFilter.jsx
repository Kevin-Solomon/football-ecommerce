import React, { useState } from 'react';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import RatingFilter from '../RatingFilter/RatingFilter';
import SortFilter from '../SortFilter/SortFilter';

function MobileFilter() {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="mobile-filter">
      <button className="filter-btn btn" onClick={() => setHidden(false)}>
        Filter
      </button>
      <div className={hidden ? 'hide' : 'mobile-filter-container'}>
        <div className="filter-title">
          <span>Filter</span>
          <button
            onClick={() => {
              setHidden(true);
            }}
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>

        <CategoryFilter />
        <RatingFilter />
        <SortFilter />
      </div>
    </div>
  );
}

export default MobileFilter;
