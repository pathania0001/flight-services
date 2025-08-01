const express = require('express');
const Middlewares = require('../../middlewares');
const Controller = require('../../controller');

const flightRoutes = express.Router();

flightRoutes.route('/register').post(Middlewares.Flight.validateFlightRequest,Controller.Flight.registerFlight);


module.exports = flightRoutes;