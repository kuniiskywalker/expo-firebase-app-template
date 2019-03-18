import { firebaseAuth } from './firebase'
import { signInWithFacebook } from './utils/auth'

export const submitSignIn = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: 'login_start' });

      firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: 'signin_success' });
        dispatch({ type: 'signin_end' });
      })
      .catch(() => {
        dispatch({ type: 'signin_fail' });
        dispatch({ type: 'signin_end' });
      });
  }
}

export const submitSignUp = ({ email, password, displayName }) => {
    return (dispatch) => {
        dispatch({ type: 'signup_start' });

        firebaseAuth.createUserWithEmailAndPassword(email, password)
            .then(function (result) {
                return result.user.updateProfile({
                    displayName: displayName,
                })
            })
            .then(function () {
                dispatch({ type: 'signup_success' });
                dispatch({ type: 'signup_end' });
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                dispatch({ type: 'signup_fail' });
                dispatch({ type: 'signup_end' });
            });
    }
}

export const submitFacebookLogin = () => {
    return (dispatch) => {
        dispatch({ type: 'signin_start' });

        signInWithFacebook()
            .then(user => {
                dispatch({ type: 'signin_success' });
                dispatch({ type: 'signin_end' });
            })
            .catch(e => {
                dispatch({ type: 'signin_fail' });
                dispatch({ type: 'signin_end' });
            });
    }
}
