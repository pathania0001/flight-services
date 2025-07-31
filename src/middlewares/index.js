const AirplaneMiddleware = require('./airplane.middleware');
const CityMiddleware = require('./city-middleware')
const AirportMiddleware = require('./airport.middleware')
module.exports = {
  Airplane:AirplaneMiddleware,
  City:CityMiddleware,
  Airport:AirportMiddleware,
};
