
const express  = require('express');

const airplaneRoutes = require('./airplane.routes');
const cityRoutes = require('./city.routes');
const airportRoutes = require('./airport.routes');

const v1Routes = express.Router();

v1Routes.use('/airplane',airplaneRoutes);

v1Routes.use('/city',cityRoutes);

v1Routes.use('/airport',airportRoutes);

module.exports = v1Routes;
