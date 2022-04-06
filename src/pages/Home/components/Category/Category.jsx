import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Home.css';
import CategoryCard from './components/CategoryCard';
import LoadingContainer from '../../../../components/Loading/LoadingContainer';
function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getCategory() {
      const response = await axios({ method: 'GET', url: '/api/categories' });
      setCategories([...response.data.categories]);
      setLoading(false);
    }
    getCategory();
  }, []);
  console.log(LoadingContainer);
  return (
    <>
      <h2 className="text-center">Shop By Categories</h2>
      <div className="underline"></div>
      <div className="grid grid-column-4">
        {loading ? (
          <LoadingContainer type="category" />
        ) : (
          categories.map(({ imgSrc, categoryName }) => {
            return <CategoryCard imgSrc={imgSrc} title={categoryName} />;
          })
        )}
      </div>
    </>
  );
}

export default Category;
