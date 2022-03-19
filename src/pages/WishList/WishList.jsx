import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import './WishList.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { getByTitle } from '@testing-library/react';
import { useWishlist } from '../../context/wishlist/wishlistContext';
function WishList() {
  const { wishlistState } = useWishlist();
  return (
    <>
      <Navbar />
      <div className="body-center">
        <div className="grid-wishlist">
          {wishlistState &&
            wishlistState.map(item => (
              <Card
                key={item._id}
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
