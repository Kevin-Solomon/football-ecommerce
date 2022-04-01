import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Home.css';
import {
  football,
  footballBoots,
  realMadrid,
  sneakers,
} from '../../../../assets';
import CategoryCard from './components/CategoryCard';
function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategory() {
      const response = await axios({ method: 'GET', url: '/api/categories' });
      console.log(response);
      setCategories([...response.data.categories]);
    }
    getCategory();
  }, []);

  return (
    <>
      <h2 className="text-center">Shop By Categories</h2>
      <div className="underline"></div>
      <div className="grid grid-column-4">
        {categories.map(({ imgSrc, categoryName }) => {
          return <CategoryCard imgSrc={imgSrc} title={categoryName} />;
        })}
      </div>
    </>
  );
}

export default Category;
