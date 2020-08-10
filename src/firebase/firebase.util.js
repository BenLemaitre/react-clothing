import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmHC6IX-bSi-2bbkpoSSIlV2oDeIUyFIE",
  authDomain: "react-clothing-b4c0a.firebaseapp.com",
  databaseURL: "https://react-clothing-b4c0a.firebaseio.com",
  projectId: "react-clothing-b4c0a",
  storageBucket: "react-clothing-b4c0a.appspot.com",
  messagingSenderId: "213132285615",
  appId: "1:213132285615:web:f7f20888e91301e287665a",
  measurementId: "G-HV8RPSTK80",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
