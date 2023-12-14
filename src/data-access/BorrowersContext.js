import React, { createContext, useState, useEffect } from "react";
import {
  getBorrowers,
  createBorrowerApi,
  deleteBorrowerApi,
  editBorrowerApi,
} from "./api-calls/BorrowerApi";

 import { COLLECTION_KEYS } from "../utils/CollectionKeys";
import { amountToReturn, handleInterest } from "../utils/handleInterestUtil";
import handleDateUtil from "../utils/handleDateUtil";

export const BorrowersContext = createContext();

export const BorrowersProvider = ({ children }) => {
  const [borrowers, setBorrowers] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(true)


  useEffect(() => {
   (async function(){
    await getAllBorrowers(COLLECTION_KEYS.BORROWERS)
   })();
  }, [])

  const getAllBorrowers = async (collectionKey) => {
    const res = await getBorrowers(collectionKey);
    if (!!res) {
      setLoader(false)
      setBorrowers(res);
    }
  };

  const createBorrowerContext = async (borrower, collectionKey) => {
   let interest = handleInterest(borrower.tenure, borrower.amount)
   let amountReturned = amountToReturn(borrower.tenure, borrower.amount)
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
    let interest = handleInterest(borrower.tenure, borrower.amount)
    let amountReturned = amountToReturn(borrower.tenure, borrower.amount)
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
    setLoader
  };

  return (
    <BorrowersContext.Provider value={borrowersProps}>
      {children}
    </BorrowersContext.Provider>
  );
};
