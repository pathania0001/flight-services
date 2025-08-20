const Service = require("../services");
const {StatusCodes} = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require("../utils/common");

const registerAirport = async(req,res)=>{
    try {
    const {name,code,address,city_Id}  = req.body;
    const airport = await Service.Airport.createAirport({name,code,address,city_Id});
    SuccessResponse.data = airport;
    return res
              .status(StatusCodes.ACCEPTED)
              .json(SuccessResponse);
        
    } catch (error) {
         ErrorResponse.error = error
        return res.status(error.statusCode).json(ErrorResponse);
    }  
}

const getAirports = async(req,res)=>{ 
    try {
          const airports = await Service.Airport.getAllAirports();
            SuccessResponse.data = airports;
            return res
                    .status(StatusCodes.OK)
                    .json(SuccessResponse);

    } catch (error) {
         ErrorResponse.error = error
        return res.status(error.statusCode).json(ErrorResponse);
    }           
}

const getAirportById = async(req,res)=>{

    try {
         const {id} = req.params;
        const airport = await Service.Airport.getAirportById(id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.ACCEPTED).json(SuccessResponse)
        
    } catch (error) {
          ErrorResponse.error = error;
          return res.status(error.statusCode).json(ErrorResponse);
    }

}

const updateAirport = async(req,res)=>{
    try {
         const {id} = req.params;
         const data = req.body;
        const airport = await Service.Airport.updateAirport(id,data);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.ACCEPTED).json(SuccessResponse)
        
    } catch (error) {
          ErrorResponse.error = error;
          return res.status(error.statusCode).json(ErrorResponse);
    }
}

const deleteAirport = async(req,res)=>{
    
    try {
         const {id} = req.params;
        const airport = await Service.Airport.destroyAirport(id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.ACCEPTED).json(SuccessResponse)
        
    } catch (error) {
          ErrorResponse.error = error;
          return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    registerAirport,
    getAirports,
    getAirportById,
    updateAirport,
    deleteAirport,
}