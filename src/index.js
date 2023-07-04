import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BorrowersProvider } from "./data-access/BorrowersContext";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./data-access/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <BorrowersProvider>
          <App />
        </BorrowersProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
