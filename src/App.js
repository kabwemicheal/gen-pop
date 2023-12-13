import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./feature-components/feature-auth/Login";
import SignUp from "./feature-components/feature-auth/SignUp";
import Dashboard from './feature-components/feature-dashboard/Dashboard'
import Home from './feature-components/Home/Home'
import LandingPage from './feature-components/Home/LandingPage'
import BorrowersList from "./feature-components/feature-borrower/BorrowersList";


function App() { 
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="borrowers" element={<BorrowersList />} />
      </Route>
    </Routes>
  );
}

export default App;
