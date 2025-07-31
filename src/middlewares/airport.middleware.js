const { StatusCodes } = require("http-status-codes");
const {ErrorResponse} = require('../utils');
 const validateAirportRequest = (req,res,next)=>{
        const {name,code,city_Id} = req.body;
        if(!name )
        {
         ErrorResponse.message = "Something went wrong while creating Airport";
         ErrorResponse.error =  new AppError(["Airport name is not found in the onncoming request form"],StatusCodes.BAD_REQUEST)
            return res 
                     .status(StatusCodes.BAD_REQUEST)
                     .json(ErrorResponse)
        }
        if(!code )
        {
         ErrorResponse.message = "Something went wrong while creating Airport";
         ErrorResponse.error =  new AppError(["Airport code is not found in the onncoming request form"],StatusCodes.BAD_REQUEST)
            return res 
                     .status(StatusCodes.BAD_REQUEST)
                     .json(ErrorResponse)
        }
        if(!city_Id )
        {
         ErrorResponse.message = "Something went wrong while creating Airport";
         ErrorResponse.error =  new AppError(["City is not found in the onncoming request form"],StatusCodes.BAD_REQUEST)
            return res 
                     .status(StatusCodes.BAD_REQUEST)
                     .json(ErrorResponse)
        }
     
    next();
}  
 const validateUpdateAirportRequest = (req,res,next)=>{
        const {name,code,city_Id} = req.body;
        if(name==="")
        {
         ErrorResponse.message = "Something went wrong while creating Airport";
         ErrorResponse.error =  new AppError(["Airport name is not found in the onncoming request form"],StatusCodes.BAD_REQUEST)
            return res 
                     .status(StatusCodes.BAD_REQUEST)
                     .json(ErrorResponse)
        }
        if(code==="")
        {
         ErrorResponse.message = "Something went wrong while creating Airport";
         ErrorResponse.error =  new AppError(["Airport code is not found in the onncoming request form"],StatusCodes.BAD_REQUEST)
            return res 
                     .status(StatusCodes.BAD_REQUEST)
                     .json(ErrorResponse)
        }
        if(city_Id==="")
        {
         ErrorResponse.message = "Something went wrong while creating Airport";
         ErrorResponse.error =  new AppError(["City is not found in the onncoming request form"],StatusCodes.BAD_REQUEST)
            return res 
                     .status(StatusCodes.BAD_REQUEST)
                     .json(ErrorResponse)
        }
     
    next();
}  

module.exports = {
   validateAirportRequest,
   validateUpdateAirportRequest
}
