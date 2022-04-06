import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../../SingleProductPage.css';
import axios from 'axios';
import { useCart } from './../../../../context/cart/cartContext';
function ProductContainer() {
  const { addToCart } = useCart();
  const [disabled, setDisabled] = useState(false);
  const params = useParams();
  const [data, setData] = useState({ imgSrc: '', title: '', price: '' });
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get('/api/products');
        console.log(response.data.products);
        setData(
          response.data.products.find(item => item._id === params.productId)
        );
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, []);
  return (
    <>
      <section className="single-product-container">
        <div className="product-img-container">
          <img className="responsive-img" src={data.imgSrc} />
        </div>
        <div className="product-detail-container">
          <form className="product-form" action="">
            <p>Select Size</p>
            <div className="product-size-select">
              <input
                className="product-size"
                name="size"
                id="size-s"
                type="radio"
              />
              <label htmlFor="size-s">
                {data.categoryName === 'boots' ||
                data.categoryName === 'sneakers'
                  ? 'Size 7'
                  : 'US S'}
              </label>
              <input
                className="product-size"
                name="size"
                id="size-m"
                type="radio"
              />
              <label htmlFor="size-m">
                {data.categoryName === 'boots' ||
                data.categoryName === 'sneakers'
                  ? 'Size 8'
                  : 'US M'}
              </label>
              <input
                className="product-size"
                name="size"
                id="size-lg"
                type="radio"
              />
              <label htmlFor="size-lg">
                {data.categoryName === 'boots' ||
                data.categoryName === 'sneakers'
                  ? 'Size 9'
                  : 'US L'}
              </label>
              <input
                className="product-size"
                name="size"
                id="size-xlg"
                type="radio"
              />
              <label htmlFor="size-xlg">
                {data.categoryName === 'boots' ||
                data.categoryName === 'sneakers'
                  ? 'Size 10'
                  : 'US XL'}
              </label>
            </div>
            <button
              className="btn outline-primary"
              disabled={disabled}
              onClick={e => {
                e.preventDefault();
                addToCart(
                  {
                    _id: data._id,
                    name: data.title,
                    price: data.price,
                    imgSrc: data.imgSrc,
                  },
                  data._id,
                  setDisabled
                );
              }}
            >
              Add to Cart
            </button>
          </form>
          <div className="product-detail-content">
            <h2 className="product-detail-header">{data.title}</h2>
            <h3 className="product-detail-price">₹ {data.price}</h3>
            <ul>
              <li>Everyday midweight cotton feels soft and comfortable.</li>
              <li>100% cotton</li>
              <li>Loose fit for a roomy feel</li>
              <li>Ribbing at the neckband and cuffs stretches as you move.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductContainer;
