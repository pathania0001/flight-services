
import { StatusCodes } from "http-status-codes";
import { ErrorResponse } from "../utils/common/index.js";
import AppError from "../utils/errors/ApiError.js";

 const validateAirplaneCreateRequest = (req,res,next)=>{
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

const validateAirplaneUpdateRequest = (req,res,next)=>{
  
    try {
         const modelNumber = req.body.modelNumber;
         if(modelNumber === "")
         {
            ErrorResponse.message = "Model Number Shoud not be empty";
            ErrorResponse.error = new AppError("Model Number Shoud not be empty",StatusCodes.BAD_REQUEST);
            return res 
                     .status(StatusCodes.BAD_REQUEST)
                     .json(ErrorResponse)
         }
    } catch (error) {
        
    }
     
    next();
}



export {
    validateAirplaneCreateRequest,
    validateAirplaneUpdateRequest
}
