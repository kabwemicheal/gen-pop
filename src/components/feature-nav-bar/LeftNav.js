import React from "react";
import { Link } from "react-router-dom";

const LeftNav = ({ leftMenuItems }) => {

  const displayItems = leftMenuItems.map((item, index) => (
    <Link key={index} to={item.path} className="flex space-x-2 items-center hover:text-black hover:p-2 hover:bg-neutral-50 rounded-sm ease-in-out cursor-pointer">
      <i className="text-xl">{item.icon}</i>
      <span className="text-sm font-medium">{item.name}</span>
    </Link>
  ));

  return (
    <nav className="flex flex-col text-white">
      <div className="flex flex-row">
        <div className="flex-1/2 bg-slate-900 z-50 pt-3 border-gray-300  px-4 space-y-5 min-w-fit h-screen shadow-lg">
          {displayItems}
        </div>
      </div>
    </nav>
  );
};

export default LeftNav;
