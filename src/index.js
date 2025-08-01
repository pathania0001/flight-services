
const app  = require('./app');
const { PORT, loggerConfig } = require('./config');
const { Flight } = require('./middlewares');

app.listen(PORT, async () => {
  console.log(`🚀 Server is running at port: ${PORT}`);
  loggerConfig.info("Successfully started the server", "root", {});
});
