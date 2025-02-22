// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";
//  import {DB_URL} from "../config/index.js"

// const connectDB=async()=>{
//     try {
//     const connectionInstance =await mongoose.connect(`${DB_URL}/${DB_NAME}`);
//     console.log(`mongodb connected : ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log("monogdb connection error", error);
//         process.exit(1);   //nodejs give access to process exit which is ongoing from above
//         //now no need to throw error here

//     }
// }
// export default connectDB;