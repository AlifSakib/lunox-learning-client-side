import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  //? States
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //? Create New User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //? Update User Info
  const updateInfo = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  //? Login User
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //? LogOut User
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //? User State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (createUser) => {
      setUser(createUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const value = {
    user,
    createUser,
    updateInfo,
    logInUser,
    logOutUser,
    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
