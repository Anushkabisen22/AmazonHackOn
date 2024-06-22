const expressAsyncHandler = require("express-async-handler");
const Budget = require('../Models/financeModel');

const addBudget=expressAsyncHandler(async(req,res)=>{
       const { user_id, monthlyBudgets, categoryBudgets } = req.body;

  // Validate input data
  if (!user_id || !monthlyBudgets || !categoryBudgets || !monthlyBudgets.month || !monthlyBudgets.budget || !Array.isArray(categoryBudgets)) {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  try {
    const newBudget = new Budget({
      user_id,
      monthlyBudgets,
      categoryBudgets
    });

    const savedBudget = await newBudget.save();
    res.status(201).json(savedBudget);
  } catch (error) {
    console.error('Error saving budget:', error);
    res.status(500).json({ error: 'An error occurred while saving the budget' });
  }
})

const getMonthlyBudget=expressAsyncHandler(async(req,res)=>{
    const userId = req.params.userId;

  try {
    const budgets = await Budget.find({ user_id: userId });

    if (budgets.length === 0) {
      return res.status(404).json({ error: 'No budgets found for this user' });
    }

    res.status(200).json(budgets);
  } catch (error) {
    console.error('Error retrieving budgets:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the budgets' });
  }
})

module.exports={addBudget,getMonthlyBudget};