import React, { useContext, useState } from "react";

import { CiEdit, CiTrash } from "react-icons/ci";
import { BorrowersContext } from "../../data-access/BorrowersContext";
import { COLLECTION_KEYS } from "../../utils/CollectionKeys";

import EditBorrower from "./EditBorrower";

const BorrowersShow = () => {
  const [borrowerParams, setBorrowerParams] = useState({
    id: '',
    borrower: {}
  })

  const { borrowers, deleteBorrowerContext, isEditing, setIsEditing} =
    useContext(BorrowersContext);

  const handleDelete = async (id) => {
    deleteBorrowerContext(COLLECTION_KEYS.BORROWERS, id);
  };

  const handleEdit = (id, borrower) => {
    setIsEditing(true)
    setBorrowerParams({id, borrower})
  }

  return (
    <>
      {Object.keys(borrowers).map(
        (key, index) =>
          key && (
            <tr
              key={key}
              className="border-b bg-slate-900  dark:border-slate-900 dark:bg-slate-900"
            >
              <td className="whitespace-nowrap px-6 py-4">{index + 1}</td>
              <td className="whitespace-nowrap px-6 py-4">
                {
                  borrowers[key].firstName
                    .concat(" ")
                    .concat(borrowers[key].lastName)}{" "}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                {borrowers[key].amount}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                {borrowers[key].date}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                {borrowers[key].tenure}
              </td>
              <td className="flex items-center space-x-2 px-6 py-4">
                <span
                  className="hover:text-black hover:bg-neutral-50 rounded-md p-1 ease-in-out"
                  onClick={() => handleEdit(key, borrowers[key])}
                >
                  <CiEdit className="text-xl" />
                </span>
               
                <span
                  className="hover:text-black hover:bg-neutral-50 rounded-md p-1 ease-in-out cursor-pointer"
                  onClick={() => handleDelete(key)}
                >
                  <CiTrash className="text-xl" />
                </span>
              </td>
            </tr>
          )
      )}
      {isEditing && <EditBorrower  borrowerParams={borrowerParams}  />}
    </>
  );
};

export default BorrowersShow;
