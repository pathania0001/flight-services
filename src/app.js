const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { CORS_ORIGIN, COOKIE_SIGN } = require("./config/index.js");
const routes = require("./routes/index.js");

const app = express();


app.use(
  cors({
    origin: CORS_ORIGIN
  })
);


app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));


app.use(express.static("public"));


app.use(cookieParser(COOKIE_SIGN));

// Health check route (optional)
app.get("/", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is up!" });
});


app.use("/api", routes);


module.exports = app ;
