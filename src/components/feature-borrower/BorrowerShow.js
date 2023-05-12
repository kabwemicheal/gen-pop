import React from "react";

const BorrowersShow = ({ borrowerInfo }) => {
  return (
    <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
      <td className="whitespace-nowrap px-6 py-4">#</td>
      <td className="whitespace-nowrap px-6 py-4">{borrowerInfo.name}</td>
      <td className="whitespace-nowrap px-6 py-4">{borrowerInfo.amount}</td>
      <td className="whitespace-nowrap px-6 py-4">
        {borrowerInfo.borrow_date}
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        {borrowerInfo.return_date}
      </td>
    </tr>
  );
};

export default BorrowersShow;
