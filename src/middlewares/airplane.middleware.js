const { StatusCodes } = require("http-status-codes");
const {ErrorResponse} = require('../utils');
 const validateAirplaneRequest = (req,res,next)=>{
    try {
        const modelNumber = req.body.modelNumber;
        if(!modelNumber)
        {
         ErrorResponse.message = "Something went wrong while creating airplane";
         ErrorResponse.error =  new AppError(["Model Number is not found in the onncoming request form"],StatusCodes.BAD_REQUEST)
            return res 
                     .status(StatusCodes.BAD_REQUEST)
                     .json(ErrorResponse)
        }

    } catch (error) {
        
    }
    next();
}  

module.exports = {
  validateAirplaneRequest
}
