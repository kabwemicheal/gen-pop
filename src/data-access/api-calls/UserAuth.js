import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseConfigApp } from "../../firebase/config/FirebaseConfig";

const auth = getAuth(firebaseConfigApp);

export const signUpUserApi = async (userCredentials) => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    );
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const loginUserApi = async (userCredentials) => {
  try {
    const res = await signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    );
    
    return res.user
   
  } catch (error) {
    console.log(error);
  }
};

export const logOutUserApi = async () => {
  try {
    return await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export const onAuthStateChangedListener = async(callBack) => onAuthStateChanged(auth, callBack)
