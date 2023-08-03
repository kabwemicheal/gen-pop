import React, { useContext } from "react";
import TopNav from "../feature-nav-bar/TopNav";
import LeftNav from "../feature-nav-bar/LeftNav";
import { Outlet } from "react-router-dom";
import { CiHome, CiViewList } from "react-icons/ci";
import { UserContext } from "../../data-access/UserContext";

const Dashboard = () => {

  const {user} = useContext(UserContext)
  
  const leftMenuItems = [
    {
      path: "/dashboard",
      icon: <CiHome />,
      name: "Home"
    },
    { 
      path: "/dashboard/borrowers",
      icon: <CiViewList />,
      name: "Borrowers"
    },
  ];

  return (
    <>
    {!!user && <div className="flex flex-col">
      <TopNav isDynamic={true} />
      <div className="flex flex-row">
        <LeftNav leftMenuItems={leftMenuItems} />
        <div className="flex-1 z-50 border border-gray-300 px-3">
          <Outlet  />
        </div>
      </div>
    </div> }
    
    </>
    
  );
};

export default Dashboard;
