import { createContext, useEffect, useState } from "react";
import {
  logOutUserApi,
  loginUserApi,
  onAuthStateChangedListener,
  signUpUserApi,
} from "./api-calls/UserAuth";
import { redirect } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true)

  useEffect(()=>{
    const unsubscribeFromAuth = onAuthStateChangedListener((user)=> {
     if (!!user){
      setLoader(false)
      setUser(user)
     }
     return redirect('/')
    })
  }, [])

  const signUpUserContext = async (userCredentials) => await signUpUserApi(userCredentials);
    

  const loginUserContext = async (userCredentials) => await loginUserApi(userCredentials);
  

  const logOutContext = async () => {
    const user = await logOutUserApi();
    if (!user) {
      setUser(null);
    }
  };

  const userProps = {
    signUpUserContext,
    loginUserContext,
    user,
    loader,
    logOutContext,
  };
  return (
    <UserContext.Provider value={userProps}>{children}</UserContext.Provider>
  );
};
