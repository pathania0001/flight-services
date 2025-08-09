const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils");
const { AirportRepository } = require("../repositories");

const airportRepository = new AirportRepository();

const createAirport = async (data) => {
  console.log("inside-airport-services");
  try {
    const airport = await airportRepository.create(data);
    return airport;
  } catch (error) {
    if (error.name === "SequelizeValidationError" || error.name === "SequelizeUniqueConstraintError") {
      let explanation = [];
      error.errors.forEach((errorField) => {
        explanation.push(errorField.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    
    throw new AppError(
      "Cannot Create new Airport object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const getAllAirports = async () => {
  try {
    const airports = await airportRepository.getAll();
    return airports;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of all airports",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const getAirportById = async (id) => {
  try {
    const airport = await airportRepository.get(id);
    return airport;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError("Airport not found", error.statusCode);
    }
    throw new AppError(
      "Cannot fetch data from airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const destroyAirport = async (id) => {
  try {
    const response = await airportRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError("Airport not found", error.statusCode);
    }
    if(error instanceof AppError)
      throw error;
    throw new AppError(
      "Cannot delete airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const updateAirport = async (id, data) => {
  try {
    const response = await airportRepository.update(id, data);
    return response;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError("Airport not found", error.statusCode);
    }
    throw new AppError(
      "Cannot update airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

module.exports = {
  createAirport,
  getAllAirports,
  getAirportById,
  destroyAirport,
  updateAirport,
};
