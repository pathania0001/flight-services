import { StatusCodes } from "http-status-codes";
import { AirplaneRepository } from "../repositories/index.js"
import {AppError} from "../utils/errors/index.js";

const airplaneRepository = new AirplaneRepository();
export const createAirplane = async (data) =>{
    console.log("inside-airplane-services")
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane
    } catch (error) {
        if(error.name ==="SequelizeValidationError")
            {
                let explanation = [];
                error.errors.foreach((errorfeild)=>{
                    explanation.push(errorfeild.message);
                })
               throw new AppError(explanation,StatusCodes.BAD_REQUEST);
            }
               throw new AppError("Cannot Create new Airplane object",StatusCodes.INTERNAL_SERVER_ERROR);
               
    }
}

