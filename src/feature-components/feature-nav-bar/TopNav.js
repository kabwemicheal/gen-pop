import React, { useContext } from "react";
import { UserContext } from "../../data-access/UserContext";
import { CiUser } from "react-icons/ci";
import { Link} from "react-router-dom";

const TopNav = ({isDynamic}) => {
    const {logOutContext} = useContext(UserContext);
  return (
    <nav className="flex flex-row text-white justify-between items-center w-screen min-h-fit py-5 bg-slate-900 px-4">
      <span className="text-xl font-bold z-50 pl-2">Gen pop</span>
      <div className="flex space-x-2 items-center pr-2">
        <CiUser />
        {
            isDynamic ?  <button
            className="z-50 rounded-sm hover:ease-in-out hover:bg-neutral-50 px-3 hover:text-black"
            onClick={() => logOutContext()}
          >
            logout
          </button> :
           <Link
           to="login"
           className="z-50 rounded-sm hover:ease-in-out hover:bg-neutral-50 px-3 hover:text-black"
         >
           Login
         </Link>
        }
       
      </div>
    </nav>
  );
};

export default TopNav;
