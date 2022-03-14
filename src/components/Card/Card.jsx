import { realMadrid } from '../../assets';
import './Card.css';
export default function Card({ bestSeller }) {
  console.log(bestSeller);
  return (
    <div className="product-card">
      <div className="card-image-container">
        <img className="responsive-img" src={realMadrid} alt="pht" />
        <i className="far fa-heart fa-lg"></i>
      </div>
      <h4>Real Madrid Jersey</h4>
      <h4>₹2000</h4>
      <button className="btn">Add to cart</button>
      {bestSeller ? (
        <span className="small-text product-card-badge">Best Seller</span>
      ) : null}
    </div>
  );
}
