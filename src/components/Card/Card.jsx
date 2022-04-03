import { Link } from 'react-router-dom';
import './Card.css';
import { useWishlist } from '../../context/wishlist/wishlistContext';
import { useAuth } from '../../context/auth/authContext';
import { useCart } from './../../context/cart/cartContext';
import { useState } from 'react';
import { useToast } from '../../context/toast/toastContext';
import { v4 as uuid } from 'uuid';
export default function Card({
  _id,
  id,
  name,
  price,
  imgSrc,
  isBestSeller,
  inWishlist,
  inCart,
  rating,
}) {
  const { addToWishlist, deleteFromWishlist } = useWishlist();
  const { token } = useAuth();
  const { addToCart } = useCart();
  const [disabled, setDisabled] = useState(false);
  const { toastDispatch } = useToast();
  return (
    <div className="product-card">
      <div className="card-image-container">
        <img className="responsive-img" src={imgSrc} alt="pht" />
        {inWishlist ? (
          <button
            className="icon-btn"
            onClick={() => {
              deleteFromWishlist(_id);
              toastDispatch({
                type: 'ADD_TOAST',
                payload: {
                  _id: uuid(),
                  message: `Removed ${name} from the wishlist`,
                  autoDelete: 3000,
                  theme: 'danger',
                },
              });
            }}
          >
            <i className="fa fa-heart" aria-hidden="true"></i>
          </button>
        ) : (
          <button
            className="icon-btn"
            disabled={disabled}
            onClick={() => {
              setDisabled(true);
              addToWishlist(
                { _id, name, price, imgSrc, rating },
                token.token,
                setDisabled
              );
              toastDispatch({
                type: 'ADD_TOAST',
                payload: {
                  _id: uuid(),
                  message: `Add ${name} to the wishlist`,
                  autoDelete: 3000,
                },
              });
            }}
          >
            <i className="far fa-heart"></i>
          </button>
        )}
      </div>
      <h4>{name}</h4>
      <h4>₹ {price}</h4>
      <div className="card-rating">
        <div className="read-only-rating">
          <span className="small-text">{rating}</span>
          <i className="far fa-star"></i>
        </div>
      </div>
      <div className="card-footer-btn">
        {inCart ? (
          <Link to="/cart">
            <button className="btn outline-primary">Go to Cart</button>
          </Link>
        ) : (
          <button
            disabled={disabled}
            className="btn"
            onClick={() => {
              setDisabled(true);
              addToCart({ _id, name, price, imgSrc, rating }, _id, setDisabled);
              toastDispatch({
                type: 'ADD_TOAST',
                payload: {
                  _id: uuid(),
                  message: `Add ${name} to the cart`,
                  autoDelete: 3000,
                },
              });
            }}
          >
            Add to cart
          </button>
        )}
        <Link to={'/product/' + _id}>
          <button className="btn outline-primary">View Item</button>
        </Link>
      </div>

      {isBestSeller ? (
        <span className="small-text product-card-badge">Best Seller</span>
      ) : null}
    </div>
  );
}
