
const express = require('express');
const airplaneRoutes = express.Router();
const Middleware = require('../../middlewares');
const Controller = require('../../controller');

airplaneRoutes.route("/register").post( 
    Middleware.Auth.isAuthenticated,
    Middleware.Auth.isAdmin,
    Middleware.Airplane.validateAirplaneRequest,
    Controller.Airplane.registerAirplane
);

airplaneRoutes.route("/").get(
    Middleware.Auth.isAuthenticated,
    Middleware.Auth.isAdmin,
    Controller.Airplane.getAllAirplanes);

airplaneRoutes.route("/:id").get(
     Middleware.Auth.isAuthenticated,
     Middleware.Auth.isAdmin,
    Controller.Airplane.getAirplaneById);

airplaneRoutes.route("/:id").delete(
    Middleware.Auth.isAuthenticated,
    Middleware.Auth.isAdmin,
    Controller.Airplane.destroyAirplane);

airplaneRoutes.route("/:id").patch(
    Middleware.Auth.isAuthenticated,
    Middleware.Auth.isAdmin,
    Middleware.Airplane.validateAirplaneRequest,
    Controller.Airplane.updateAirplane);
    
module.exports = airplaneRoutes