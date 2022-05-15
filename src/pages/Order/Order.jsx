import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useOrder } from '../../context/order/orderContext';

function Order() {
  const { orders } = useOrder();
  const allOrders = orders.map(order => order.orderedItems);
  console.log(allOrders.flat());
  console.log(orders);
  return (
    <>
      <Navbar />
      <article>
        {allOrders.map(order =>
          order.map(order => {
            return (
              <>
                <div>{order.title}</div>
              </>
            );
          })
        )}
      </article>
    </>
  );
}

export default Order;
