import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
  browserSessionPersistence,
} from "firebase/auth";

const auth = getAuth();
export const signUpUserApi = async (userCredentials) => {
  try {
    await setPersistence(auth, browserSessionPersistence)
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
    await setPersistence(auth, browserSessionPersistence)
    const res = await signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    );
    return res.user
  } catch (error) {
    return {error: true}
  }
};

export const logOutUserApi = async () => {
  try {
    await setPersistence(auth, browserSessionPersistence)
    return await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export const onAuthStateChangedListener = async(callBack) => onAuthStateChanged(auth, callBack)
