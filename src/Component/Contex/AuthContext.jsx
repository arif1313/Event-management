import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.confiq";

const AuthContexts = createContext(null);
const AuthContext = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser]= useState(null)


    const signUpNew = (email, password)=>
    {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const creactAcount=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout =()=>{
       return signOut(auth)
    }


    
        const info = { user, signUpNew,creactAcount,logout}
    return (
       <AuthContexts.Provider value={info}> 
       {children}
       </AuthContexts.Provider>
    );
};
AuthContext.propTypes={
    children:PropTypes.node
}
export default AuthContext;