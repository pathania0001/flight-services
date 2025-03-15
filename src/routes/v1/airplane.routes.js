
import express from "express"
import { registerAirplane } from "../../controller/index.js";
import { AirplaneMiddleware } from "../../middlewares/index.js";

const airplaneRoutes = express.Router();

airplaneRoutes.route("/register").post( AirplaneMiddleware.validateAirplaneCreateRequest,registerAirplane);

export {
    airplaneRoutes,
}