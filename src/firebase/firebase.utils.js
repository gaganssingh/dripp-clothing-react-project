import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHMUxphclgyN-U_TnfAZgDyqwXLA9bdmU",
  authDomain: "dripp-clothing-react-project.firebaseapp.com",
  projectId: "dripp-clothing-react-project",
  storageBucket: "dripp-clothing-react-project.appspot.com",
  messagingSenderId: "392487425807",
  appId: "1:392487425807:web:537516722bf4c0564ed07a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
