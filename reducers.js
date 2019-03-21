import { combineReducers } from 'redux';

import * as Auth from './constants/Auth';

const INITIAL_STATE = {
    email: '',
    displayName: '',
    photoURL: '',
    loading: false,
    loggedIn: ""
}

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case Auth.SIGNIN_REQUEST:
      case Auth.SIGNUP_REQUEST:
      case Auth.SIGNOUT_REQUEST:
          return { ...state, loading: true }
      case Auth.SIGNIN_SUCCESS:
      case Auth.SIGNUP_SUCCESS:
          return {
              ...state,
              email: action.user.email,
              displayName: action.user.displayName,
              photoURL: action.user.photoURL,
              loading: false,
              loggedIn: true
          }
      case Auth.SIGNOUT_SUCCESS:
          return { ...state, loading: false, loggedIn: false }
      case Auth.SIGNIN_ERROR:
      case Auth.SIGNUP_ERROR:
      case Auth.SIGNOUT_ERROR:
          return { ...state, loading: false, loggedIn: false }

      case Auth.UPDATE_PROFILE_IMAGE_REQUEST:
          return { ...state, loading: true }
      case Auth.UPDATE_PROFILE_IMAGE_SUCCESS:
          return {
              ...state,
              photoURL: action.photoURL,
              loading: false
          }
      case Auth.SIGNOUT_ERROR:
          return { ...state, loading: false }

      default:
          return state;
    }
};
 
export default combineReducers({
  auth: AuthReducer
});
