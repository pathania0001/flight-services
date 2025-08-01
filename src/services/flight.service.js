const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories");
const { AppError } = require("../utils");
const { compareDates } = require("../utils/helpers");


const flightRepository = new FlightRepository();
const createFlight = async (data) => {
  console.log("inside-flight-services");
  try {
    const isReliableDates = compareDates(data.departureTime,data.arrivalTime);
    console.log(isReliableDates)
    if(isReliableDates === "equal"){
      throw new AppError(["Departure-Time And Arrival-Time both are same","Arrival Date/Time must be later than Departure Date/Time"],StatusCodes.BAD_REQUEST)
    }
    else if(isReliableDates === "greater"){
      throw new AppError(["Arrival Date/Time must be later than Departure Date/Time"],StatusCodes.BAD_REQUEST)
    }
    const flight = await flightRepository.create(data);
    return flight;
  } catch (error) {
    if (error.name === "SequelizeValidationError" || error.name === "SequelizeUniqueConstraintError") {
      let explanation = [];
      error.errors.forEach((errorField) => {
        explanation.push(errorField.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    else if(error.statusCode === 400){
      throw new AppError(error.explanation,StatusCodes.BAD_REQUEST);
    }
    
    throw new AppError(
      "Cannot Create new Flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
module.exports = {
    createFlight,
}