const initialCartState = {
  cart: [],
  totalPrice: 0,
};
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_ITEM = 'DELETE_ITEM';
const DELETE_EXTRA_ITEM = 'DELETE_EXTRA_ITEM';
const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
function cartReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...action.payload] };
    case DELETE_ITEM:
      console.log('in delete');
      return { ...state, cart: [...action.payload] };
    case DELETE_EXTRA_ITEM:
      console.log('in delete extra');
      return { ...state, cart: [...action.payload] };
    case DECREASE_QUANTITY:
      return { ...state, cart: [...action.payload] };
    case INCREASE_QUANTITY:
      return { ...state, cart: [...action.payload] };
    default:
      return { ...state };
  }
}

export { initialCartState, cartReducer };