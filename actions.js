import { firebaseAuth, firebaseStorage } from './firebase'
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

export const changeAuthedState = user => {
    return (dispatch) => {
        dispatch({ type: Auth.SIGNIN_SUCCESS, user });
    }
}

export const updateProfileImage = uri => {
    return async function(dispatch) {
        dispatch({ type: Auth.UPDATE_PROFILE_IMAGE_REQUEST });

        try {
            const blob = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = function() {
                    resolve(xhr.response);
                };
                xhr.onerror = function(e) {
                    console.log(e);
                    reject(new TypeError('Network request failed'));
                };
                xhr.responseType = 'blob';
                xhr.open('GET', uri, true);
                xhr.send(null);
            });

            const user = firebaseAuth.currentUser;

            let storageRef = firebaseStorage.ref().child(`profile/${user.uid}.jpg`);

            const snapshot = await storageRef.put(blob, {contentType: 'image/jpg'});
            blob.close();

            const photoURL = await snapshot.ref.getDownloadURL();

            await user.updateProfile({
                photoURL: photoURL,
            });
            dispatch({ type: Auth.UPDATE_PROFILE_IMAGE_SUCCESS, photoURL });
        } catch (err) {
            dispatch({ type: Auth.UPDATE_PROFILE_IMAGE_ERROR});
        }
    }
}
