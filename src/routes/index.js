
const express = require('express');
const routes = express();
const restaurantRoute = require('./restaurant.route');

routes.use('/restaurant', restaurantRoute);

module.exports = routes;

