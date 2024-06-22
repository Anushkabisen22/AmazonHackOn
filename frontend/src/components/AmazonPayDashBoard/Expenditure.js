import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Expenditure = () => {
    const [budgetData, setBudgetData] = useState(null);
    const [expenseData, setExpenseData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const budgetResponse = await axios.get('http://localhost:5000/api/finance/getMonthlyBudget/666d62e5869f27d19158b3ec');
                const expenseResponse = await axios.get('http://localhost:5000/api/payment/getByMonth/666d62e5869f27d19158b3ec');

                // Assuming the data has a 'month' field that can be used to filter
                const juneBudget = budgetResponse.data.find(item => item.monthlyBudgets.month === '2024-06');
                const juneExpense = expenseResponse.data.find(item => item.month === 6);

                setBudgetData(juneBudget ? juneBudget.monthlyBudgets.budget : 0);
                setExpenseData(juneExpense ? juneExpense.totalExpense : 0);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const data = {
        labels: ['Budget', 'Expenses'],
        datasets: [
            {
                data: [budgetData, expenseData],
                backgroundColor: ['#131921', 'rgba(255, 0, 0, 0.7)'],
                borderColor: ['#ffffff', '#ffffff'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '',
            },
        },
    };

    return (
        <div className='border border-gray-200 p-5 mx-2 mb-2 bg-white'>
            <span className=' ml-18 mt-3 text-black font-bodyFont font-medium'>Expenses Till Date</span>
            <Doughnut className='w-3/5' data={data} options={options} />
            
        </div>
    );
};

export default Expenditure;
