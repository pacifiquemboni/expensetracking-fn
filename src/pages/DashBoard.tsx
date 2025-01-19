import BudgetVsExpense from "../components/dashboard/budget";
import Category from "../components/dashboard/category";
import ExpenseDistribution from "../components/dashboard/expense";
import Profile from "../components/dashboard/Profile";
import Transaction from "../components/dashboard/transaction";
import bgImage from '../assets/bg.jpg';
import { useLayoutEffect, useState } from "react";
import TransactionModel from "../components/modal/Transactionmodal";
import TransactionForm from "../components/transaction/TransactionForm";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";




export default function DashBoard() {
    const navigate = useNavigate();
    const [isTransaction, setTransaction] = useState(false)
    useLayoutEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/'); // Redirect to login if token is not found
        }
      }, [navigate]);
      const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/'); // Redirect to login page
      };
    return (
        <div className="min-h-screen bg-gray-100" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <div className=" lg:p-5">

                <div className="flex mx-5 lg:mx-0 justify-between items-center ">
                    <h1 className="hidden lg:block text-3xl font-bold mb-4 text-white">Dashboard</h1>
                    {/* <p className="text-white">Notification</p> */}
                    <p className="text-white" onClick={handleLogout}>Logout</p>
                    <button onClick={() => setTransaction(true)} className="border bg-white rounded-lg p-2">+ Add Transaction</button>
                </div>
                <div className=" flex flex-col p-2 rounded-lg ">
                    <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg">
                        <Profile />
                        <BudgetVsExpense />
                        <ExpenseDistribution />
                    </div>
                    <div className="pt-4 p-2 flex flex-col lg:flex-row">
                        <Category />
                        <Transaction />
                    </div>

                </div>

            </div>
            {isTransaction && (
                <TransactionModel children={<TransactionForm />} onClose={()=>setTransaction(false)}/>
            )}
            <ToastContainer />
        </div>
    );
}