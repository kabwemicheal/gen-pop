import React, { useContext, useEffect } from 'react';
import Login from './components/feature-auth/Login';
import BorrowersList from './components/feature-borrower/BorrowersList';
import { createBorrower, getBorrowers } from './api-calls/BorrowerApi';
import { BorrowersContext } from './data-access/BorrowersContext';


function App() {
  const {getAllBorrowers} = useContext(BorrowersContext)
  //createBorrower()
  //getBorrowers()
  useEffect(() => {
    getAllBorrowers()
  }, [])
  return (
    <div className='' >
      <BorrowersList />
    </div>
  );
}

export default App;
