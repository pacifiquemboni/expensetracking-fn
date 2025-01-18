import { useState } from 'react';
import logo from '../../assets/expense.svg'
import TransactionModel from '../modal/Transactionmodal';
import CategoryIndex from '../category';
export default function Category() {
    const [isCategory, setCategory] = useState(false)
    const categories = [
      { id: 1, name: 'Bills & Utilities', image: '../../assets/expense.svg' },
      { id: 2, name: 'Food', image: '/images/food.png' },
      { id: 3, name: 'Personal', image: '/images/personal.png' },
      { id: 4, name: 'Healthcare', image: '/images/healthcare.png' },
      { id: 5, name: 'Education', image: '/images/education.png' },
      { id: 6, name: 'Transport', image: '/images/transport.png' },
      { id: 7, name: 'Investment', image: '/images/investment.png' },
      { id: 8, name: 'Other', image: '/images/other.png' },
    ];
  
    return (
      <div className="bg-white p-6  w-full max-w-3xl mx-auto">
        {/* Title */}
        <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Categories</h2> 
            <button onClick={()=>setCategory(true)}>+ Add</button>
            </div>
        
  
        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={logo}
                alt={category.name}
                className="w-16 h-16 object-cover mb-2"
              />
              <p className="text-sm font-medium text-gray-700">{category.name}</p>
            </div>
          ))}
        </div>
        {isCategory&&(
            <TransactionModel children={<CategoryIndex />}  onClose={()=>setCategory(false)}/>
        )}
      </div>
    );
  }
  