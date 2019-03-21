import { firebaseAuth } from './firebase'
import { signInWithFacebook } from './utils/auth'
import * as Auth from './constants/Auth'

export const submitSignIn = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: Auth.SIGNIN_REQUEST });

        firebaseAuth.signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({ type: Auth.SIGNIN_SUCCESS, user });
            })
            .catch(() => {
                dispatch({ type: Auth.SIGNIN_ERROR });
            });
    }
}

export const submitSignOut = () => {
    return (dispatch) => {
        dispatch({ type: Auth.SIGNOUT_REQUEST });

        firebaseAuth.signOut()
            .then(user => {
                dispatch({ type: Auth.SIGNOUT_SUCCESS });
            })
            .catch(() => {
                dispatch({ type: Auth.SIGNOUT_ERROR });
            });
    }
}

export const submitSignUp = ({ email, password, displayName }) => {
    return (dispatch) => {
        dispatch({ type: Auth.SIGNUP_REQUEST });

        firebaseAuth.createUserWithEmailAndPassword(email, password)
            .then(result => {
                return result.user.updateProfile({
                    displayName: displayName,
                })
            })
            .then(user => {
                dispatch({ type: Auth.SIGNUP_SUCCESS });
            })
            .catch(error => {
                // Handle Errors here.
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // ...
                dispatch({ type: Auth.SIGNUP_ERROR });
            });
    }
}

export const submitFacebookLogin = () => {
    return (dispatch) => {
        dispatch({ type: Auth.SIGNIN_REQUEST });

        signInWithFacebook()
            .then(user => {
                dispatch({ type: Auth.SIGNIN_SUCCESS, user });
            })
            .catch(e => {
                dispatch({ type: Auth.SIGNIN_ERROR });
            });
    }
}
