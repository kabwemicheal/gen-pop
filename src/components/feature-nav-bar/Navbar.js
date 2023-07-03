import React from "react";
import { Link, Outlet } from "react-router-dom";

import { CiHome, CiViewList } from "react-icons/ci";


const Navbar = () => {
  return (
    <nav className="flex flex-col text-white">
      <div className="flex flex-row">
        <div className="flex-1/2 bg-slate-900 z-50 pt-3 border-gray-300  px-4 space-y-5 min-w-fit h-screen shadow-lg">
          <Link to="/" className="flex space-x-2 items-center">
            <i className="text-xl">
              <CiHome />
            </i>
            <span className="text-sm font-medium">Home</span>
          </Link>
          <Link to="/borrowers" className="flex space-x-2 items-center">
            <i className="text-xl">
              <CiViewList />
            </i>
            <span className="text-sm font-medium">Borrowers</span>
          </Link>
        </div>
        <div className="flex-1 z-50 border border-gray-300 px-3">
          <Outlet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
