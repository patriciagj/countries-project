const favourites = (state = [], action) => {
  switch (action.type) {
    case 'FAVOURITE':
      return [...state, action.payload];

    case 'UNFAVOURITE':
      return state.filter(index => index !== action.payload);
    default:
      return state;
  }
};

export default favourites;
