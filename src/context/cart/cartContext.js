import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useAuth } from '../auth/authContext';
import { initialCartState, cartReducer } from '../../reducer/cartReducer';
import axios from 'axios';
const CartContext = createContext({ cart: [] });
function CartProvider({ children }) {
  const { token } = useAuth();
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  useEffect(() => {
    async function getCartItems() {
      try {
        const response = await axios.get('/api/user/cart', {
          headers: { authorization: token.token },
        });
        cartDispatch({ type: 'INITIALIZE', payload: response.data.cart });
      } catch (err) {
        console.error('No cart Items present', err);
      }
    }
    getCartItems();
  }, [token.token]);
  //ADD TO CART FUUNCTION
  const addToCart = async (product, _id, setDisabled) => {
    console.log(_id);
    try {
      console.log(product);
      const flag =
        cartState.cart.find(item => item._id === _id) === undefined
          ? false
          : true;
      console.log(flag);
      if (flag) {
        const response = await axios.post(
          `/api/user/cart/${_id}`,
          {
            action: {
              type: 'increment',
            },
          },
          {
            headers: { authorization: token.token },
          }
        );
        cartDispatch({ type: 'ADD_TO_CART', payload: response.data.cart });
      } else {
        const response = await axios.post(
          '/api/user/cart',
          { product },
          {
            headers: { authorization: token.token },
          }
        );
        setDisabled(false);
        cartDispatch({ type: 'ADD_TO_CART', payload: response.data.cart });
      }
    } catch (err) {
      setDisabled(false);
      console.error(err);
    }
  };
  //REMOVE FROM CART FUNCTION
  const removeFromCart = async _id => {
    const response = await axios.delete(`/api/user/cart/${_id}`, {
      headers: { authorization: token.token },
    });
    cartDispatch({ type: 'DELETE_ITEM', payload: response.data.cart });
  };
  //DECREASE ITEM FUNCTION
  const decreaseQuantity = async (_id, qty, setDisabled) => {
    if (qty === 1) {
      removeFromCart(_id);
      setDisabled(false);
    } else {
      const response = await axios.post(
        `/api/user/cart/${_id}`,
        { action: { type: 'decrement' } },
        {
          headers: { authorization: token.token },
        }
      );
      setDisabled(false);
      cartDispatch({ type: 'DECREASE_QUANTITY', payload: response.data.cart });
    }
  };
  //INCREASE ITEM FUNCTION
  const increaseQuantity = async _id => {
    const response = await axios.post(
      `/api/user/cart/${_id}`,
      { action: { type: 'increment' } },
      { headers: { authorization: token.token } }
    );
    cartDispatch({ type: 'INCREASE_QUANTITY', payload: response.data.cart });
  };
  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
