import React, { createContext, useState, useEffect } from "react";
import {
  getBorrowers,
  createBorrowerApi,
  deleteBorrowerApi,
  editBorrowerApi,
} from "./api-calls/BorrowerApi";

 import { COLLECTION_KEYS } from "../utils/CollectionKeys";
import handleDateUtil from "../utils/handleDateUtil";
import { calculateInterest, calculateAmountToReturn } from "../utils/handleInterestUtil";
export const BorrowersContext = createContext();

export const BorrowersProvider = ({ children }) => {
  const [borrowers, setBorrowers] = useState({});
  const [totals, setTotals] = useState({})
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(true)


  useEffect(() => {
   (async function(){
    await getAllBorrowers(COLLECTION_KEYS.BORROWERS)  
   })();
  }, [])

   useEffect(() => {
    (async function(){
      await getTotals()
    })()
   }, [borrowers])

  const getAllBorrowers = async (collectionKey) => {
    const res = await getBorrowers(collectionKey);
    if (!!res) {
      setLoader(false)
      setBorrowers(res);
    }
  };

  const createBorrowerContext = async (borrower, collectionKey) => {
   let interest = calculateInterest(borrower.tenure, borrower.amount)
   let amountReturned = calculateAmountToReturn(borrower.tenure, borrower.amount)
   let dateOfReturn = handleDateUtil(borrower.date, borrower.tenure).toString()
   let borrowerToAdd = {...borrower, interest, amountReturned, dateOfReturn}
   const addedBorrower = await createBorrowerApi(borrowerToAdd, collectionKey);
    if (!!addedBorrower) {
      borrowers[addedBorrower.id] = borrowerToAdd;
      setBorrowers({ ...borrowers });
      setLoader(false)
    }
  };

  const editBorrowerContext = async (id, collectionKey, borrower) => {
    let interest = calculateInterest(borrower.tenure, borrower.amount)
    let amountReturned = calculateAmountToReturn(borrower.tenure, borrower.amount)
    let dateOfReturn = handleDateUtil(borrower.date, borrower.tenure).toString()
    let borrowerToUpdate = {...borrower, interest, amountReturned, dateOfReturn}
    const updated = await editBorrowerApi(id, collectionKey, borrowerToUpdate);
    if (updated === undefined) {
      const updateBorrowers = Object.keys(borrowers).reduce((acc, val) => {
        if (val === id) {
          borrowers[id] = borrowerToUpdate;
        }
        return acc;
      }, {});
      setBorrowers({ ...borrowers, ...updateBorrowers });
      setLoader(false)
    }
  };

  const deleteBorrowerContext = async (params) => {
    const deleted = await deleteBorrowerApi(params.collectionKey, params.id);
    if (deleted === undefined) {
      const filterBorrowerList = Object.keys(borrowers)
        .filter((key) => key !== params.id)
        .reduce((acc, val) => {
          acc[val] = borrowers[val];
          return acc;
        }, {});
      setBorrowers({ ...filterBorrowerList });
      setLoader(false)
    }
  };

  const getTotals = async() => {
    if(Object.keys(borrowers).length !== 0){
     const interest =  Object.keys(borrowers).reduce((acc, key)=>{
        acc += borrowers[key].interest
        return acc
       },0)

       const amountInvested =  Object.keys(borrowers).reduce((acc, key)=>{
        acc += Number(borrowers[key].amount)
        return acc
       }, 0)

      const profitMargin =  Math.floor((interest / amountInvested) * 100)+"%"
      const clients =  Object.keys(borrowers).length
      
      setTotals({interest, amountInvested, profitMargin, clients})
    }
  } 
 

  const borrowersProps = {
    borrowers,
    getAllBorrowers,
    createBorrowerContext,
    deleteBorrowerContext,
    editBorrowerContext,
    isEditing,
    setIsEditing,
    open,
    setOpen,
    loader,
    setLoader,
    totals
  };

  return (
    <BorrowersContext.Provider value={borrowersProps}>
      {children}
    </BorrowersContext.Provider>
  );
};
