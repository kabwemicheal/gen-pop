import React, { useContext, useEffect } from 'react';
import Login from './components/feature-auth/Login';
import BorrowersList from './components/feature-borrower/BorrowersList';
import { createBorrower, getBorrowers } from './api-calls/BorrowerApi';
import { BorrowersContext } from './data-access/BorrowersContext';
import Navbar from './components/feature-nav-bar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateBorrower from './components/feature-borrower/CreateBorrower';


function App() {
  const {getAllBorrowers} = useContext(BorrowersContext)
  //createBorrower()
  //getBorrowers()
  useEffect(() => {
    getAllBorrowers()
  }, [])
  
  return (
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/borrowers' element={<BorrowersList />}/> 
          <Route path='/borrowers/add' element={<CreateBorrower />}/>
        </Route>
      </Routes>
  );
}

export default App;