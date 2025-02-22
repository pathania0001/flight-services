
//import connectDB from "./db/index.js";
import {app} from './app.js'
import { PORT , customlogger } from './config/index.js';

// connectDB()
// .then(() => {
//     app.listen(PORT, () => { 
//         console.log(` Server is running at port : ${PORT}`);
//         customlogger.info("Successfully started the server" ,"root",{});  
//     })
// })
app.listen(PORT, () => { 
    console.log(` Server is running at port : ${PORT}`);
    customlogger.info("Successfully started the server" ,"root",{});  
})
