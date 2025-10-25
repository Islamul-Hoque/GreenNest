import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword,  GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()
googleProvider.addScope('email') 

const AuthProvider = ( {children} ) => {
    const [ user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = ( email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup( auth, googleProvider )
    }

    const ForgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if(currentUser) {
            const email = currentUser.email || currentUser.providerData?.[0]?.email;
            setUser({ ...currentUser, email });
        } else {
            setUser(null);
        }
        setLoading(false);
    });

    return ()=> {
            unsubscribe()
        }
}, []);

    const userInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signInUser,
        updateUser,
        googleSignIn,
        signOutUser,
        ForgotPassword
    }

    return (
        <AuthContext value={userInfo}> 
            {children}
        </AuthContext>
    );
};

export default AuthProvider;