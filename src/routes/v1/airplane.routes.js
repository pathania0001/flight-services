
import express from "express"
import { getAirplaneById, getAllAirplanes, registerAirplane } from "../../controller/index.js";
import { AirplaneMiddleware } from "../../middlewares/index.js";

const airplaneRoutes = express.Router();

airplaneRoutes.route("/register").post( AirplaneMiddleware.validateAirplaneCreateRequest,registerAirplane);
airplaneRoutes.route("/").get(getAllAirplanes);
airplaneRoutes.route("/:id").get(getAirplaneById);
export {
    airplaneRoutes,
}