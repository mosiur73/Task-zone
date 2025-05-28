import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
 export const AuthContext=createContext(null)
  const googleProvider = new GoogleAuthProvider()
export const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
}
const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  useEffect( ()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
        
        setLoading(false)
    })
    return()=>{
        return unsubscribe()
    }
  },[])
  
    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        signOutUser,
        signInWithGoogle,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;