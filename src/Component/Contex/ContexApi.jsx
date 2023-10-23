import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { getAuth } from "firebase/auth";
import app from "../../Firebase/Firebase.confiq";
export const AutContext = createContext(null)
const ContexApi = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser]=useState(null);
    const [loading, setlodding]=useState(true);
   
  

 const createuser=(email,password)=>{
    setlodding(true)
    return createUserWithEmailAndPassword(auth, email, password)
} 
const SinIn=(email,password)=>{
    setlodding(true)
    return signInWithEmailAndPassword(auth, email, password)
} 

const LogOut = ()=>{
    setlodding(true)
    return signOut(auth)
}

useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, courentUser=>{
         setUser(courentUser);
         setlodding(false)
     })
     return()=>{
         unSubscribe();
     } 
 },[])
const info = {
    user,
    loading,
    createuser,
     SinIn,
      LogOut
    }

    return (
        <AutContext.Provider value={info}>
            {children}
        </AutContext.Provider>
    );
};
ContexApi.propTypes = {
    children:PropTypes.node

}
export default ContexApi;