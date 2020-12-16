import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyC_L1viKSye3uiRLxdeQvCxzhkbutJR9E4",
  authDomain: "shopping-56e43.firebaseapp.com",
  projectId: "shopping-56e43",
  storageBucket: "shopping-56e43.appspot.com",
  messagingSenderId: "215981502567",
  appId: "1:215981502567:web:910b6e5041ca90f93fa4c2",
  measurementId: "G-5PSM4R7HKG",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
