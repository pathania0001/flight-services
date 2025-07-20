const serverConfig = require('./server.config.js')
const loggerConfig =  require('./logger.config.js')

module.exports ={
    ...serverConfig,
    loggerConfig,
}