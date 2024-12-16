import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const signUpNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        return signOut(auth);
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user => {
            setUser(user)
            setLoading(false)
        }))
        return () => unSubscribe();
    }, [user])

    const authInfo = {
        user,
        setUser,
        signUpNewUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        updateUserProfile,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;