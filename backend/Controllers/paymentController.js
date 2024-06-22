const expressAsyncHandler = require("express-async-handler");
const mongoose=require('mongoose');
const Payment = require('../Models/paymentModel');
const User = require('../Models/userModel');
const axios = require('axios');
const addPayment=expressAsyncHandler(async(req,res)=>{
        try {
    const { user_id, amount, date, category, description } = req.body;

    // Validate user_id
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const payment = new Payment({
      user_id,
      amount,
      date,
      category,
      description
    });

    await payment.save();

    res.status(201).json({ message: 'Payment saved successfully', payment });
  } catch (error) {
    console.error('Error saving payment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
      
})
const fetchPayment=expressAsyncHandler(async(req,res)=>{
          try {
    const userId = req.params.user_id;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: 'Invalid user_id format' });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const payments = await Payment.find({ user_id: userId });

    res.status(200).json(payments);
  } catch (error) {
    console.error('Error retrieving payments:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
)
const byCategory=expressAsyncHandler(async(req,res)=>{
   const userId = req.params.user_id;

  try {
    const result = await Payment.aggregate([
      {
        $match: { user_id: new mongoose.Types.ObjectId(userId)} 
      },
      {
        $group: {
          _id: '$category',
          totalExpense: { $sum: '$amount' } 
        }
      },
      {
        $project: {
          _id: 0, 
          category: '$_id',
          totalExpense: 1
        }
      }
    ]);

    res.json(result);
  } catch (error) {
    console.error('Error calculating total expenses by category:', error);
    res.status(500).json({ error: 'An error occurred while calculating expenses' });
  }
}
)

const byMonth=expressAsyncHandler(async(req,res)=>{
   const userId = req.params.user_id;

  try {
    const result = await Payment.aggregate([
      {
        $match: { user_id: new mongoose.Types.ObjectId(userId) } // match the user_id
      },
      {
        $group: {
          _id: {
            year: { $year: '$date' },
            month: { $month: '$date' }
          },
          totalExpense: { $sum: '$amount' }
        }
      },
      {
        $project: {
          _id: 0,
          year: '$_id.year',
          month: '$_id.month',
          totalExpense: 1
        }
      },
      {
        $sort: { year: 1, month: 1 } // optional: sort by year and month
      }
    ]);

    res.json(result);
  } catch (error) {
    console.error('Error calculating total expenses by month:', error);
    res.status(500).json({ error: 'An error occurred while calculating expenses' });
  }
}
)

const getAlert = expressAsyncHandler(async (req, res) => {
  // const userId = req.params.user_id;
   try {
    const userId = '666d62e5869f27d19158b3ec'; // Example user ID, adjust as needed

    // Fetch monthly budget for June 2024
    const budgetResponse = await axios.get(`http://localhost:5000/api/finance/getMonthlyBudget/${userId}`);
    const monthlyBudgets = budgetResponse.data;

    // Find the budget for June 2024
    const juneBudget = monthlyBudgets.find(budget => budget.monthlyBudgets.month === '2024-06');
    const budgetForJune = juneBudget ? juneBudget.monthlyBudgets.budget : 0;

    if (!juneBudget) {
      return res.status(404).json({ message: 'Budget for June 2024 not found' });
    }

    // Fetch expenses by category for June 2024
    const expensesResponse = await axios.get(`http://localhost:5000/api/payment/getByMonth/666d62e5869f27d19158b3ec`);
    const expensesByCategory = expensesResponse.data;

    // Calculate total expenses for June 2024
    const totalExpenses = expensesByCategory.find(exp => exp.month ===6);

    // Determine the percentage of the budget used
    const percentageUsed = (totalExpenses.totalExpense / budgetForJune) * 100;

    let notificationMessage = '';
    if (percentageUsed > 100) {
      notificationMessage = '100';
    } else if (percentageUsed > 75) {
      notificationMessage = '75';
    } else if (percentageUsed > 50) {
      notificationMessage = '50';
    } else {
      notificationMessage = 'Your expenses are within budget for June 2024.';
    }

    // Send notification
    // Here you can implement actual notification logic like sending an email
    console.log(notificationMessage);

    return res.status(200).json({
      totalExpenses,
      budgetForJune,
      percentageUsed,
      notificationMessage
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred', error });
  }
   
    
}
)
module.exports={addPayment,fetchPayment,byCategory,byMonth,getAlert};