const express = require('express');
const Middlewares = require('../../middlewares');
const Controller = require('../../controller');

const flightRoutes = express.Router();

flightRoutes.route('/register').post(Middlewares.Flight.validateFlightRequest,Controller.Flight.registerFlight);

flightRoutes.route('/').get(Controller.Flight.getFlights);

module.exports = flightRoutes;