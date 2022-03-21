import '../../Home.css';
import React from 'react';
import Card from '../../../../components/Card/Card';
import { manchesterUnited, realMadrid } from '../../../../assets';
import { useProducts } from '../../../../context/product/productContext';
import { useCart } from './../../../../context/cart/cartContext';
import { useWishlist } from './../../../../context/wishlist/wishlistContext';
function Trending() {
  const products = useProducts();
  const { cartState } = useCart();
  const { wishlistState } = useWishlist();
  const wishlistId = wishlistState.map(item => item._id);
  const cartId = cartState.cart.map(item => item._id);
  return (
    <>
      <h2 className="text-center">Trending</h2>
      <div className="underline"></div>
      <div className="grid grid-column-2">
        {products
          .slice(0, 2)
          .map(({ imgSrc, id, title, price, _id, rating }) => {
            return cartId.includes(_id) && wishlistId.includes(_id) ? (
              <Card
                key={id}
                id={id}
                price={price}
                name={title}
                imgSrc={imgSrc}
                _id={_id}
                rating={rating}
                inCart
                inWishlist
              />
            ) : cartId.includes(_id) ? (
              <Card
                key={id}
                price={price}
                name={title}
                imgSrc={imgSrc}
                _id={_id}
                rating={rating}
                inCart
              />
            ) : wishlistId.includes(_id) ? (
              <Card
                key={id}
                price={price}
                name={title}
                imgSrc={imgSrc}
                _id={_id}
                rating={rating}
                inWishlist
              />
            ) : (
              <Card
                key={id}
                price={price}
                name={title}
                imgSrc={imgSrc}
                _id={_id}
                rating={rating}
              />
            );
          })}
      </div>
    </>
  );
}

export default Trending;
