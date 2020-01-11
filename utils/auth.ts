const firebase = require("firebase").default;
import { firebaseAuth } from '../firebase';
import Constants from 'expo-constants';
import * as Facebook from 'expo-facebook';

export async function signInWithFacebook() {

    const manifest = Constants.manifest;

    const appId = manifest.extra && manifest.extra.facebook ? manifest.extra.facebook.appId : '';
    const appName = manifest.extra && manifest.extra.facebook ? manifest.extra.facebook.appName : '';

    const permissions = ['public_profile', 'email'];

    await Facebook.initializeAsync(appId, appName);
    const result = await Facebook.logInWithReadPermissionsAsync({
        permissions: permissions,
    });

    switch (result.type) {
        case 'success': {
            await firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
            const credential = firebase.auth.FacebookAuthProvider.credential(result.token);
            const facebookProfileData = await firebaseAuth.signInWithCredential(credential);

            return Promise.resolve({
                email: facebookProfileData.user.email,
                displayName: facebookProfileData.user.displayName,
                photoURL: facebookProfileData.user.photoURL,
            });
        }
        case 'cancel': {
            return Promise.reject({type: 'cancel'});
        }
        default: {
            debugger;
        }
    }
}