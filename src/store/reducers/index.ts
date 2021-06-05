import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import RestaurantsReducer from './RestaurantsReducer';
const rootReducer = combineReducers({
  Auth: AuthReducer,
  Restaurants: RestaurantsReducer
});
export default rootReducer;
