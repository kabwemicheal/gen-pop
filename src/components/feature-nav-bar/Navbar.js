import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { CiHome, CiUser, CiViewList } from "react-icons/ci";
import { UserContext } from "../../data-access/UserContext";
import Login from "../feature-auth/Login";
import { Button } from "@mui/material";

const Navbar = () => {
  const { user, logOutContext} = useContext(UserContext);


  return (
    <>
     
        <div className="flex flex-col">
          <nav className="flex flex-row text-white justify-between items-center w-screen min-h-fit py-5 bg-slate-900 px-4">
            <span className="text-xl font-bold z-50 pl-2">Gen pop</span>
            <div className="flex space-x-2 items-center pr-2">
              <CiUser />    
              <button className="z-50 rounded-sm hover:ease-in-out hover:bg-neutral-50 px-3 hover:text-black" onClick={() =>logOutContext()}>logout</button>
            </div>
          </nav>
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
        </div>

    </>
  );
};

export default Navbar;
