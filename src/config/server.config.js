
import  dotenv  from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 8000;
// export const DB_USER = process.env.DB_USER;
// export const DB_PASSWORD = process.env.DB_PASSWORD;
// export const DB_PORT = process.env.DB_PORT;
// export const DB_HOST = process.env.DB_HOST;
// export const DB_DIALECT = process.env.DB_HOST;
export const CORS_ORIGIN = process.env.CORS_ORIGIN;
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
export const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY;
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
export const CLOUDINARY_URL = process.env.CLOUDINARY_URL;
// export const NODE_ENV = process.env.NODE_ENV;

