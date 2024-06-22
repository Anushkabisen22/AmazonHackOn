// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     LineElement,
//     PointElement,
//     CategoryScale,
//     LinearScale,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';

// // Register the components
// ChartJS.register(
//     LineElement,
//     PointElement,
//     CategoryScale,
//     LinearScale,
//     Title,
//     Tooltip,
//     Legend
// );

// const MonthlyAnalysis = () => {
//     const [chartData, setChartData] = useState(null);

//     useEffect(() => {
//         const fetchBudgetAndExpenses = async () => {
//             try {
//                 const budgetResponse = await axios.get('http://localhost:5000/api/finance/getMonthlyBudget/666d62e5869f27d19158b3ec');
//                 const expenseResponse = await axios.get('http://localhost:5000/api/payment/getByMonth/666d62e5869f27d19158b3ec');

//                 const budgetData = budgetResponse.data;
//                 const expenseData = expenseResponse.data;

//                 const processChartData = () => {
//                     // Extract and sort budget data by month
//                     const sortedBudgets = budgetData.sort((a, b) => new Date(a.monthlyBudgets.month) - new Date(b.monthlyBudgets.month));
//                     const budgetMonths = sortedBudgets.map(item => new Date(item.monthlyBudgets.month).toLocaleString('default', { month: 'short', year: 'numeric' }));
//                     const budgets = sortedBudgets.map(item => item.monthlyBudgets.budget);

//                     // Extract and sort expense data by month
//                     const sortedExpenses = expenseData.sort((a, b) => new Date(a.year, a.month - 1) - new Date(b.year, b.month - 1));
//                     const expenseMonths = sortedExpenses.map(item => new Date(item.year, item.month - 1).toLocaleString('default', { month: 'short', year: 'numeric' }));
//                     const expenses = sortedExpenses.map(item => item.totalExpense);

//                     // Ensure both data sets cover the same months
//                     const allMonths = Array.from(new Set([...budgetMonths, ...expenseMonths])).sort((a, b) => new Date(a) - new Date(b));
//                     const budgetMap = Object.fromEntries(sortedBudgets.map(item => [new Date(item.monthlyBudgets.month).toLocaleString('default', { month: 'short', year: 'numeric' }), item.monthlyBudgets.budget]));
//                     const expenseMap = Object.fromEntries(sortedExpenses.map(item => [new Date(item.year, item.month - 1).toLocaleString('default', { month: 'short', year: 'numeric' }), item.totalExpense]));

//                     const alignedBudgets = allMonths.map(month => budgetMap[month] || 0);
//                     const alignedExpenses = allMonths.map(month => expenseMap[month] || 0);

//                     setChartData({
//                         labels: allMonths,
//                         datasets: [
//                             {
//                                 label: 'Expected Budget',
//                                 data: alignedBudgets,
//                                 borderColor: '#131921',
//                                 backgroundColor: 'rgba(19, 25, 33, 0.2)',
//                                 borderWidth: 2,
//                                 borderDash: [],
//                                 pointBorderColor: '#131921',
//                                 pointBackgroundColor: '#131921',
//                                 pointBorderWidth: 2,
//                                 pointHoverRadius: 5,
//                                 pointHoverBackgroundColor: '#131921',
//                                 pointHoverBorderColor: '#131921',
//                                 pointHoverBorderWidth: 2,
//                                 pointRadius: 3,
//                                 pointHitRadius: 10,
//                                 shadowOffsetX: 3,
//                                 shadowOffsetY: 3,
//                                 shadowBlur: 10,
//                                 shadowColor: 'rgba(0, 0, 0, 0.3)',
//                             },
//                             {
//                                 label: 'Actual Expenses',
//                                 data: alignedExpenses,
//                                 borderColor: '#febd69',
//                                 backgroundColor: 'rgba(254, 189, 105, 0.2)',
//                                 borderWidth: 2,
//                                 borderDash: [],
//                                 pointBorderColor: '#febd69',
//                                 pointBackgroundColor: '#febd69',
//                                 pointBorderWidth: 2,
//                                 pointHoverRadius: 5,
//                                 pointHoverBackgroundColor: '#febd69',
//                                 pointHoverBorderColor: '#febd69',
//                                 pointHoverBorderWidth: 2,
//                                 pointRadius: 3,
//                                 pointHitRadius: 10,
//                                 shadowOffsetX: 3,
//                                 shadowOffsetY: 3,
//                                 shadowBlur: 10,
//                                 shadowColor: 'rgba(0, 0, 0, 0.3)',
//                             }
//                         ]
//                     });
//                 };

