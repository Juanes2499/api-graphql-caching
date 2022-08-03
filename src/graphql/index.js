
const express = require('express');
const routes = express();
const {graphqlHTTP}  = require('express-graphql');
const restaurantResolver = require('./resolvers/restaurant.resolver');
const restauarantSchema = require('./schemas/restaurant.schema');

routes.use('', graphqlHTTP ({
    schema: restauarantSchema,
    rootValue: restaurantResolver,
    graphiql: true
}));


module.exports = routes;