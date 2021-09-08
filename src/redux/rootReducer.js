import favourites from './reducers/favouriteCountry';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  favourites,
});

export default rootReducer;
