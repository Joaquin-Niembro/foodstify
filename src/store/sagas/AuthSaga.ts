import {call, take, takeEvery, put, fork} from 'redux-saga/effects';
import {SIGN_UP, SIGN_IN} from '../types';
import {SignUp, SignIn} from '../api';
import {sign_up_err, sign_up_success} from '../actions';

function* signupWorker({payload}: any) {
  try {
    const {user} = yield call(SignUp, payload);
    yield put(sign_up_success(user));
  } catch (err) {
    yield put(sign_up_err());
  }
}

function* signinWorker({payload}: any) {
  try {
    const {user} = yield call(SignIn, payload);
    yield put(sign_up_success(user));
  } catch (err) {
    yield put(sign_up_err());
  }
}
export default function* AuthWatcher() {
  yield takeEvery(SIGN_UP, signupWorker);
  yield takeEvery(SIGN_IN, signinWorker);
}
