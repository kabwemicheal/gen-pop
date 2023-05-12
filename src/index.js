import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BorrowersProvider } from "./data-access/BorrowersContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BorrowersProvider>
      <App />
    </BorrowersProvider>
  </React.StrictMode>
);
