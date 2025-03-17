import { StatusCodes } from "http-status-codes";
import { AirplaneRepository } from "../repositories/index.js"
import {AppError} from "../utils/errors/index.js";

const airplaneRepository = new AirplaneRepository();
 const createAirplane = async (data) =>{
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

const getAllAirplanes = async ()=> {
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError("Cannot fetch data of all airplanes",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
const getAirplaneById = async (id)=> {
    try {
        const airplanes = await airplaneRepository.get(id);
        return airplanes;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND)
        {
            throw new AppError ("Airplane not found",error.statusCode);
        }
        throw new AppError("Cannot fetch data from all airplanes",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

const destroyAirplane = async (id)=> {
    try {
        const response = await airplaneRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND)
        {
            throw new AppError ("Airplane not found",error.statusCode);
        }
        throw new AppError("Cannot fetch data of all airplanes",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
const updateAirplane = async(id ,data) =>{

    try {
         const response  = await airplaneRepository.update(id,data);
         console.log(response);
         return response;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND)
            {
                throw new AppError ("Airplane not found",error.statusCode);
            }
        throw new AppError("Cannot fetch data of all airplanes",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export {
    createAirplane,
    getAllAirplanes,
    getAirplaneById,
    destroyAirplane,
    updateAirplane
}
