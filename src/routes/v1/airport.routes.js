const express = require('express');
const Middleware = require('../../middlewares');
const Controller = require('../../controller');
const airportRoutes = express.Router();

airportRoutes.route('/register').post(Middleware.Airport.validateAirportRequest,Controller.Airport.registerAirport);

airportRoutes.route("/").get(Controller.Airport.getAirports);

airportRoutes.route("/:id").get(Controller.Airport.getAirportById);

airportRoutes.route("/:id").delete(Controller.Airport.deleteAirport);

airportRoutes.route("/:id").patch( Middleware.Airport.validateUpdateAirportRequest,Controller.Airport.updateAirport);
module.exports = airportRoutes