const ADD_TO_CART = 'ADD_TO_CART';
const wishListReducerFunction = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return [...state, { ...payload }];
    case 'INTIAL':
      return [...state, ...payload];
    default:
      return [...state];
  }
};
export { wishListReducerFunction };
