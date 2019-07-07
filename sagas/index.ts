import { all, put, takeEvery, call } from 'redux-saga/effects';
import * as Auth from '../constants/Auth'

import { firebaseAuth, firebaseStorage } from '../firebase'
import { signInWithFacebook } from '../utils/auth'

function* handleFacebookSignIn() {
    try {
        const user = yield call(signInWithFacebook);
        yield put({type: Auth.FACEBOOK_SIGNIN_SUCCESS, user});
    } catch (error) {
        yield put({type: Auth.FACEBOOK_SIGNIN_ERROR});
    }
}

function* handleSignIn(action: any) {
    try {
        const { email, password } = action.payload;
        const user = yield call(firebaseAuth.signInWithEmailAndPassword, email, password);
        yield put({type: Auth.SIGNIN_SUCCESS, user});
    } catch (error) {
        yield put({type: Auth.SIGNIN_ERROR});
    }
}

async function getBlogUri(uri: string) {
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

    return await snapshot.ref.getDownloadURL();
}

function* handleUpdateProfileImage(action: any) {
    try {

        const { uri } = action.payload;
        const photoURL = yield call(getBlogUri, uri);

        const user = firebaseAuth.currentUser;

        user.updateProfile({
            photoURL
        });
        yield put({ type: Auth.UPDATE_PROFILE_IMAGE_SUCCESS, payload: {
            photoURL
        }});
    } catch (err) {
        yield put({ type: Auth.UPDATE_PROFILE_IMAGE_ERROR});
    }
}

function* handleSignUp(action: any) {
    try {

        const { email, password, displayName } = action.payload;
        const result = yield call(firebaseAuth.createUserWithEmailAndPassword, email, password);

        result.user.updateProfile({
            displayName
        });
        yield put({ type: Auth.SIGNUP_SUCCESS});

    } catch (err) {
        yield put({ type: Auth.SIGNUP_ERROR});
    }
}

function* handleSignOut() {
    try {

        yield call([firebaseAuth, firebaseAuth.signOut])

        yield put({ type: Auth.SIGNOUT_SUCCESS});

    } catch (err) {
        yield put({ type: Auth.SIGNOUT_ERROR});
    }
}

function* handlePasswordReminder(action: any) {
    try {
        const { email } = action.payload;

        yield call([firebaseAuth, firebaseAuth.sendPasswordResetEmail], email);

        yield put({ type: Auth.PASSWORD_REMINDER_SUCCESS});

    } catch (err) {
        yield put({ type: Auth.PASSWORD_REMINDER_ERROR});
    }
}

export default function* rootSaga() {
    yield all([
        yield takeEvery( Auth.FACEBOOK_SIGNIN_REQUEST, handleFacebookSignIn ),
        yield takeEvery( Auth.SIGNIN_REQUEST, handleSignIn ),
        yield takeEvery( Auth.UPDATE_PROFILE_IMAGE_REQUEST, handleUpdateProfileImage ),
        yield takeEvery( Auth.SIGNUP_REQUEST, handleSignUp ),
        yield takeEvery( Auth.SIGNOUT_REQUEST, handleSignOut ),
        yield takeEvery( Auth.PASSWORD_REMINDER_REQUEST, handlePasswordReminder ),
    ]);
}