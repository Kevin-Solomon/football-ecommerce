import React from 'react';
import Card from '../../../../components/Card/Card';
import { useProducts } from '../../../../context/product/productContext';
import { useFilter } from '../../../../context/filter/filterContext';
import { getRatingList, getSorted, getCategory } from '../../../../util';
import { useCart } from '../../../../context/cart/cartContext';
import { useWishlist } from '../../../../context/wishlist/wishlistContext';
function ProductListing() {
  const products = useProducts();
  const { filterState } = useFilter();
  const { cartState } = useCart();
  const { wishlistState } = useWishlist();
  const wishlistId = wishlistState.map(item => item._id);
  const cartId = cartState.cart.map(item => item._id);
  console.log(cartId);
  const categoryList = getCategory(filterState, products);
  const sortedList = getSorted(filterState, categoryList);
  const ratingList = getRatingList(filterState, sortedList);
  console.log(ratingList);
  return (
    <>
      <main className="products-display">
        <h2>Showing All Products (showing {ratingList.length} products)</h2>
        <div className="grid-products">
          {ratingList.map(({ id, price, title, imgSrc, rating, _id }) => {
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
      </main>
    </>
  );
}

export default ProductListing;
