import firebase from 'firebase';

const config = Expo.Constants.manifest.extra.firebase;

export const firebaseApp = firebase.initializeApp(config);
export const firebaseAuth = firebase.auth(firebaseApp);
export const firebaseStorage = firebase.storage(firebaseApp);
export const firebaseDb = firebase.database(firebaseApp);