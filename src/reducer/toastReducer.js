const initialReducerState = [];

const toastReducer = (state, { type, payload }) => {
  console.log(state, payload);
  switch (type) {
    case 'ADD_TOAST':
      return [...state, payload];
    case 'DELETE_TOAST':
      return state.filter(({ _id }) => _id !== payload);
    default:
      return state;
  }
};

export { toastReducer, initialReducerState };
