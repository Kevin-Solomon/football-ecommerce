import React from 'react';
import './Loading.css';
function LoadingCategory() {
  return (
    <div className="text-overlay-container skeletal">
      <img className="responsive-img skeletal" />
      <p className="text-overlay skeletal-text"></p>
    </div>
  );
}

export default LoadingCategory;
