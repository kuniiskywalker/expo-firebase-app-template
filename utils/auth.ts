const firebase = require("firebase").default;
import { firebaseAuth } from '../firebase'
import * as Expo from 'expo'

export async function signInWithFacebook() {

    const manifest = Expo.Constants.manifest;

    const appId = manifest.extra && manifest.extra.facebook ? manifest.extra.facebook.appId : '';
    const permissions = ['public_profile', 'email'];
    const {
        type,
        token,
    } = await Expo.Facebook.logInWithReadPermissionsAsync(
        appId,
        {permissions}
    );

    switch (type) {
        case 'success': {
            await firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            const facebookProfileData = await firebaseAuth.signInAndRetrieveDataWithCredential(credential);

            return Promise.resolve({
                email: facebookProfileData.user.email,
                displayName: facebookProfileData.user.displayName,
                photoURL: facebookProfileData.user.photoURL,
            });
        }
        case 'cancel': {
            return Promise.reject({type: 'cancel'});
        }
    }
}