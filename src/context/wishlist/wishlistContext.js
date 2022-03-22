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
  const addToWishlist = async (product, token, setDisabled) => {
    if (token === null) {
      setDisabled(false);
      return console.error('No user');
    } else {
      if (checkItem(wishlistState, product)) {
        setDisabled(false);
        return console.error('Item Already exist in wishlist');
      } else {
        try {
          const response = await axios.post(
            '/api/user/wishlist',
            { product },
            { headers: { authorization: token } }
          );
          setDisabled(false);
          wishlistDispatch({
            type: 'ADD_TO_CART',
            payload: response.data.wishlist,
          });
        } catch (err) {
          setDisabled(false);
          console.error(err);
        }
      }
    }
  };
  function checkItem(state, itemToCheck) {
    let flag = false;
    state.forEach(item => {
      if (item._id === itemToCheck._id) {
        flag = true;
      }
    });
    return flag;
  }
  const deleteFromWishlist = async id => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: { authorization: token.token },
      });
      wishlistDispatch({ type: 'DELETE', payload: response.data.wishlist });
    } catch (err) {
      console.error(err);
    }
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
