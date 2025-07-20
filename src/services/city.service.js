const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils");
const { CityRepositiry } = require("../repositories");

const cityRepository = new CityRepositiry();

const createCity = async (data) => {
  console.log("inside-city-services");
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
   if (error.name === "SequelizeValidationError" || error.name === "SequelizeUniqueConstraintError") {
      let explanation = [];
      error.errors.forEach((errorField) => {
        explanation.push(errorField.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot Create new City object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const getAllCities = async () => {
  try {
    const city = await cityRepository.getAll();
    return city;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of all city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const getCityById = async (id) => {
  try {
    const city = await cityRepository.get(id);
    return city;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError("City not found", error.statusCode);
    }
    throw new AppError(
      "Cannot fetch data from City",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const destroyCity = async (id) => {
  try {
    const response = await cityRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError("City not found", error.statusCode);
    }
    throw new AppError(
      "Cannot delete City",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const updateCity = async (id, data) => {
  try {
    const response = await cityRepository.update(id, data);
    return response;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError("City not found", error.statusCode);
    }
    throw new AppError(
      "Cannot update City",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

module.exports = {
  createCity,
  getAllCities,
  getCityById,
  destroyCity,
  updateCity,
};
