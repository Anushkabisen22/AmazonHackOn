const express=require('express');
const router = express.Router();
const { addBudget, getMonthlyBudget } = require('../Controllers/financeController');
// add the budget and categories for the particular month 
router.route('/addBudget').post(addBudget);
// get monthly budget of all the months of a user
router.route('/getMonthlyBudget/:userId').get(getMonthlyBudget);
module.exports = router;