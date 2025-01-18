import { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import bssmn from '../../assets/bssman.svg';

interface DecodedToken {
  name: string;
  // Add other properties if needed
}

export default function Profile() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  const [remainingWeekdays, setRemainingWeekdays] = useState(0);
  const [remainingWeekends, setRemainingWeekends] = useState(0);
  const [timeOfDay, setTimeOfDay] = useState('');

  useLayoutEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect to login if token is not found
    } else {
      const decodedToken: DecodedToken = jwtDecode(token);
      setUserName(decodedToken.name); // Set the user's name from the token
      setCurrentDate(getCurrentDate()); // Set the current date
      setCurrentMonth(getCurrentMonth()); // Set the current month
      setTimeOfDay(getTimeOfDay()); 
      const { weekdays, weekends } = calculateRemainingDays();
      setRemainingWeekdays(weekdays);
      setRemainingWeekends(weekends);
    }
  }, [navigate]);

  const getCurrentDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    return date.toLocaleDateString(undefined, options);
  };

  const getCurrentMonth = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { month: 'long' };
    return date.toLocaleDateString(undefined, options);
  };

  const calculateRemainingDays = () => {
    const today = new Date();
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    let weekdays = 0;
    let weekends = 0;

    for (let day = today.getDate(); day <= endOfMonth.getDate(); day++) {
      const date = new Date(today.getFullYear(), today.getMonth(), day);
      const dayOfWeek = date.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        weekends++;
      } else {
        weekdays++;
      }
    }

    return { weekdays, weekends };
  };
  const getTimeOfDay = () => {
    const hour = new Date().getHours();

    if (hour >= 0 && hour < 6) {
      return 'Midnight';
    } else if (hour >= 6 && hour < 12) {
      return 'Morning';
    } else if (hour >= 12 && hour < 18) {
      return 'Afternoon';
    } else {
      return 'Evening';
    }
  };
  return (
    <div className="container w-full lg:w-1/3 mx-auto p-4">
      <div className="bg-white p-6 rounded-lg flex items-center">
        {/* Left Section - Profile Image */}
        <div className="w-1/3 flex justify-center">
          <div className="w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center">
            <img
              src={bssmn}
              alt="Profile"
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Right Section - Details */}
        <div className="w-2/3 ml-6">
          <p className="text-xl font-semibold text-gray-700">Good {timeOfDay},</p>
          <h1 className="text-2xl font-bold text-gray-800">{userName}</h1>
          <p className="text-sm text-gray-500">{currentDate}</p>

          <div className="mt-4">
            <p className="text-gray-600">
              <span className="font-semibold">Month:</span> {currentMonth} ✅
            </p>

            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Remaining Days:
              </p>
              <ul className="text-sm text-gray-500">
                <li>{remainingWeekdays} Weekdays</li>
                <li>{remainingWeekends} Weekends & Holidays</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
