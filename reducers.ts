import { combineReducers } from 'redux';

import * as Auth from './constants/Auth';

const INITIAL_STATE = {
    email: '',
    displayName: '',
    photoURL: '',
    loading: false,
    loggedIn: false
}

const AuthReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case Auth.SIGNIN_REQUEST:
        case Auth.SIGNUP_REQUEST:
        case Auth.SIGNOUT_REQUEST:
            return { ...state, loading: true }
        case Auth.SIGNIN_SUCCESS:
        case Auth.SIGNUP_SUCCESS:
            return {
                ...state,
                email: action.payload.email,
                displayName: action.payload.displayName,
                photoURL: action.payload.photoURL,
                loading: false,
                loggedIn: true
            }

        case Auth.SIGNOUT_SUCCESS:
            return INITIAL_STATE
        case Auth.SIGNIN_ERROR:
        case Auth.SIGNUP_ERROR:
        case Auth.SIGNOUT_ERROR:
            return { ...state, loading: false, loggedIn: false }

        case Auth.UPDATE_PROFILE_IMAGE_REQUEST:
            return { ...state, loading: true }
        case Auth.UPDATE_PROFILE_IMAGE_SUCCESS:
            return {
                ...state,
                photoURL: action.payload.photoURL,
                loading: false
            }
        case Auth.UPDATE_PROFILE_IMAGE_ERROR:
            return { ...state, loading: false }

        case Auth.PASSWORD_REMINDER_REQUEST:
            return { ...state, loading: true }
        case Auth.PASSWORD_REMINDER_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case Auth.PASSWORD_REMINDER_ERROR:
            return { ...state, loading: false }

        default:
            return state;
    }
};

export default combineReducers({
    auth: AuthReducer
});
