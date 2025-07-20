// const connectDB = require('./db'); // Uncomment if you're connecting to DB
const app  = require('./app');
const { PORT, loggerConfig } = require('./config');

// If you’re connecting to a DB before starting the server
// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`🚀 Server is running at port: ${PORT}`);
//       customlogger.info("Successfully started the server", "root", {});
//     });
//   })
//   .catch((err) => {
//     console.error("DB connection failed:", err);
//   });

app.listen(PORT, () => {
  console.log(`🚀 Server is running at port: ${PORT}`);
  loggerConfig.info("Successfully started the server", "root", {});
});
