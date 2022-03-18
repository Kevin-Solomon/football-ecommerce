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
  console.log(token.token);
  useEffect(() => {
    const getWishlistItems = async () => {
      try {
        const response = await axios.get('/api/user/wishlist', {
          headers: {
            authorization: token.token,
          },
        });
        console.log('response in useeffext of cart context', response);
        wishListDispatch({
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
        console.log(response);
        wishlistDispatch({ type: 'ADD_TO_CART', payload: product });
      }
    }
  };
  function checkItem(state, itemToCheck) {
    let flag = false;
    state.forEach(item => {
      if (item.id === itemToCheck.id) {
        console.log('sike4');
        flag = true;
      }
    });
    return flag;
  }
  const deleteFromWishlist = async id => {
    console.log(id);
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: { authorization: token.token },
    });
    console.log(response);
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
