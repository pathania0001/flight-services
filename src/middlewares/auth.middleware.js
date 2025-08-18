

const { ENUMS, ErrorResponse } = require("../utils/common");
const {AppError,} = require('../utils')
const { StatusCodes } = require('http-status-codes');
const { ALLOWED_SERVICES } = require("../config");

function isAuthenticated(req, res, next) {
  console.log("headerss :",req.headers)
  let isInternalServiceCall = false;
    const allowedServices = ALLOWED_SERVICES.split(" ");
  const callingService = req.headers['x-internal-service'];
  if(callingService && allowedServices.includes(callingService))
    isInternalServiceCall = true;
  if ( !req.headers["x-user-id"] && !isInternalServiceCall ) {
    //console.log("here in auth check")
    const error = new AppError(["Not Authenticated"],StatusCodes.UNAUTHORIZED)
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
  next();
}

function isAdmin(req, res, next) {
  console.log("headerss :",req.headers)
  if (req.headers["x-user-role"] !== ENUMS.USER_ROLE.ADMIN) {
   const error = new AppError(["Not Authenticated"],StatusCodes.UNAUTHORIZED)
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
  next();
}
module.exports = {
    isAuthenticated,
    isAdmin,
}