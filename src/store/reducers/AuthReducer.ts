import {SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_OUT} from '../types';
const initialState = {
  user: null,
};
function AuthReducer(state = initialState, action: any) {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        user: action.payload,
      };
    case SIGN_UP_FAILURE:
      return {
        user: null,
      };
    case SIGN_OUT:
      return {
        user: null,
      };
    default:
      return state;
  }
}

export default AuthReducer;
