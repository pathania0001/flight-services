const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils");
const { ErrorResponse } = require("../utils/common");

const validateFlightRequest = async(req,res,next)=>{
        const{ 
            flightNumber,
            airplaneId,
            departureAirportId,
            arrivalAirportId,
            departureTime,
            arrivalTime,
            price,
            totalSeats,
        } = req.body;
    
        if(!flightNumber){
            ErrorResponse.message = "Something went wrong in while creating flight";
            ErrorResponse.error = new AppError(["Flight number is not found in oncoming request"],StatusCodes.BAD_REQUEST)

            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!airplaneId){
            ErrorResponse.message = "Something went wrong in while creating flight";
            ErrorResponse.error = new AppError(["Airplane Id is not found in oncoming request"],StatusCodes.BAD_REQUEST)

            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!departureAirportId){
            ErrorResponse.message = "Something went wrong in while creating flight";
            ErrorResponse.error = new AppError(["Departure Airport Id is not found in oncoming request"],StatusCodes.BAD_REQUEST)

            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!arrivalAirportId){
            ErrorResponse.message = "Something went wrong in while creating flight";
            ErrorResponse.error = new AppError(["Arrival Airport Id is not found in oncoming request"],StatusCodes.BAD_REQUEST)

            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!departureTime){
            ErrorResponse.message = "Something went wrong in while creating flight";
            ErrorResponse.error = new AppError(["Departure Time is not found in oncoming request"],StatusCodes.BAD_REQUEST)

            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!arrivalTime){
            ErrorResponse.message = "Something went wrong in while creating flight";
            ErrorResponse.error = new AppError(["Arrival Time is not found in oncoming request"],StatusCodes.BAD_REQUEST)

            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!price){
            ErrorResponse.message = "Something went wrong in while creating flight";
            ErrorResponse.error = new AppError(["Price is not found in oncoming request"],StatusCodes.BAD_REQUEST)

            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!totalSeats){
            ErrorResponse.message = "Something went wrong in while creating flight";
            ErrorResponse.error = new AppError(["Total Seats is not found in oncoming request"],StatusCodes.BAD_REQUEST)

            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }

        next();
}

module.exports = {
    validateFlightRequest
};