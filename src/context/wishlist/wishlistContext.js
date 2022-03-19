import { createContext, useContext, useReducer, useEffect } from 'react';
import { useAuth } from '../auth/authContext';
import axios from 'axios';
import { wishListReducerFunction } from '../../reducer/wishlistReducer';
const WishlistContext = createContext();
const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishListReducerFunction,
    []
  );
  const { token } = useAuth();
  useEffect(() => {
    const getWishlistItems = async () => {
      try {
        const response = await axios.get('/api/user/wishlist', {
          headers: {
            authorization: token.token,
          },
        });
        wishlistDispatch({
          type: 'INITIALIZE',
          payload: response.data.wishlist,
        });
      } catch (err) {
        console.log(err.response);
      }
    };
    getWishlistItems();
  }, [token.token]);
  const addToWishlist = async (product, token) => {
    if (token === null) {
      return console.error('No user');
    } else {
      if (checkItem(wishlistState, product)) {
        return console.error('Item Already exist in wishlist');
      } else {
        const response = await axios.post(
          '/api/user/wishlist',
          { product },
          { headers: { authorization: token } }
        );
        wishlistDispatch({
          type: 'ADD_TO_CART',
          payload: response.data.wishlist,
        });
      }
    }
  };
  function checkItem(state, itemToCheck) {
    let flag = false;
    state.forEach(item => {
      if (item._id === itemToCheck._id) {
        console.log('sike4');
        flag = true;
      }
    });
    return flag;
  }
  const deleteFromWishlist = async id => {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: { authorization: token.token },
    });
    wishlistDispatch({ type: 'DELETE', payload: response.data.wishlist });
  };
  return (
    <WishlistContext.Provider
      value={{ wishlistState, addToWishlist, deleteFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
