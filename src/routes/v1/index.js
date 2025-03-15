
import express from "express"
import { airplaneRoutes } from "./airplane.routes.js";

//import userRouter from './user.routes.js';

const v1Router = express.Router();

v1Router.use("/airplane",airplaneRoutes);

export default v1Router;


