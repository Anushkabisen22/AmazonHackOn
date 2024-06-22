// import { constants } from "../constants";
const constants =require('../constants');
const handel=(error,req,res,next)=>{
  const code=res.statusCode ? res.statusCode:500;
  switch (code) {
    case constants.VALIDATION_ERROR:
   res.json({title:'validation error',message:error.message,stackError:error.stack});
    break;
  
    default:
   res.json({title:'notfound',message:error.message,stackError:error.stack});

        break;
  }
}
module.exports=handel;