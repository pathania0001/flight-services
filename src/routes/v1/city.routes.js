
const express = require('express');
const cityRoutes = express.Router();
const Middleware = require('../../middlewares');
const Controller = require('../../controller');

cityRoutes.route("/register").post( Middleware.City.validateCityRequest,Controller.City.registerCity);

cityRoutes.route("/").get(Controller.City.getAllCities);

cityRoutes.route("/:id").get(Controller.City.getCityById);

cityRoutes.route("/:id").delete(Controller.City.destroyCity);

cityRoutes.route("/:id").patch(Middleware.City.validateCityRequest,Controller.City.updateCity);
module.exports = cityRoutes