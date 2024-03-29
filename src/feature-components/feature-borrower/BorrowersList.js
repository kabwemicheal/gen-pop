import React, { useContext, useState } from "react";
import BorrowersShow from "./BorrowerShow";
import BorrowerModal from "./BorrowerModal";
import { BorrowersContext } from "../../data-access/BorrowersContext";
import { Button, TablePagination, TextField } from "@mui/material";
import { VscAdd } from "react-icons/vsc";
import { CSVLink } from "react-csv";
import { TableRowsLoader } from "../../UI/Skeleton/Table";


const BorrowersList = () => {
  const { open, setOpen, loader, borrowers } = useContext(BorrowersContext);

  const handleModle = () => {
    setOpen(!open);
  };

  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const headers = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Amount", key: "amount" },
    { label: "Interest", key: "interest" },
    { label: "Amount to Return", key: "amountReturned" },
    { label: "Date of borrow", key: "date" },
    { label: "Date of return", key: "tenure" },
    { label: "Address", key: "address" },
  ];
  

  const data = Object.keys(borrowers).map((key) => borrowers[key]);

  return (
    <>
      {loader ? (
        <>
         <TableRowsLoader rowsNum={10} />
        </>
        
      ) : (
        <div style={{overflowY: "auto", overflowX:"hidden", width: "100%", height:"80%"}} className="flex flex-col mt-3">
          {open && <BorrowerModal />}
          <div className="flex justify-between items-center my-3">
            <div className="flex w-1/2 items-center space-x-2">
              <TextField
                id="SearchText"
                label="SearchText"
                name="text"
                type="text"
                fullWidth
                required
                variant="standard"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="contained"
                color="primary"
                startIcon={<VscAdd />}
                onClick={handleModle}
              ></Button>
              <CSVLink
                headers={headers}
                data={data}
                filename="borrowers.csv"
                target="_blank"
                className="text-white bg-slate-900 rounded-md px-3 py-1"
              >
                generate report
              </CSVLink>
            </div>
          </div>
          <div className="flex flex-col ov">
            <div className="sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="">
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
                          Amount Borrowed
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Interest
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Amount to return 
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Tenure in Months
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Date of borrow
                        </th>
                        <th scope="col" className="px-6 py-4">
                          D.O.R
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
            <TablePagination
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BorrowersList;
