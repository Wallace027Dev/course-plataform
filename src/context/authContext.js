import React, { createContext, useState, useEffect, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../services/firebase";

const AuthContext = createContext();

export function useAuth(){
	return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signUp(auth, email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
