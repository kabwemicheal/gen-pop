import React, { useContext } from "react";
import BorrowersShow from "./BorrowerShow";
import BorrowerModal from "./BorrowerModal";
import { BorrowersContext } from "../../data-access/BorrowersContext";
import { Button } from "@mui/material";
import { VscAdd } from "react-icons/vsc";


const BorrowersList = () => {
  const { open, setOpen } = useContext(BorrowersContext);

  const handleModle = () => {
    setOpen(!open);
  };

  return (

    <div className="flex flex-col mt-3">
      {open && <BorrowerModal />}
      <div className="flex justify-between items-center">
        <span></span>
        <div className="flex items-center space-x-2">
          <Button
            variant="contained"
            color="primary"
            startIcon={<VscAdd />}
            onClick={handleModle}
          ></Button>
          <button className="text-white bg-slate-900 rounded-lg px-3 py-2">
            generate report
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light text-white">
                <thead className="border-b bg-slate-900 font-medium dark:border-slate-900 dark:bg-slate-900">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Date of borrow
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Date of return
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>{<BorrowersShow />}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowersList;


