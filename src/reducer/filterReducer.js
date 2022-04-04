const initialState = {
  price: 20000,
  sortBy: null,
  jersey: false,
  boots: false,
  sneakers: false,
  football: false,
  rating: null,
};
const HIGH_TO_LOW = 'HIGH_TO_LOW';
const LOW_TO_HIGH = 'LOW_TO_HIGH';
const JERSEY = 'jersey';
const BOOTS = 'boots';
const SNEAKERS = 'sneakers';
const FOOTBALL = 'football';
const PRICE = 'price';
const RATING = 'rating';
const RESET = 'RESET';
const filterReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case HIGH_TO_LOW:
      return { ...state, sortBy: 'HIGH_TO_LOW' };
    case JERSEY:
      return { ...state, jersey: !state.jersey };
    case BOOTS:
      console.log('in boots');
      console.log('in boots', { ...state, boots: !state.boots });
      return { ...state, boots: !state.boots };
    case SNEAKERS:
      return { ...state, sneakers: !state.sneakers };
    case FOOTBALL:
      return { ...state, football: !state.football };
    case PRICE:
      return { ...state, price: action.payload };
    case RATING:
      return { ...state, rating: action.payload };
    case LOW_TO_HIGH:
      return { ...state, sortBy: 'LOW_TO_HIGH' };
    case RESET:
      return initialState;
    default:
      throw new Error('Something wrong occured in filter dispatch');
  }
};

export { initialState, filterReducer };
