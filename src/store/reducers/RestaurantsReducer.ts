import {
  GET_RESTAURANTS,
  GET_RESTAURANTS_FAILURE,
  GET_RESTAURANTS_SUCCESS,
} from '../types';
const initialState = {
  restaurants: [],
};
function RestaurantsReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_RESTAURANTS_SUCCESS:
      return {
        restaurants: action.payload,
      };
    case GET_RESTAURANTS:
      return state;
    case GET_RESTAURANTS_FAILURE:
      return {
        restaurants: [],
      };
    default:
      return state;
  }
}

export default RestaurantsReducer;
