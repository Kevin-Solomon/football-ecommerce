const ADD_TO_CART = 'ADD_TO_CART';
const INITIALIZE = 'INITIALIZE';
const DELETE = 'DELETE';
const RESET = 'RESET';
const wishListReducerFunction = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return [...payload];
    case INITIALIZE:
      return [...payload];
    case DELETE:
      return [...payload];
    case RESET:
      return [];
    default:
      return [...state];
  }
};
export { wishListReducerFunction };
