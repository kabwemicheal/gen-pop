import React from "react";

import BorrowersList from "./feature-components/feature-borrower/BorrowersList";
import { Route, Routes} from "react-router-dom";
import Home from "./feature-components/Home/Home";
import Login from "./feature-components/feature-auth/Login";
import Dashboard from "./feature-components/feature-dashboard/Dashboard";
import LandingPage from "./feature-components/Home/LandingPage";

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
