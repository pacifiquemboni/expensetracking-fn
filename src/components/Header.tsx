import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/expense.svg';
import { useState, useEffect } from 'react';
import AuthModel from './modal/modal';
import Auth from './auth';

export default function Header() {
  const [isAuthModel, setAuthModel] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleAuthModel = () => {
    setAuthModel(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <>
      <header className="bg-[#03315D] text-white p-1">
        <nav className="flex justify-between items-center lg:mx-12">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="" className="w-20 h-20" />
            <h1 className="font-bold text-2xl">Expense Tracking</h1>
          </div>
          <ul className="flex space-x-4 items-center cursor-pointer">
            <li>
              <Link to="/" className="hover:underline">Docs</Link>
            </li>
            <div className="">|</div>
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                </li>
                <li className="border p-2 rounded-xl">
                  <div onClick={handleLogout} className="hover:underline">Logout</div>
                </li>
              </>
            ) : (
              <li className="border p-2 rounded-xl">
                <div onClick={toggleAuthModel} className="hover:underline">Get Started</div>
              </li>
            )}
          </ul>
        </nav>
      </header>
      {isAuthModel && (
        <AuthModel onClose={() => setAuthModel(false)} children={<Auth />} />
      )}
    </>
  );
}