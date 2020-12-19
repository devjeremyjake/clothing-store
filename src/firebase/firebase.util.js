import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBj9txj1NyNw4vi_CYidpPerfJvJWpqRUw",
    authDomain: "cloth-store-6e366.firebaseapp.com",
    projectId: "cloth-store-6e366",
    storageBucket: "cloth-store-6e366.appspot.com",
    messagingSenderId: "682052670749",
    appId: "1:682052670749:web:dba9cf3d5412826346bdf4",
    measurementId: "G-ND8WGXWHZ6"
};

firebase.initializeApp(config);
export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Goggle Auth
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoggle = () => auth.signInWithPopup(provider)
  
export default firebase;