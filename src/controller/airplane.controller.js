import { StatusCodes } from "http-status-codes"
import { Service } from "../services/index.js"
import { ErrorResponse, SuccessResponse } from "../utils/common/index.js"

  export const registerAirplane = async (req , res) =>{
    console.log("inside-airplane-controller")
    try {
        const airplane = await Service.Airplane.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
         })
       
         SuccessResponse.data = airplane;
      
         return res
                   .status(StatusCodes.ACCEPTED)
                   .json(SuccessResponse)
         
    } catch (error) {

      ErrorResponse.error = error;
         return res
                   .status(error.statusCode)
                   .json(ErrorResponse)
         
    }
}

