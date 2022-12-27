import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../Firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email, password)
    };
    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }


    const signIn =(email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email, password)
    };

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
     const unsubscribe =   onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
            console.log(currentUser);
        })
        return () =>{
            unsubscribe()
        }
    },[])

    const googleSignIn = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // const user = {displayName: 'Nayan'};
    const authInfo = {user, loading,  createUser, signIn, googleSignIn, logOut, updateUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;