const express = require('express');
const Middleware = require('../../middlewares');
const Controller = require('../../controller');

const flightRoutes = express.Router();

flightRoutes.route('/register').post(Middleware.Flight.validateFlightRequest,Controller.Flight.registerFlight);

flightRoutes.route('/').get(Controller.Flight.getFlights);

flightRoutes.route('/:id').get(Controller.Flight.getFlightById);

flightRoutes.route('/:id/seats').patch(Middleware.Flight.validateUpdateSeatRequests,Controller.Flight.updateSeats);


module.exports = flightRoutes;