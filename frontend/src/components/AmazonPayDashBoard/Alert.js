// import React from 'react'
// import red from "../../assets/assets/redbell.png"
// import yellow from '../../assets/assets/yellowbell.png';
// import axios from 'axios';
// import green from '../../assets/assets/greenbell.png';
// const Alert = () => {
//     return (
//       <div
//       className="flex flex-col w-1/2 border-2 border-red-500 border-opacity-50 md:flex-row bg-quantity_box h-48 m-3 p-2">
//       <img
//         className=" h-36 w-2/5 object-cover mt-3  "
//         src={red}
//         alt="" />
//       <div className="flex flex-col justify-center p-6">
        
//         <p className="mb-4 text-base text-black font-semibold dark:text-neutral-200">
//           You have exhausted 100% of your budget.
//         </p>
//         <p className="text-xs text-neutral-500 dark:text-neutral-300">
//           Last updated 3 mins ago
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Alert


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import red from '../../assets/assets/redbell.png';
import yellow from '../../assets/assets/yellowbell.png';
import green from '../../assets/assets/greenbell.png';
import SetBudget from './SetBudget';

const Alert = () => {
  const [alertData, setAlertData] = useState(null);

  useEffect(() => {
    const fetchAlertData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/payment/getAlert');
        setAlertData(response.data);
      } catch (error) {
        console.error('Error fetching alert data:', error);
      }
    };

    fetchAlertData();
  }, []);

  if (!alertData) {
    return <p>Loading...</p>;
  }

  const { percentageUsed, notificationMessage } = alertData;

  let bellImage;
  let borderColor;
  let message;

  if (percentageUsed >= 100) {
    bellImage = red;
    borderColor = 'border-red-500';
    message = `You have exhausted ${notificationMessage}% of your budget.`;
  } else if (percentageUsed >= 75) {
    bellImage = yellow;
    borderColor = 'border-yellow-500';
    message = `You have exhausted ${notificationMessage}% of your budget.`;
  } else {
    bellImage = green;
    borderColor = 'border-green-500';
    message = `You are following the budget.`;
  }
console.log()
  return (
    <div className=' w-1/2'>
    <div
      className={`flex flex-col border-2 ${borderColor} border-opacity-50 md:flex-row bg-quantity_box h-44 m-3 p-2`}
    >
      <img
        className="h-36 w-2/5 object-cover mt-2"
        src={bellImage}
        alt="Alert bell"
      />
      <div className="flex flex-col justify-center p-6">
        <p className="mb-4 text-base text-black font-semibold dark:text-neutral-200">
          {message}
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
          Last updated 3 mins ago
        </p>
      </div>
      </div>
      <SetBudget />
      </div>
  );
};

export default Alert;


      
 