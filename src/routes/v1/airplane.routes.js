
import express from "express"
import { Controller } from "../../controller/index.js";
import { AirplaneMiddleware } from "../../middlewares/index.js";

const airplaneRoutes = express.Router();

airplaneRoutes.route("/register").post( AirplaneMiddleware.validateAirplaneCreateRequest,Controller.Airplane.registerAirplane);

airplaneRoutes.route("/").get(Controller.Airplane.getAllAirplanes);

airplaneRoutes.route("/:id").get(Controller.Airplane.getAirplaneById);

airplaneRoutes.route("/:id").delete(Controller.Airplane.destroyAirplane);

airplaneRoutes.route("/:id").patch( AirplaneMiddleware.validateAirplaneUpdateRequest,Controller.Airplane.updateAirplane);
export {
    airplaneRoutes,
}