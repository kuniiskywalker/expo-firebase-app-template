const firebase = require("firebase").default;

import Constants from 'expo-constants';

const manifest = Constants.manifest;

let firebaseConfig = {};
if (manifest.extra && manifest.extra.firebase) {
    firebaseConfig = manifest.extra.firebase;
}

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth(firebaseApp);
export const firebaseStorage = firebase.storage(firebaseApp);
// export const firebaseDb = firebase.database(firebaseApp);