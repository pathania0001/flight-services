const { StatusCodes } = require("http-status-codes");
const Service = require("../services")
const { SuccessResponse, ErrorResponse } = require("../utils/common")


const registerFlight = async(req,res)=>{
     try {
         const flight = await Service.Flight.createFlight({

        flightNumber:req.body.flightNumber,
        airplaneId:req.body.airplaneId,
        departureAirportId:req.body.departureAirportId,
        arrivalAirportId:req.body.arrivalAirportId,
        departureTime:req.body.departureTime,
        arrivalTime:req.body.arrivalTime,
        price:req.body.price,
        totalSeats:req.body.totalSeats,
        boardingGate:req.body.boardingGate,
    })

    SuccessResponse.data = flight;
    return res.status(StatusCodes.OK).json(SuccessResponse);
        
     } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
     }
 
}

const getFlights = async(req,res)=>{

    try {
    const flights = await Service.Flight.getAllFlights(req.query); 

    SuccessResponse.data = flights;
    return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

const getFlightById = async(req,res)=>{

    try {
    
    const flights = await Service.Flight.getFlightById(req.params.id); 
    SuccessResponse.data = flights;
    return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

const updateSeats = async(req,res)=>{

    try {
    const flight = await Service.Flight.updateSeats({
        flightId : req.params.id,
        seats : req.body.seats,
        dec : parseInt(req.body?.dec),
    })
    SuccessResponse.data = flight;
    return res.status(StatusCodes.OK).json(SuccessResponse);       
    } catch (error) {
        console.log(error)
        ErrorResponse.error = error;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}
module.exports = {
    registerFlight,
    getFlights,
    getFlightById,
    updateSeats,

}