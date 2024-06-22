import React, { useEffect, useState } from 'react';
import axios from 'axios';
import paylogo from '../../assets/assets/pay.png';

const PaymentHistory = () => {
    const [paymentData1, setPaymentData1] = useState([]);
    const [paymentData2, setPaymentData2] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [error, setError] = useState(null);

    const formatDateTime = (dateString) => {
        const date = new Date(dateString);

        // Options for formatting date and time
        const options = {
            year: 'numeric', month: 'long', day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric',
            hour12: false, // 24-hour format
            timeZone: 'UTC' // Adjust as per your timezone
        };

        // Format the date and time using Intl.DateTimeFormat
        const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(date);

        return formattedDateTime;
    };

    useEffect(() => {
        const userId = '666d62e5869f27d19158b3ec';
        const apiUrl = `http://localhost:5000/api/payment/getPayment/${userId}`;

        axios.get(apiUrl)
            .then(response => {
                response.data.reverse();
                setPaymentData1(response.data);
                setPaymentData2(response.data.slice(0, 5));
                console.log(response.data);
            })
            .catch(error => {
                setError(error);
                console.error('Error fetching payment data:', error);
            });
    }, []);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <span className='w-2/5 bg-white'>
            <div className=' text-center text-2xl font-semibold font-bodyFont'>
                Your Transactions
            </div>
            {paymentData1.length > 0 ? (
                <div>
                    {(showAll ? paymentData1 : paymentData2).map((payment, index) => (
                        <div key={index} className='mb-2 flex justify-between font-bodyFont border border-gray-500 p-3 ml-1 mr-1 mt-3 rounded-md'>
                            <img src={paylogo} className='w-12 border border-black rounded-md p-2' />
                            <div className='flex flex-col'>
                                <span className='text-sm font-bold'>
                                    {payment.description}
                                </span>
                                <span className='mt-.5 text-xs text-gray-400 font-light'>
                                    #{payment._id.substring(0, 7)}
                                </span>
                            </div>
                            <div className='text-sm font-semibold mt-1.5'>
                                {formatDateTime(payment.date).substring(17, 26)}
                            </div>
                            <div className='text-sm font-semibold mt-1.5'>
                                {formatDateTime(payment.date).substring(0, 13)}
                            </div>
                            <div className='text-m font-bold mt-1.5 text-red-600'>
                                - &#8377;{payment.amount}
                            </div>
                        </div>
                    ))}
                    <div className='flex justify-center mt-4'>
                        <button onClick={toggleShowAll} className=' text-black font-semibold'>
                            {showAll ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </span>
    );
}

export default PaymentHistory;
