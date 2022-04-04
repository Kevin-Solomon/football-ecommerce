import { createContext, useContext, useReducer, useEffect } from 'react';
import { useAuth } from '../auth/authContext';
import axios from 'axios';
import { wishListReducerFunction } from '../../reducer/wishlistReducer';
import { useToast } from '../toast/toastContext';
const WishlistContext = createContext();
import { v4 as uuid } from 'uuid';
const WishlistProvider = ({ children }) => {
  const { toastDispatch } = useToast();
  console.log(toastDispatch);
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
      toastDispatch({
        type: 'ADD_TOAST',
        payload: {
          _id: uuid(),
          message: `User must be Logged In to access these features !`,
          autoDelete: 3000,
          theme: 'danger',
        },
      });
      return console.error('No user');
    } else {
      if (checkItem(wishlistState, product)) {
        setDisabled(false);
        toastDispatch({
          type: 'ADD_TOAST',
          payload: {
            _id: uuid(),
            message: 'Item Already exist in wishlist',
            autoDelete: 3000,
          },
        });
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
          toastDispatch({
            type: 'ADD_TOAST',
            payload: {
              _id: uuid(),
              message: `${product.name} has been moved to your wishlist`,
              autoDelete: 3000,
            },
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
  const deleteFromWishlist = async (id, name) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: { authorization: token.token },
      });
      wishlistDispatch({ type: 'DELETE', payload: response.data.wishlist });
      toastDispatch({
        type: 'ADD_TOAST',
        payload: {
          _id: uuid(),
          message: `${name} has been removed from your wishlist`,
          autoDelete: 3000,
          theme: 'danger',
        },
      });
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
