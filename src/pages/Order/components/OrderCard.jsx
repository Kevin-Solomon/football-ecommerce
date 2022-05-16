import React, { useState } from 'react';
import { getIcons } from '../../../util/getIcons';
import './OrderCard.css';
import { getTotalPrice } from './../../../util/getTotalPrice';
function OrderCard({ order }) {
  const [value, setValue] = useState(0);
  console.log(order);
  return (
    <div className="order-card">
      <p className="text-muted">{order.timestamp}</p>
      <h2>
        <span>{getIcons('CHECK', '27px')}</span> Order Successfully Placed
      </h2>
      <span className="text-muted">Payment ID : </span>
      <span className="text-muted">{order.orderId}</span>
      <div>
        {order.orderedItems.map(items => {
          return (
            <img className="responsive-img order-card-img" src={items.imgSrc} />
          );
        })}
      </div>
      <div className="order-card-footer">
        <div>
          <h4>Rate Order</h4>
          {[...new Array(5)].map((item, index) => {
            return (
              <>
                <label style={{ color: index < value ? 'red' : '' }}>
                  <input
                    value={index + 1}
                    onClick={e => {
                      setValue(e.target.value);
                    }}
                    id={index}
                    type="radio"
                  />
                  <span>{getIcons('STAR')}</span>
                </label>
              </>
            );
          })}
        </div>
        <div>
          <h4>Products</h4>
          <p>{order.orderedItems.length}</p>
        </div>
        <div>
          <h4>Price</h4>
          <p>{getTotalPrice(order.orderedItems) + 499}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
