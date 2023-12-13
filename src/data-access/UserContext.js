import { createContext, useEffect, useState } from "react";
import {
  logOutUserApi,
  loginUserApi,
  onAuthStateChangedListener,
  signUpUserApi,
} from "./api-calls/UserAuth";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      await onAuthStateChangedListener((user) => {
        if (!!user) {
          setUser(user);
          return navigate("/dashboard");
        }
        return navigate("/");
      });
    })();
  }, [user]);

  const signUpUserContext = async (userCredentials) =>
    await signUpUserApi(userCredentials);

  const loginUserContext = async (userCredentials) =>
    await loginUserApi(userCredentials);

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
    logOutContext,
  };
  return (
    <UserContext.Provider value={userProps}>{children}</UserContext.Provider>
  );
};
