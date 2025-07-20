
const Service = require('../services');
const {StatusCodes} = require('http-status-codes');
const {ErrorResponse,SuccessResponse} = require('../utils/common');
    /* 
       POST /api/v1/city/register
       Register a new City
    */
   const registerCity = async (req , res) =>{
    console.log("inside-City-controller")
    try {
        const city = await Service.City.createCity({
            name : req.body.name,
         })
       
         SuccessResponse.data = city;
      
         return res
                   .status(StatusCodes.ACCEPTED)
                   .json(SuccessResponse)
         
    } catch (error) {
      ErrorResponse.error = error;
         return res
                   .status(error.statusCode)
                   .json(ErrorResponse)
         
    }
}

    /*
       GET /api/v1/city
       Get all Cities
    */

const getAllCities = async (req,res) =>{
     try {
       console.log("inside-City-controller")
      const cities = await Service.City.getAllCities();
      SuccessResponse.data = cities;
      return res 
                .status(StatusCodes.OK)
                .json(SuccessResponse)
     } catch (error) {
        ErrorResponse.error = error;
        return res
                  .status(error.statusCode)
                  .json(ErrorResponse);
     }
}
    /*
       GET /api/v1/city/:id
       Get City by id
    */

const getCityById = async (req , res) =>{
     try {
       
      const city = await Service.City.getCityById(req.params.id);
      SuccessResponse.data = city;
      console.log(SuccessResponse.data)
      return res 
                .status(StatusCodes.OK)
                .json(SuccessResponse)
     } catch (error) {
        ErrorResponse.error = error;
        return res
                  .status(error.statusCode)
                  .json(ErrorResponse);
     }
}

const destroyCity = async (req,res) =>{
  try {
      const response = await Service.City.destroyCity(req.params.id);
      SuccessResponse.data = response;
      return res
                .status(StatusCodes.OK)
                .json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error;
    return res
              .status(error.statusCode)
              .json(ErrorResponse);
  }
}

const updateCity = async (req,res) =>{
    console.log("inside-City-controller")
       try {
          const city = await Service.City.updateCity(req.params.id,req.body);
          SuccessResponse.data = city;
          return res 
                      .status(StatusCodes.OK)
                      .json(SuccessResponse);
       } catch (error) {
          ErrorResponse.error = error;
          return res 
                    .status(error.statusCode)
                    .json(ErrorResponse);

       }

}
module.exports = {
    registerCity,
    getAllCities,
    getCityById,
    destroyCity,
    updateCity
}

