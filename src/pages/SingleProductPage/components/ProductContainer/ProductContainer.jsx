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
        ...response.data.products.filter(item => item.id === params.productId)
      );
    }
    getProducts();
  }, []);
  console.log(data);
  return (
    <>
      <section class="single-product-container">
        <div class="product-img-container">
          <img class="responsive-img" src={data.imgSrc} />
        </div>
        <div class="product-detail-container">
          <form class="product-form" action="">
            <p>Select Size</p>
            <div class="product-size-select">
              <input name="size" id="size-s" type="radio" />
              <label for="size-s">US S</label>
              <input name="size" id="size-m" type="radio" />
              <label for="size-m">US M</label>
              <input name="size" id="size-lg" type="radio" />
              <label for="size-lg">US L</label>
            </div>
            <button class="btn outline-primary">Add to Cart</button>
          </form>
          <div class="product-detail-content">
            <h2 class="product-detail-header">{data.title}</h2>
            <p class="product-detail-price">₹ {data.price}</p>
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