//                 processChartData();
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchBudgetAndExpenses();
//     }, []);

//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top',
//             },
//         },
//         scales: {
//             x: {
//                 grid: {
//                     display: false, // Remove x-axis grid lines
//                 },
//             },
//             y: {
//                 grid: {
//                     display: false, // Remove y-axis grid lines
//                 },
//             },
//         },
//     };

//     return (
//         <div className='border border-gray-200 p-5 m-3 bg-quantity_box'>
//             {chartData ? <Line data={chartData} options={options} width={900} height={500} className='mt-7' /> : <p>Loading...</p>}
//             <span className='text-white font-bodyFont font-medium'>Monthly Budgets vs. Expenses</span>
//         </div>
//     );
// }

// export default MonthlyAnalysis;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the components
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);

const MonthlyAnalysis = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchBudgetAndExpenses = async () => {
            try {
                const budgetResponse = await axios.get('http://localhost:5000/api/finance/getMonthlyBudget/666d62e5869f27d19158b3ec');
                const expenseResponse = await axios.get('http://localhost:5000/api/payment/getByMonth/666d62e5869f27d19158b3ec');

                const budgetData = budgetResponse.data;
                const expenseData = expenseResponse.data;

                const processChartData = () => {
                    // Extract and sort budget data by month
                    const sortedBudgets = budgetData.sort((a, b) => new Date(a.monthlyBudgets.month) - new Date(b.monthlyBudgets.month));
                    const budgetMonths = sortedBudgets.map(item => new Date(item.monthlyBudgets.month).toLocaleString('default', { month: 'short', year: 'numeric' }));
                    const budgets = sortedBudgets.map(item => item.monthlyBudgets.budget);

                    // Extract and sort expense data by month
                    const sortedExpenses = expenseData.sort((a, b) => new Date(a.year, a.month - 1) - new Date(b.year, b.month - 1));
                    const expenseMonths = sortedExpenses.map(item => new Date(item.year, item.month - 1).toLocaleString('default', { month: 'short', year: 'numeric' }));
                    const expenses = sortedExpenses.map(item => item.totalExpense);

                    // Ensure both data sets cover the same months
                    const allMonths = Array.from(new Set([...budgetMonths, ...expenseMonths])).sort((a, b) => new Date(a) - new Date(b));
                    const budgetMap = Object.fromEntries(sortedBudgets.map(item => [new Date(item.monthlyBudgets.month).toLocaleString('default', { month: 'short', year: 'numeric' }), item.monthlyBudgets.budget]));
                    const expenseMap = Object.fromEntries(sortedExpenses.map(item => [new Date(item.year, item.month - 1).toLocaleString('default', { month: 'short', year: 'numeric' }), item.totalExpense]));

                    const alignedBudgets = allMonths.map(month => budgetMap[month] || 0);
                    const alignedExpenses = allMonths.map(month => expenseMap[month] || 0);

                    setChartData({
                        labels: allMonths,
                        datasets: [
                            {
                                label: 'Expected Budget',
                                data: alignedBudgets,
                                backgroundColor: 'rgba(19, 25, 33, 0.8)',
                                borderColor: '#131921',
                                borderWidth: 1,
                            },
                            {
                                label: 'Actual Expenses',
                                data: alignedExpenses,
                                backgroundColor: 'rgba(254, 189, 105, 0.8)',
                                borderColor: '#febd69',
                                borderWidth: 1,
                            }
                        ]
                    });
                };

                processChartData();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchBudgetAndExpenses();
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            x: {
                grid: {
                    label: "Month",
                    display: false, // Remove x-axis grid lines
                },
            },
            y: {
                grid: {
                    label:"Amount",
                    display: false, // Remove y-axis grid lines
                },
            },
        },
    };

    return (
        <div className='border border-gray-200 p-10 m-3 bg-quantity_box'>
            {chartData ? <Bar data={chartData} options={options} width={900} height={500} className='mt-7' /> : <p>Loading...</p>}
            <span className='text-black font-bodyFont font-medium'>Monthly Budgets vs. Expenses</span>
        </div>
    );
}

export default MonthlyAnalysis;
