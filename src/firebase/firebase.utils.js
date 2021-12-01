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

// CHECK IF USER ALREADY EXISTS ON FIREBASE
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // IF USER SIGNED OUT, & userAuth OBJ CHANGES TO null, DO NOTHING
  if (!userAuth) {
    return;
  }

  // Check if data for the loggedin user exists on firebase
  // This could be shopping cart items from a prev visit etc.
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  // If user data doesn't exist on firebase
  if (!snapshot.exists) {
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
      console.log("Error creating user: " + error.message);
    }
  }

  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
