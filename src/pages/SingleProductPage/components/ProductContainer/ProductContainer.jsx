import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../../SingleProductPage.css';
import axios from 'axios';
import { realMadrid } from '../../../../assets';
function ProductContainer() {
  const params = useParams();
  const [data, setData] = useState({ imgSrc: '', title: '', price: '' });
  useEffect(() => {
    async function getProducts() {
      const response = await axios.get('/api/products');
      setData(
        response.data.products.find(item => item.id === params.productId)
      );
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
              <input name="size" id="size-s" type="radio" />
              <label htmlFor="size-s">US S</label>
              <input name="size" id="size-m" type="radio" />
              <label htmlFor="size-m">US M</label>
              <input name="size" id="size-lg" type="radio" />
              <label htmlFor="size-lg">US L</label>
            </div>
            <button className="btn outline-primary">Add to Cart</button>
          </form>
          <div className="product-detail-content">
            <h2 className="product-detail-header">{data.title}</h2>
            <p className="product-detail-price">₹ {data.price}</p>
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
