import React, { useState } from 'react'
import budget from '../../assets/assets/budget.png'
import AddIcon from '@mui/icons-material/Add';
const SetBudget = () => {
    const [month, setMonth] = useState('');
  const [price, setPrice] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMonth('');
    setPrice('');
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  return (
    <div
      className={`flex ml-11 flex-col w-5/6 rounded-md border-2 border-gray-300 border-opacity-50 md:flex-row bg-quantity_box h-44  p-2`}
    >
      <img
        className="h-36 w-2/5 p-7 object-cover mt-2"
        src={budget}
        alt="Alert bell"
      />
      <form onSubmit={handleSubmit} className="flex flex-col justify-center p-6">
        <input
          value={month}
          onChange={e => setMonth(e.target.value)}
          placeholder='Month..'
          className="mb-4 text-base text-black border-b-2 border-black"
        />
        
        <input
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder='Amount..'
          className="mb-4 text-base text-black border-b-2 border-black"
        />
        
        <button type="submit" className='border w-10 h-20 rounded-md bg-black'>
          <AddIcon className='text-white ' />
        </button>
      </form>
    </div>
  )
}

export default SetBudget