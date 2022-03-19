import { realMadrid } from '../../assets';
import './Card.css';
import { useWishlist } from '../../context/wishlist/wishlistContext';
import { useAuth } from '../../context/auth/authContext';
export default function Card({
  _id,
  id,
  name,
  price,
  imgSrc,
  isBestSeller,
  inWishlist,
}) {
  const { addToWishlist, deleteFromWishlist } = useWishlist();
  const { token } = useAuth();
  return (
    <div className="product-card">
      <div className="card-image-container">
        <img className="responsive-img" src={imgSrc} alt="pht" />
        {inWishlist ? (
          <i
            onClick={() => {
              deleteFromWishlist(_id);
            }}
            className="fa fa-heart"
            aria-hidden="true"
          ></i>
        ) : (
          <i
            onClick={() => {
              addToWishlist({ _id, name, price, imgSrc }, token.token);
            }}
            className="far fa-heart fa-lg"
          ></i>
        )}
      </div>
      <h4>{name}</h4>
      <h4>₹ {price}</h4>
      <button className="btn">Add to cart</button>
      {isBestSeller ? (
        <span className="small-text product-card-badge">Best Seller</span>
      ) : null}
    </div>
  );
}
