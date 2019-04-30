import { firebaseAuth, firebaseStorage } from './firebase'
import { signInWithFacebook } from './utils/auth'
import * as Auth from './constants/Auth'

export const submitSignIn = (params: {email: string, password: string}) => {
    return (dispatch: any) => {
        dispatch({ type: Auth.SIGNIN_REQUEST });

        firebaseAuth.signInWithEmailAndPassword(params.email, params.password)
            .then((user: any) => {
                dispatch({ type: Auth.SIGNIN_SUCCESS, user });
            })
            .catch(() => {
                dispatch({ type: Auth.SIGNIN_ERROR });
            });
    }
}

export const submitSignOut = () => {
    return (dispatch: any) => {
        dispatch({ type: Auth.SIGNOUT_REQUEST });

        firebaseAuth.signOut()
            .then(() => {
                dispatch({ type: Auth.SIGNOUT_SUCCESS });
            })
            .catch(() => {
                dispatch({ type: Auth.SIGNOUT_ERROR });
            });
    }
}

export const submitSignUp = (params: {email: string, password: string, displayName: string}) => {
    return (dispatch: any) => {
        dispatch({ type: Auth.SIGNUP_REQUEST });

        firebaseAuth.createUserWithEmailAndPassword(params.email, params.password)
            .then((result: any) => {
                return result.user.updateProfile({
                    displayName: params.displayName,
                })
            })
            .then(() => {
                dispatch({ type: Auth.SIGNUP_SUCCESS });
            })
            .catch(() => {
                // Handle Errors here.
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // ...
                dispatch({ type: Auth.SIGNUP_ERROR });
            });
    }
}

export const submitFacebookLogin = () => {
    return (dispatch: any) => {
        dispatch({ type: Auth.SIGNIN_REQUEST });

        signInWithFacebook()
            .then(user => {
                dispatch({ type: Auth.SIGNIN_SUCCESS, user });
            })
            .catch(() => {
                dispatch({ type: Auth.SIGNIN_ERROR });
            });
    }
}

export const changeAuthedState = (user: any) => {
    return (dispatch: any) => {
        dispatch({ type: Auth.SIGNIN_SUCCESS, user });
    }
}

export const updateProfileImage = (uri: string) => {
    return async (dispatch: any) => {
        dispatch({ type: Auth.UPDATE_PROFILE_IMAGE_REQUEST });

        try {
            const blob = await new Promise((resolve: (value: string) => void, reject) => {
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
            // blob.close();

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
