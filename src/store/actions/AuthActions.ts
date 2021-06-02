import {
  SIGN_UP,
  SIGN_OUT,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_IN,
} from '../types';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
interface MyFormValues {
  name: string;
  email: string;
  password: string;
  repeatpassword: string;
}
interface signinValues {
  name: string;
  email: string;
  password: string;
  repeatpassword: string;
}
export function sign_up_fectch(user: MyFormValues) {
  return {
    type: SIGN_UP,
    payload: user,
  };
}

export function sign_up_err() {
  return {
    type: SIGN_UP_FAILURE,
  };
}

export function sign_up_success(user: FirebaseAuthTypes.UserCredential) {
  return {
    type: SIGN_UP_SUCCESS,
    payload: user,
  };
}

export function sign_in_fetch(user: signinValues) {
  return {
    type: SIGN_IN,
    payload: user,
  };
}
