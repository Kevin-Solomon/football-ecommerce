import { realMadrid } from '../../assets';
import './Card.css';
export default function Card({
  name,
  price,
  imgSrc,
  isBestSeller,
  inWishlist,
}) {
  return (
    <div className="product-card">
      <div className="card-image-container">
        <img className="responsive-img" src={imgSrc} alt="pht" />
        {inWishlist ? (
          <i class="fa fa-heart" aria-hidden="true"></i>
        ) : (
          <i className="far fa-heart fa-lg"></i>
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
