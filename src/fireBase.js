import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDiCexTi7CSoIG3UzBR-88NYMpQMYQ9Pj0",
  authDomain: "ido-react-micro-blogging.firebaseapp.com",
  databaseURL:
    "https://ido-react-micro-blogging-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ido-react-micro-blogging",
  storageBucket: "ido-react-micro-blogging.appspot.com",
  messagingSenderId: "28358221776",
  appId: "1:28358221776:web:11d06f2745e5b803bf63d5",
  measurementId: "G-LZJNQF9W5C",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* //!======THIS IS THE OLD VERSION OF THE FIREBASE FILE ------ START ================= */
// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDiCexTi7CSoIG3UzBR-88NYMpQMYQ9Pj0",
//   authDomain: "ido-react-micro-blogging.firebaseapp.com",
//   databaseURL:
//     "https://ido-react-micro-blogging-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "ido-react-micro-blogging",
//   storageBucket: "ido-react-micro-blogging.appspot.com",
//   messagingSenderId: "28358221776",
//   appId: "1:28358221776:web:11d06f2745e5b803bf63d5",
//   measurementId: "G-LZJNQF9W5C",
// };
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// export const fireStoreApp = firebase.initializeApp(firebaseConfig);
// export const auth = fireStoreApp.auth();
// export default firebase;
/* //!======THIS IS THE OLD VERSION OF THE FIREBASE FILE ------ END ================= */
