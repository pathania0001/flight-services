const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories");
const { AppError } = require("../utils");
const { compareDates } = require("../utils/helpers");
const { Op } = require("sequelize");
const { param } = require("../routes");


const flightRepository = new FlightRepository();
const createFlight = async (data) => {
  console.log("inside-flight-services");
  
    const isReliableDates = compareDates(data.departureTime,data.arrivalTime);

    if(isReliableDates === "equal"){
      throw new AppError(["Departure-Time And Arrival-Time both are same","Arrival Date/Time must be later than Departure Date/Time"],StatusCodes.BAD_REQUEST)
    }

    else if(isReliableDates === "greater"){
      throw new AppError(["Arrival Date/Time must be later than Departure Date/Time"],StatusCodes.BAD_REQUEST)
    }

    if(data.departureAirportId === data.arrivalAirportId){
      throw new AppError(["Departure_Airport and Arrival_Airport must be different"],StatusCodes.BAD_REQUEST);
    }
  try {
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

    else if(error instanceof AppError){
      throw error;
    }
    
    throw new AppError(
      "Cannot Create new Flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const getAllFlights = async(query)=>{
  const customFilter = {};
  let sortFilters = [];
  const constantUsed ={
    endTripTime:" 23:59:59"
  } 
  // query.trips = "DEL-BLR"
  if(query.trips){
    [departureAirportId,arrivalAirportId] = query.trips.split("-");
    
     if(!departureAirportId || !arrivalAirportId || departureAirportId === arrivalAirportId)
     {
      throw new AppError(["Invalid trip format, trip should be non-empty and must be different"],StatusCodes.BAD_REQUEST)
     }
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;
  }

  if(query.price){
     [minPrice,maxPrice] = query.price.split('-');
     if (isNaN(minPrice) || isNaN(maxPrice)) {
        throw new AppError(["Price range must be numbers,('2000-5000')"], StatusCodes.BAD_REQUEST);
      }

      if (minPrice > maxPrice) {
        throw new AppError(["Max price should be greater than or equal to Min price"], StatusCodes.BAD_REQUEST);
      }

      customFilter.price = {
        [Op.between]:[minPrice,maxPrice],
      }
  }
//2 children + parents = 4 so available seats should be greater then 4 like this
  if(query.travellers){
    customFilter.totalSeats = {
      [Op.gte] : [query.travellers],
    }
  }
// say i want 2025-08-13 YYYY-MM-DD this should show only those in between this data 24 hours
 if(query.tripDate){
   customFilter.departureTime = {
    [Op.between] : [query.tripDate,query.tripDate + constantUsed.endTripTime]
   } 
 }
//sort=departureTime_ASC,price_DEC
 if(query.sort){
  const params = query.sort.split(',');
  sortFilters = params.map( param => param.split('_'));
 }
  // console.log("customFilter",customFilter,sortFilters)
  try {
  const allFlights = await flightRepository.getAllFlights(customFilter,sortFilters);
  return allFlights;
  } catch (error) {
    //console.log(error)
     if(error instanceof AppError)
      throw error;
    throw new AppError(["Something went wrong while fetching flights"],StatusCodes.INTERNAL_SERVER_ERROR)
  }

}
module.exports = {
    createFlight,
    getAllFlights,
}