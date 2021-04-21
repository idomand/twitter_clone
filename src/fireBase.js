import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiCexTi7CSoIG3UzBR-88NYMpQMYQ9Pj0",
  authDomain: "ido-react-micro-blogging.firebaseapp.com",
  databaseURL:
    "https://ido-react-micro-blogging-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ido-react-micro-blogging",
  storageBucket: "ido-react-micro-blogging.appspot.com",
  messagingSenderId: "28358221776",
  appId: "1:28358221776:web:f536fa07d84870b2bf63d5",
  measurementId: "G-1EK9TX4CLG",
};
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const fireStoreApp = firebase.initializeApp(firebaseConfig);
export const auth = fireStoreApp.auth();
export const firestore = firebase.firestore();

export default firebase;
