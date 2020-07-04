import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC1urSjf7WcFqWlEwhvupgLXx6H0MmoQSE',
  authDomain: 'crwn-db-46006.firebaseapp.com',
  databaseURL: 'https://crwn-db-46006.firebaseio.com',
  projectId: 'crwn-db-46006',
  storageBucket: 'crwn-db-46006.appspot.com',
  messagingSenderId: '859955629346',
  appId: '1:859955629346:web:cdae2b06a02bdf6a5e697b',
  measurementId: 'G-8YZ99174MR',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
