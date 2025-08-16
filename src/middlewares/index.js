const AirplaneMiddleware = require('./airplane.middleware');
const CityMiddleware = require('./city-middleware')
const AirportMiddleware = require('./airport.middleware')
const FlightMiddleware = require('./flight.middleware')
const Auth = require('./auth.middleware')
module.exports = {
  Airplane:AirplaneMiddleware,
  City:CityMiddleware,
  Airport:AirportMiddleware,
  Flight:FlightMiddleware,
  Auth
};
