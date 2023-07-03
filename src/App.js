import React from "react";

import BorrowersList from "./components/feature-borrower/BorrowersList";

import Navbar from "./components/feature-nav-bar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/borrowers" element={<BorrowersList />} />
      </Route>
    </Routes>
  );
}

export default App;
