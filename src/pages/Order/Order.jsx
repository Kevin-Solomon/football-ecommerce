import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useOrder } from '../../context/order/orderContext';
import OrderCard from './components/OrderCard';
import './Order.css';
function Order() {
  const { orders } = useOrder();
  const allOrders = orders.map(order => order.orderedItems);
  console.log(orders);
  return (
    <>
      <Navbar />
      <article className="order-container">
        <h2 className="order-header">Orders</h2>
        {orders.length === 0 ? (
          <>
            <div style={{ margin: '15px', textAlign: 'center' }}>
              You right Now{' '}
            </div>
            <div style={{ width: '100%', display: 'flex' }}>
              <img
                style={{ margin: '0 auto' }}
                src="https://media4.giphy.com/media/zHDMgMM4O3zc4/giphy.gif?cid=ecf05e47gpqgvz7ggh7vvjusqhuzxy8tvnukvzjaudhv5baj&rid=giphy.gif&ct=g"
              />
            </div>
          </>
        ) : (
          orders.map(order => {
            return <OrderCard order={order} />;
          })
        )}
      </article>
    </>
  );
}

export default Order;
