
const express  = require('express');

const airplaneRoutes = require('./airplane.routes');
const cityRoutes = require('./city.routes');

const v1Routes = express.Router();

v1Routes.use('/airplane',airplaneRoutes);

v1Routes.use('/city',cityRoutes);

module.exports = v1Routes;
