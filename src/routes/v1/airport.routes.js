const express = require('express');
const Middleware = require('../../middlewares');
const Controller = require('../../controller');
const airportRoutes = express.Router();

airportRoutes.route('/register').post(
    Middleware.Auth.isAuthenticated,
    Middleware.Auth.isAdmin,
    Middleware.Airport.validateAirportRequest,
    Controller.Airport.registerAirport);

airportRoutes.route("/").get( 
    Middleware.Auth.isAuthenticated,
    Middleware.Auth.isAdmin,
    Controller.Airport.getAirports);

airportRoutes.route("/:id").get(
    Middleware.Auth.isAuthenticated,
    Middleware.Auth.isAdmin,
    Controller.Airport.getAirportById);

airportRoutes.route("/:id").delete(
    Middleware.Auth.isAuthenticated,
    Middleware.Auth.isAdmin,
    Controller.Airport.deleteAirport);

airportRoutes.route("/:id").patch( 
    Middleware.Auth.isAuthenticated,
    Middleware.Auth.isAdmin,
    Middleware.Airport.validateUpdateAirportRequest,
    Controller.Airport.updateAirport);
    
module.exports = airportRoutes