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

// // SEED SHOP DATA TO FIREBASE
// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = firestore.collection(collectionKey);
//   console.log(collectionRef);

//   const batch = firestore.batch();
//   objectsToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });

//   return await batch.commit();
// };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
