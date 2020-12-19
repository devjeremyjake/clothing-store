import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBj9txj1NyNw4vi_CYidpPerfJvJWpqRUw',
	authDomain: 'cloth-store-6e366.firebaseapp.com',
	projectId: 'cloth-store-6e366',
	storageBucket: 'cloth-store-6e366.appspot.com',
	messagingSenderId: '682052670749',
	appId: '1:682052670749:web:dba9cf3d5412826346bdf4',
	measurementId: 'G-ND8WGXWHZ6',
};

// Save new goggle signIn user in Database
export const createUserprofileDocument = async (userAuth, additionalData) => {
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('Error creating User', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Goggle Auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoggle = () => auth.signInWithPopup(provider);

export default firebase;
