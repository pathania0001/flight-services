import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import { CORS_ORIGIN } from "./config/index.js";
import router from "./routes/index.js";

const app=express();

app.use(cors({
    origin : CORS_ORIGIN,
    credentials : true  
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))

app.use(cookieParser())

//above is just backend setup


//now start api routing


app.use("/api",router)

export {app}


