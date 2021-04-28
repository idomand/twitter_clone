import React, { useContext, useState, useEffect } from "react";
import firebase from "firebase/app";
import { auth, googleAuthProvider } from "../fireBase";
const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
// ======
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    // return unsubscribe;
  }, []);

  const signUpWithEmail = (email, password) => {
    setCurrentUser("");
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const updateUser = (name) => {
    var user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
        photoURL: "https://example.com/jane-q-user/profile.jpg",
      })
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  const logInWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  const logIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logOut = () => {
    return auth.signOut();
  };

  const value = {
    currentUser,
    signUpWithEmail,
    logInWithGoogle,
    logIn,
    logOut,
    updateUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
