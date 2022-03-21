import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import './WishList.css';
import { NoItemFound } from '../../components/NoItemFound/NoItemFound';
import { useWishlist } from '../../context/wishlist/wishlistContext';
function WishList() {
  const { wishlistState } = useWishlist();
  return (
    <>
      <Navbar />
      <div className="body-center">
        <div className="grid-wishlist">
          {wishlistState.length === 0 ? (
            <NoItemFound component="wishlist" />
          ) : (
            wishlistState.map(item => (
              <Card
                key={item._id}
                price={item.price}
                imgSrc={item.imgSrc}
                name={item.name}
                _id={item._id}
                inWishlist
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default WishList;
