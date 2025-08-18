
module.exports = {
  PORT: process.env.PORT || 8000,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: process.env.DB_PORT,
  DB_HOST: process.env.DB_HOST,
  DB_DIALECT: process.env.DB_DIALECT,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  COOKIE_SIGN:process.env.COOKIE_SIGN,
  TOKEN_SECURITY_KEY:process.env.TOKEN_SECURITY_KEY,
  User_Services:process.env.User_Services,
  ALLOWED_SERVICES:process.env.ALLOWED_SERVICES,
  THIS_SERVICE:process.env.THIS_SERVICE,
};
