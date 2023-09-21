import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
const [user, setUser]= useState(null)
const [loading, setLoading]= useState(true)
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth , googleProvider)
    }
    const githubSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth , githubprovider)
    }

    const logOut =()=>{
        return signOut(auth);
    }

//obsurve userrr state
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
          });
          //unmounting mean user ogone obsurbe off
          return ()=>{
            return unsubscribe()
          } 
    },[])
    // const loggedUser =()=>{
    //     onAuthStateChanged(auth, (user =>{
    //         if (user) {
    //             const uid = user.uid;
    //           } 
    //     }))
    // }


    const authinfo={
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        logOut,
    }
    
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;