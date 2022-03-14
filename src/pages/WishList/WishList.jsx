import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import './WishList.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { getByTitle } from '@testing-library/react';
function WishList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const response = await axios.get('/api/products');
      // console.log(response.data.products);
      setData([...response.data.products]);
    }
    getProducts();
  }, []);
  console.log(
    data.filter(item => {
      console.log(item);
    })
  );
  console.log(data.filter(item => item.inWishlist));
  return (
    <>
      <Navbar />
      <div className="body-center">
        <div className="grid-wishlist">
          {data
            .filter(item => item.inWishlist)
            .map(item => (
              <Card
                price={item.price}
                imgSrc={item.imgSrc}
                name={item.title}
                inWishlist
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default WishList;
