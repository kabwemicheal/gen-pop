import React, { useContext } from "react";
import { BorrowersContext } from "../../data-access/BorrowersContext";
import Login from "../feature-auth/Login";

const Home = () => {
  const {totals} = useContext(BorrowersContext);
  return (
    <div className="pt-3 space-y-5">
      <div className="flex h-32 space-x-2">
        <div className="flex flex-1 justify-center items-center border rounded-lg shadow-sm bg-slate-900">
          <div className="z-50 flex flex-col space-y-2 items-center text-white text-base font-extrabold">
            <span className="text-lg">Clients</span>
            <span className="text-3xl font-extralight">{totals.clients}</span>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center border rounded-lg shadow-sm bg-purple-950">
        <div className="z-50 flex flex-col space-y-2 items-center text-white text-base font-extrabold">
            <span className="text-lg">Amount Invested</span>
            <span className="text-3xl font-extralight">$ {totals.amountInvested}</span>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center border rounded-lg shadow-sm bg-teal-800">
        <div className="z-50 flex flex-col space-y-2 items-center text-white text-base font-extrabold">
            <span className="text-lg">Interest</span>
            <span className="text-3xl tracking-tight font-extralight">$ {totals.interest}</span>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center border rounded-lg shadow-sm bg-blue-800">
        <div className="z-50 flex flex-col space-y-2 items-center text-white text-base font-extrabold">
            <span className="text-lg">Profit Margin</span>
            <span className="text-3xl  font-extralight">{totals.profitMargin}</span>
          </div>
        </div>
      </div>
      <div className="flex h-12">
        <div className="flex-1 border rounded-sm shadow-sm bg-amber-700"></div>
        <div className="border rounded-sm shadow-sm bg-slate-500 flex-grow-2 flex-1/2"></div>
      </div>
    </div>
  );
};

export default Home;
