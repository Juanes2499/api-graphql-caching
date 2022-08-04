
const express = require('express');
const routes = express();
const {graphqlHTTP}  = require('express-graphql');
const crediCardResolver = require('./resolvers/crediCard.resolver');
const crediCardSchema = require('./schemas/crediCard.schema');

routes.use('', graphqlHTTP ({
    schema: crediCardSchema,
    rootValue: crediCardResolver,
    graphiql: true
}));


module.exports = routes;