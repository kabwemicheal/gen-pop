import { firebaseConfigApp } from "../firebase/config/FirebaseConfig"
import {addDoc, getFirestore, collection, getDocs} from 'firebase/firestore';

const db = getFirestore(firebaseConfigApp)

export const getBorrowers = async(collectionKey) => {
    try {
       const querySnapshot = await getDocs(collection(db, collectionKey))
       return querySnapshot.docs.map(doc => doc.data())
    } catch (e) {
        console.log(e)
    }
}

export const createBorrower = async() => {
    try {
        const docRef = await addDoc(collection(db, "borrowers"), {
            name: 'Kabwe Micheal',
            amount: 300,
            borrow_date: Date.now(),
            return_date: new Date().setDate(new Date().getDate() + 30)
        })
        console.log(docRef)
    } catch (e) {
        console.log(e)
    }
}