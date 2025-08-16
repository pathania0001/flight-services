
const express = require('express');
const cityRoutes = express.Router();
const Middleware = require('../../middlewares');
const Controller = require('../../controller');

cityRoutes.route("/register").post( 
    Middleware.Auth.isAuthenticated,
    Middleware.Auth.isAdmin,
    Middleware.City.validateCityRequest,
    Controller.City.registerCity);

cityRoutes.route("/").get( 
    Controller.City.getAllCities);

cityRoutes.route("/:id").get( 
    Controller.City.getCityById);

cityRoutes.route("/:id").delete(
    Middleware.Auth.isAuthenticated,
    Middleware.Auth.isAdmin,
    Controller.City.destroyCity);

cityRoutes.route("/:id").patch(
     Middleware.Auth.isAuthenticated,
     Middleware.Auth.isAdmin,
     Middleware.City.validateCityRequest,
     Controller.City.updateCity);
     
module.exports = cityRoutes