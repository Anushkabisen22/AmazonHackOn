const express=require('express');
const router = express.Router();
const { registerComplaint, viewComplaint } = require('../Controllers/complaintController');
router.route('/registerC').post(registerComplaint);
router.route('/viewC').get(viewComplaint);
module.exports=router;