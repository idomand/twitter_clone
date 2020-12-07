import React, { useContext, useState, useEffect } from "react";
import { auth } from "../fireBase";
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

    return unsubscribe;
  }, []);

  const signUp = (email, password) => {
    console.log("this is the signUp function");
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const logIn = (email, password) => {
    console.log("this is the logIn function");
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logOut = () => {
    console.log("this is log out func");
    return auth.signOut();
  };

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
