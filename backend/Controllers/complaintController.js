const expressAsyncHandler = require("express-async-handler");
const Complaint = require('../Models/complaintModel');

const registerComplaint=expressAsyncHandler(async(req,res)=>{
  const {description} = req.body;

  if (!description) {
    res.status(400);
    throw new Error('User ID and description are required');
  }

  try {
    const complaint = new Complaint({
      user: "666d62e5869f27d19158b3ec",
      description,
      date: new Date(), // Set the current date
      status: 'Pending' // Default status
    });

    const savedComplaint = await complaint.save();
    res.status(201).json(savedComplaint);
  } catch (error) {
    res.status(500);
    throw new Error('Error saving complaint: ' + error.message);
  }
})
const viewComplaint=expressAsyncHandler(async(req,res)=>{
        try {
    const complaints = await Complaint.find().populate('user', 'name email'); // Populate user details
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500);
    throw new Error('Error fetching complaints: ' + error.message);
  }
})
module.exports={registerComplaint,viewComplaint};