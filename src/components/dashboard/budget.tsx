import { useState } from "react";
import TransactionModel from "../modal/Transactionmodal";
import BudgetForm from "../budget";

export default function BudgetVsExpense() {
    const [isBudget, setBudget] = useState(false)
    return (
        <><div className="bg-white p-6 rounded-lg  text-center w-full lg:w-1/3 mx-auto">
            {/* Title */}
            <h2 className="text-lg font-bold text-gray-800">Budget Vs Expense</h2>
            <p className="text-sm text-gray-500">From 01 - 22 August</p>

            <div className="mt-2 py-2">
                <p className="text-gray-600 font-semibold">71% Completed</p>
                <div className="relative mt-2 h-4 bg-gray-200 rounded-lg">
                    <div
                        className="absolute top-0 left-0 h-full bg-blue-500 rounded-lg"
                        style={{ width: '71%' }}
                    ></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">Remaining: 09 Days</p>
            </div>

            {/* Budget Data */}
            <p className="text-2xl font-bold text-gray-800 mt-4">$8,630</p>
            <p className="text-sm text-gray-500">of $12,000</p>
            <div className="flex justify-end">
                {/* <button className="border p-1 w-24">+ Create</button>
                <button className="border p-1 w-24">Edit</button> */}
                <button onClick={()=> setBudget(true)} className="border p-1 w-24 ">Manage</button>
            </div>
        </div>
        {isBudget && (
            <TransactionModel children={<BudgetForm/>} onClose={()=>setBudget(false)} />
        )}
        </>
        
    );
}