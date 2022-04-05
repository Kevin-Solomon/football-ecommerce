import React, { useEffect } from 'react';
import Card from '../../../../components/Card/Card';
import { useProducts } from '../../../../context/product/productContext';
import { useFilter } from '../../../../context/filter/filterContext';
import {
  getRatingList,
  getSorted,
  getCategory,
  getRangeProducts,
} from '../../../../util';
import LoadingContainer from '../../../../components/Loading/LoadingContainer';
import { useCart } from '../../../../context/cart/cartContext';
import { useWishlist } from '../../../../context/wishlist/wishlistContext';
import { NoItemFound } from '../../../../components/NoItemFound/NoItemFound';
import { noItem } from '../../../../assets';
function ProductListing({ search }) {
  const products = useProducts();
  const { filterState, filterDispatch } = useFilter();
  const { cartState } = useCart();
  const { wishlistState } = useWishlist();
  const wishlistId = wishlistState.map(item => item._id);
  const cartId = cartState.cart.map(item => item._id);
  const rangeList = getRangeProducts(filterState, products);
  const categoryList = getCategory(filterState, rangeList);
  const sortedList = getSorted(filterState, categoryList);
  const ratingList = getRatingList(filterState, sortedList);

  function getSearchedList(search, ratingList) {
    console.log(ratingList);
    if (search.trim() === '') {
      return ratingList;
    } else {
      return ratingList.filter(item =>
        item.title.toLowerCase().includes(search)
      );
    }
  }
  const searchedList = getSearchedList(search, ratingList);
  console.log(searchedList);
  useEffect(() => {
    return () => {
      filterDispatch({ type: 'RESET' });
    };
  }, []);
  return (
    <>
      <main className="products-display">
        <h2>Showing All Products (showing {searchedList.length} products)</h2>
        <div className="grid-products">
          {products.length === 0 ? <LoadingContainer type="product" /> : null}
          {searchedList.length === 0 ? (
            <>
              <p>No items were found</p>
            </>
          ) : (
            searchedList.map(({ id, price, title, imgSrc, rating, _id }) => {
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
            })
          )}
        </div>
      </main>
    </>
  );
}

export default ProductListing;
