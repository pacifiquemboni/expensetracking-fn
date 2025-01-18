import  { useEffect, useRef } from 'react';
import Header from "../components/Header";
import bgImage from '../assets/bg.jpg';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import CharacterSlideshow from '../components/characterSlideShow';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Expenses',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Monthly Expenses',
    },
  },
};

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const children = containerRef.current?.children;
    if (children) {
      Array.from(children).forEach((child, index) => {
        (child as HTMLElement).style.opacity = '0';
        (child as HTMLElement).style.transform = 'translateY(70px)';
        setTimeout(() => {
          (child as HTMLElement).style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          (child as HTMLElement).style.opacity = '1';
          (child as HTMLElement).style.transform = 'translateY(0)';
        }, index * 200); // Stagger the animations
      });
    }
  }, []);

  return (
    <div
      className="relative bg-gray-100 min-h-screen"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Header />
      <div className='text-3xl font-bold text-white text-center'>
        <CharacterSlideshow />
    
      </div>
      <div ref={containerRef} className="relative container mx-auto p-4 flex flex-col lg:flex-row justify-between">
        
        <p className="bg-white bg-opacity-75 p-4 lg:w-1/3 rounded-lg">
          
          <br />
          Take control of your finances effortlessly. With this platform, you can:
          <br /> 💳 Track your transactions across multiple accounts.
          <br />📊 Visualize your spending with detailed reports.
          <br />🎯 Set budgets and get notified when you’re about to exceed them.
          <br />🗂 Organize expenses into categories and subcategories for better insights.
          <br />
          Start managing your money smarter today! 🚀
        </p>
        <div className="bg-white bg-opacity-75 p-4  lg:w-1/3 rounded-lg mt-4">
          <h2 className="text-2xl font-bold mb-4"></h2>
          <Line data={data} options={options} />
        </div>
      </div>
      {/* <div className='flex justify-center'>
        <button className='border p-5 rounded-lg w-1/3 text-white bg-white bg-opacity-75'>Get Started</button>
      </div> */}
      
    </div>
  );
}
