import {all} from 'redux-saga/effects';
import AuthSaga from './AuthSaga';
import RestaurantsSaga from './RestaurantsSaga';
export default function* rootSaga() {
  yield all([AuthSaga(), RestaurantsSaga()]);
}
