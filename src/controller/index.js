
const  AirplaneController = require('./airplane.controller')
const CityController = require('./city-controller');
const AirportController = require('./airport.controller')
const FlightController = require('./flight.controller')
module.exports={
   Airplane:AirplaneController,
   City:CityController,
   Airport:AirportController,
   Flight:FlightController,
}