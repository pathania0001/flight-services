const { StatusCodes } = require("http-status-codes");
const {ErrorResponse} = require('../utils');
 const validateCityRequest = (req,res,next)=>{
    try {
        const name = req.body.name;
        if(!name)
        {
         ErrorResponse.message = "Something went wrong while creating City";
         ErrorResponse.error =  new AppError(["Name is not found in the onncoming request form"],StatusCodes.BAD_REQUEST)
            return res 
                     .status(StatusCodes.BAD_REQUEST)
                     .json(ErrorResponse)
        }

    } catch (error) {
        
    }
    next();
}  

module.exports = {
   validateCityRequest
}
