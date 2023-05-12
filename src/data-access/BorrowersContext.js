import React, { createContext, useState } from "react";
import { getBorrowers } from "../api-calls/BorrowerApi";

export const BorrowersContext = createContext();

export const BorrowersProvider = ({ children }) => {
  const [borrowers, setBorrowers] = useState([]);

  const getAllBorrowers = async () => {
    const res = await getBorrowers()
    if(!!res) {
      setBorrowers(res)
    }
  }

  const createBorrower = () => {
    
  }

  const borrowersProps = {
    borrowers,
    getAllBorrowers,
  };

  return (
    <BorrowersContext.Provider value={borrowersProps}>
      {children}
    </BorrowersContext.Provider>
  );
};
