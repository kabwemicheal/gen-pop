import React, { useContext } from "react";

import BorrowersList from "./components/feature-borrower/BorrowersList";
import { Route, Routes, redirect, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import { UserContext } from "./data-access/UserContext";
import Login from "./components/feature-auth/Login";
import Dashboard from "./components/feature-dashboard/Dashboard";
import LandingPage from "./components/Home/LandingPage";

function App() { 
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="borrowers" element={<BorrowersList />} />
      </Route>
    </Routes>
  );
}

export default App;
