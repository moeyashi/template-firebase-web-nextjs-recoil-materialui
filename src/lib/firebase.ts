import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import 'firebase/storage';
import "firebase/analytics";

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Check that `window` is in scope for the analytics module!
export let firestore: firebase.firestore.Firestore;
export let firebaseAuth: firebase.auth.Auth;
if (typeof window !== "undefined" && firebase.apps.length === 0) {
  firebase.initializeApp(clientCredentials);
  if ("measurementId" in clientCredentials) {
    firebase.analytics();
  }
  firestore = firebase.firestore();
  firebaseAuth = firebase.auth();
}

export default firebase;
