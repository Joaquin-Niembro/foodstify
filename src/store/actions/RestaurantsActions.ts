import {
  GET_RESTAURANTS,
  GET_RESTAURANTS_FAILURE,
  GET_RESTAURANTS_SUCCESS,
} from '../types';
interface Irestaurant {
  name: String;
  city: String;
  menu: String;
  recommended: Boolean;
  bc: String;
}
export function get_restaurants_fetch() {
  return {
    type: GET_RESTAURANTS,
  };
}

export function get_restaurants_success(restaurants: Irestaurant[]) {
  return {
    type: GET_RESTAURANTS_SUCCESS,
    payload: restaurants,
  };
}

export function get_restaurants_err() {
    return {
      type: GET_RESTAURANTS_FAILURE,
    };
  }