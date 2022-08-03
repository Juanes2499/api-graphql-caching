var { buildSchema } = require('graphql');

// GraphQL schema
var schema = buildSchema(`
    type Query {
      hello: String
      restaurant(id: String): Restaurant
      restaurants(type: String, stars: Int): [Restaurant]
    },
    type Restaurant {
      id: String
      name: String
      type: String
      map: String
      stars: Int
    }
`);

module.exports = schema;