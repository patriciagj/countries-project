const favourite = index => {
  return {
    type: 'FAVOURITE',
    payload: index,
  };
};

const unfavourite = index => {
  return {
    type: 'UNFAVOURITE',
    payload: index,
  };
};

const favourites = {
  favourite,
  unfavourite,
};

export default favourites;
