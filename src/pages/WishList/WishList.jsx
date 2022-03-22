import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import './WishList.css';
import { NoItemFound } from '../../components/NoItemFound/NoItemFound';
import { useWishlist } from '../../context/wishlist/wishlistContext';
function WishList() {
  const { wishlistState } = useWishlist();
  console.log(wishlistState);
  return (
    <>
      <Navbar />
      <div className="body-center">
        <div className="grid-wishlist">
          {wishlistState.length === 0 ? (
            <NoItemFound component="wishlist" />
          ) : (
            wishlistState.map(({ _id, price, imgSrc, name, rating }) => (
              <Card
                key={_id}
                price={price}
                imgSrc={imgSrc}
                name={name}
                _id={_id}
                rating={rating}
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
