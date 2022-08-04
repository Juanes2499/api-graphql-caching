
const express = require('express');
const routes = express();
const crediCardRoute = require('./crediCard.route');

routes.use('/crediCard', crediCardRoute);

module.exports = routes;

