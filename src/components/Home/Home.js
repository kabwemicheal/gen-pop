import React, { useContext } from "react";
import { BorrowersContext } from "../../data-access/BorrowersContext";
import Login from "../feature-auth/Login";

const Home = () => {
  const { borrowers } = useContext(BorrowersContext);
  return (
    <div className="pt-3 space-y-5">
      <div className="flex h-12 space-x-2">
        <div className="flex flex-1 justify-center items-center h-full border rounded-lg shadow-sm bg-purple-400">
          <span className="z-50">
            Number of borrowers: {!!borrowers && Object.entries(borrowers).length}
          </span>
        </div>
        <div className="flex-1 border rounded-lg shadow-sm bg-teal-800"></div>
        <div className="flex-1 border rounded-lg shadow-sm bg-teal-800"></div>
      </div>
      <div className="flex h-12">
        <div className="flex-1 border rounded-sm shadow-sm bg-amber-700"></div>
        <div className="border rounded-sm shadow-sm bg-slate-500 flex-grow-2 flex-1/2"></div>
      </div>
    </div>
  );
};

export default Home;
