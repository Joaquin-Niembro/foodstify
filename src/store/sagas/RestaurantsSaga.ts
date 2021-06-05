import {call, take, takeEvery, put, fork} from 'redux-saga/effects';
import {GET_RESTAURANTS} from '../types';
import {getRestaurants} from '../api';
import {get_restaurants_success, get_restaurants_err} from '../actions';

function* getRestaurantsWorker(): any {
  try {
    const {_docs} = yield call(getRestaurants);
    yield put(get_restaurants_success(_docs));
  } catch (err) {
    yield put(get_restaurants_err());
  }
}

export default function* RestaurantsWatcher() {
  yield takeEvery(GET_RESTAURANTS, getRestaurantsWorker);
}
