const express=require('express');
const router = express.Router();
const { addPayment, fetchPayment, byCategory, byMonth ,getAlert} = require('../Controllers/paymentController');
//buy some thing
router.route('/addPayment').post(addPayment);
// get all the payments done by a user
router.route('/getPayment/:user_id').get(fetchPayment);
// get the total expense of each category for the current month
router.route('/getByCategory/:user_id').get(byCategory);
// get monthly expenditure of all months os a user
router.route('/getByMonth/:user_id').get(byMonth);
// get budget alert
router.route('/getAlert').get(getAlert);
module.exports = router;