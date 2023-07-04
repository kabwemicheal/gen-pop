import { onAuthStateChanged } from "firebase/auth";
import { firebaseConfigApp } from "../../firebase/config/FirebaseConfig"
import {addDoc, getFirestore, collection, getDocs, doc,updateDoc, deleteDoc} from 'firebase/firestore';

const db = getFirestore(firebaseConfigApp)

export const getBorrowers = async(collectionKey) => {
    try {
       const querySnapshot = await getDocs(collection(db, collectionKey))

       return querySnapshot.docs.reduce((acc, doc) =>{
        acc[doc.id] = doc.data()
        return acc
       }, {})
    } catch (e) {
        console.log(e)
    }
}

export const createBorrowerApi = async(borrower, collectionKey) => {
    try {
        return await addDoc(collection(db, collectionKey), borrower)
    } catch (e) {
        console.log(e)
    }
}

export const editBorrowerApi = async(id, collectionKey, borrower) => {
    try {
        return await updateDoc(doc(db, collectionKey, id ), borrower)
    } catch (e) {
        console.log(e)
    }
}

export const deleteBorrowerApi = async (collectionKey, id) => {
    try{
       return await deleteDoc(doc(db, collectionKey, id))
    }catch(e) {
        console.log(e)
    }
}

