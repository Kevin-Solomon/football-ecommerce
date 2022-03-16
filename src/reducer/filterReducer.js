const initialState = {
  price: 5000,
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
const filterReducer = (state, action) => {
  switch (action.type) {
    case HIGH_TO_LOW:
      return { ...state, sortBy: 'HIGH_TO_LOW' };
    case JERSEY:
      return { ...state, jersey: !state.jersey };
    case BOOTS:
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
  }
};

export { initialState, filterReducer };
