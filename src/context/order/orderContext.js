import { createContext, useContext, useState } from 'react';
const OrderContext = createContext({ orders: [] });
const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

const useOrder = () => useContext(OrderContext);

export { useOrder, OrderProvider };
