const CrudRepositories = require("./crud.repo");

const { Flight,Airplane,Airport } = require('../models'); 
const { AppError } = require("../utils");
const { StatusCodes } = require("http-status-codes");
const { Sequelize } = require("sequelize");
const db = require("../models");
const { addRowLock } = require("./raw.queries");

class FlightRepository extends CrudRepositories{
    constructor(){
        super(Flight)
    }

    async getAllFlights(filter,order){
        try {
                const response = await Flight.findAll({ 
                    where : filter,
                    order,
                    include:[ //called eager loading
                        {
                            model:Airplane,//for simple if foreign key is primary itself in associated table(Airplane)
                            as:'airplaneDetails',//as written in model(e.g Flight model association)
                            required:true,//for inner-join
                        },
                        {
                            model:Airport,
                            as:'departureAirport',
                            required:true,
                            on : {
                                cell:Sequelize.where(Sequelize.col('Flight.departureAirportId'),'=',Sequelize.col('departureAirport.code'))
                            } // join where key is not primary but uniqu like airport->code
                        },
                        {
                            model:Airport,
                            as:'arrivalAirport',
                            required:true,
                            on :{
                                cell : Sequelize.where(Sequelize.col("Flight.arrivalAirportId"),'=',Sequelize.col('arrivalAirport.code'))
                            }
                        }
                        
                    ]
                })
               return response;
        } catch (error) {
            if(error.name === "SequelizeDatabaseError")   
            throw new AppError([error.original],StatusCodes.INTERNAL_SERVER_ERROR);
          throw error;
        }     
    }

    async updateRemainingSeats(flightId , seats , dec = true){
        await db.sequelize.query(addRowLock(flightId));
        const flight = await Flight.findByPk(flightId);
        if(dec){
            await flight.decrement('totalSeats',{by:seats});
        }
        else{
             await flight.increment('totalSeats',{by:seats})
        }
        flight.save();

        return await Flight.findByPk(flightId);
    }
}

module.exports = FlightRepository;