import { initializeApp } from "firebase/app";
import { FirebaseApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

//Web app firebase configurations files
const firebaseConfig = {
  apiKey: "AIzaSyBk-AaANUNsRuhm2MXn6bsX_oyHl7oRK0M",
  authDomain: "puremike-clothing-db.firebaseapp.com",
  projectId: "puremike-clothing-db",
  storageBucket: "puremike-clothing-db.appspot.com",
  messagingSenderId: "84344044756",
  appId: "1:84344044756:web:586665cd186981c6c54f41",
};

//initialize the firebase app
const firebaseApp = initializeApp(firebaseConfig);

//create a provider for GoogleSignIn
const googleSignInProvider = new GoogleAuthProvider().setCustomParameters({
  prompt: "select_account",
});

//export getAuth and signInWithPop
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleSignInProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userBucket = await getDoc(userDocRef);
  console.log(userDocRef);
  console.log(userBucket);
};
