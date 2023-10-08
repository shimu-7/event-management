import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logIn =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }


    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        });
        return ()=> unSubscribe();
    },[]);

    const logOut = () =>{
        return signOut(auth);
    }

    const authInfo={user,createUser,logIn,logOut}
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