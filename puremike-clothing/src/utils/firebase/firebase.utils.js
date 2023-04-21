import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

//firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk-AaANUNsRuhm2MXn6bsX_oyHl7oRK0M",
  authDomain: "puremike-clothing-db.firebaseapp.com",
  projectId: "puremike-clothing-db",
  storageBucket: "puremike-clothing-db.appspot.com",
  messagingSenderId: "84344044756",
  appId: "1:84344044756:web:586665cd186981c6c54f41",
};

//initialize the firebaseApp
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider().setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
