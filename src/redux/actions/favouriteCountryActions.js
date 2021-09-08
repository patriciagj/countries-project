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

export default {
  favourite,
  unfavourite,
};
