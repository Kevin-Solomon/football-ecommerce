import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import './WishList.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { getByTitle } from '@testing-library/react';
import { useWishlist } from '../../context/wishlist/wishlistContext';
function WishList() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   async function getProducts() {
  //     const response = await axios.get('/api/products');
  //     setData([...response.data.products]);
  //   }
  //   getProducts();
  // }, []);
  const { wishlistState } = useWishlist();
  console.log(wishlistState);
  return (
    <>
      <Navbar />
      <div className="body-center">
        <div className="grid-wishlist">
          {wishlistState &&
            wishlistState.map(item => (
              <Card
                price={item.price}
                imgSrc={item.imgSrc}
                name={item.name}
                _id={item._id}
                inWishlist
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default WishList;
