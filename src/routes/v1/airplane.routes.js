
const express = require('express');
const airplaneRoutes = express.Router();
const {AirplaneMiddleware} = require('../../middlewares');
const Controller = require('../../controller');

airplaneRoutes.route("/register").post( AirplaneMiddleware.validateAirplaneCreateRequest,Controller.Airplane.registerAirplane);

airplaneRoutes.route("/").get(Controller.Airplane.getAllAirplanes);

airplaneRoutes.route("/:id").get(Controller.Airplane.getAirplaneById);

airplaneRoutes.route("/:id").delete(Controller.Airplane.destroyAirplane);

airplaneRoutes.route("/:id").patch( AirplaneMiddleware.validateAirplaneUpdateRequest,Controller.Airplane.updateAirplane);
module.exports = airplaneRoutes