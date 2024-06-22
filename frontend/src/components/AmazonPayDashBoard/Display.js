import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import MonthlyAnalysis from './MonthlyAnalysis';
import Expenditure from './Expenditure';
import Alert from './Alert';
import SetBudget from './SetBudget';
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const Display = () => {
  
  const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/payment/getByCategory/666d62e5869f27d19158b3ec');
                const data = response.data;

                const categories = data.map(item => item.category);
                const expenses = data.map(item => item.totalExpense);

                setChartData({
                    labels: categories,
                    // type:'doughnut',
                    datasets: [
                        {
                            label: 'Expenses',
                            data: expenses,
                            backgroundColor: [
                                '#102C57',
                                '#1679AB',
                                '#febd69',
                                '#4B70F5',
                                '#5A72A0',
                                '#FF9F40'
                            ],
                            hoverBackgroundColor: [
                                '#102C57',
                                '#1679AB',
                                '#febd69',
                                '#4B70F5',
                                '#5A72A0',
                                '#FF9F40'
                            ]
                        }
                    ]
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className=' bg-white ml-10'>
            <div className=' bg-white mr-10 flex gap-2 justify-center'>
<div className=' border border-gray-200 p-5 m-3 bg-quantity_box'>
              {chartData ? <Doughnut data={chartData} className='w-3/5' /> : <p>Loading...</p>}
              <span className=' ml-18 mt-3 text-black font-bodyFont font-medium'>Per Category Expenses</span>
                </div>
                
                    <Alert />
             
             
            </div>
            <MonthlyAnalysis />
          
           
            </div>     
  )
}

export default Display