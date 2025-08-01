const CrudRepositories = require("./crud.repo");

const { Flight } = require('../models'); 
const { AppError } = require("../utils");
const { StatusCodes } = require("http-status-codes");
class FlightRepository extends CrudRepositories{
    constructor(){
        super(Flight)
    }

    async getAllFlights(filter,order){
        try {
                const response = await Flight.findAll({ where : filter,order })
               return response;
        } catch (error) {
            if(error.name === "SequelizeDatabaseError")   
            throw new AppError([error.original],StatusCodes.INTERNAL_SERVER_ERROR);
          throw error;
        }     
    }
}

module.exports = FlightRepository;