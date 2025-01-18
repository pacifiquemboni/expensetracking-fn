import { useState } from "react";
import TransactionModel from "../modal/Transactionmodal";
import TransactionForm from "../transaction/TransactionForm";

export default function Transaction() {
        const [isTransaction, setTransaction] = useState(false)
    
    const transactions = [
        { id: 1, date: '2025-01-15', type: 'Expense', amount: '$120.00', actions: 'View' },
        { id: 2, date: '2025-01-14', type: 'Income', amount: '$1,000.00', actions: 'View' },
        { id: 3, date: '2025-01-13', type: 'Expense', amount: '$45.50', actions: 'View' },
        { id: 4, date: '2025-01-12', type: 'Expense', amount: '$78.90', actions: 'View' },
        { id: 5, date: '2025-01-11', type: 'Income', amount: '$2,500.00', actions: 'View' },
    ];

    return (
        <div className="bg-white p-6  w-full max-w-4xl mx-auto">
            {/* Title */}
            <div className="flex justify-between items-center">
               <h2 className="text-lg font-bold text-gray-800 mb-4">
                Recent Transactions

            </h2> 
            <button onClick={() => setTransaction(true)} className="border bg-white rounded-lg p-2">+ Add Transaction</button>
            </div>
            

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 text-left text-gray-600 font-medium border-b">Date</th>
                            <th className="px-4 py-2 text-left text-gray-600 font-medium border-b">Type</th>
                            <th className="px-4 py-2 text-left text-gray-600 font-medium border-b">Amount</th>
                            <th className="px-4 py-2 text-left text-gray-600 font-medium border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border-b text-gray-700">{transaction.date}</td>
                                <td className="px-4 py-2 border-b text-gray-700">{transaction.type}</td>
                                <td className="px-4 py-2 border-b text-gray-700">{transaction.amount}</td>
                                <td className="px-4 py-2 border-b">
                                    <button className="text-blue-500 hover:underline">{transaction.actions}</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isTransaction && (
                <TransactionModel children={<TransactionForm />} onClose={()=>setTransaction(false)}/>
            )}
        </div>
    );
}
