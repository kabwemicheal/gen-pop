import React, { useContext } from "react";

import BorrowersList from "./components/feature-borrower/BorrowersList";

import Navbar from "./components/feature-nav-bar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { UserContext } from "./data-access/UserContext";
import Login from "./components/feature-auth/Login";

function App() {
  const { user } = useContext(UserContext);
  return (
    <Routes>
      {!!user ? (
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/borrowers" element={<BorrowersList />} />
        </Route>
      ) : (
        <Route path="/"  element={<Login />} />
      )}
    </Routes>
  );
}

export default App;
