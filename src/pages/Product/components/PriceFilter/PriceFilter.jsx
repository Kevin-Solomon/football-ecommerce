import React from 'react';
import { useFilter } from '../../../../context/filter/filterContext';

function PriceFilter() {
  const { filterState, filterDispatch } = useFilter();

  return (
    <>
      <div className="filter-price">
        <h4>Price</h4>
        <div className="filter-price-range">
          <label></label>
          <input
            onChange={e =>
              filterDispatch({ type: 'price', payload: e.target.value })
            }
            type="range"
            value={filterState.price}
          />
        </div>
      </div>
    </>
  );
}

export default PriceFilter;
