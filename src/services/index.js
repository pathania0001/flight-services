
const AirplaneServices = require('./airplain.service')
const CityServices = require('./city.service')
const AirportServices = require('./airport.service')
const FlightServices = require('./flight.service')
module.exports = {
    Airplane:AirplaneServices,
    City:CityServices,
    Airport:AirportServices,
    Flight:FlightServices,
}
