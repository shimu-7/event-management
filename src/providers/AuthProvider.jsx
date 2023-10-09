import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password, username, photo) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, username, photo);
    }

    const googleSignIn = ()=>{
        setIsLoading(true);
        return signInWithPopup(auth, provider);
    }



    const logIn = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setIsLoading(false);
        });
        return () => unSubscribe();
    }, []);

    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
    }

    const authInfo = { user, createUser, logIn, logOut, isLoading, googleSignIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;