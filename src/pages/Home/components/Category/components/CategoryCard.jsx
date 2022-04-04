import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFilter } from '../../../../../context/filter/filterContext';

function CategoryCard({ imgSrc, title }) {
  const { filterDispatch } = useFilter();
  const navigate = useNavigate();
  return (
    <div
      className="grid-category-card"
      onClick={() => {
        navigate('/product');
        filterDispatch({ type: title });
      }}
    >
      <div className="text-overlay-container">
        <img className="responsive-img" src={imgSrc} />
        <p className="text-overlay">{title}</p>
      </div>
    </div>
  );
}

export default CategoryCard;
