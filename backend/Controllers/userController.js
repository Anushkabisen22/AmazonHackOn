const expressAsyncHandler = require("express-async-handler");
const User = require('../Models/userModel');

const registerUser=expressAsyncHandler(async(req,res)=>{
       const {name,email,password}=req.body;
       const pastUser=await User.findOne({email});
       if(pastUser){
        res.status(400);
        throw new Error("Already a user");
    }
       const user=await User.create({
        name,email,password
       })
       if(user){
        res.status(201).json({
            message: "success",
            _id:user._id,
            name:name,
            email:email
        })
       }
       else{
        res.status(400);
        throw new Error("User not found");
       }
})
const loginUser=expressAsyncHandler(async(req,res)=>{
          const {email,password}=req.body;
          if(!email || !password){
              res.status(400);
              throw new Error("Please enter the details");
          }
          const user=await User.findOne({email});
          
          if(user && password===user.password){
              res.json({
                message: "start shopping",
                _id:user._id,
                name:user.name,
                email:user.email
              })
          }
          else{
            res.status(400);
            throw new Error("register please");
          }
}
)
module.exports={registerUser,loginUser};