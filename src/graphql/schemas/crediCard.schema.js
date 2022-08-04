var { buildSchema } = require('graphql');

// GraphQL schema
var schema = buildSchema(`
    type Query {
      hello: String
      crediCard(clientNum: Int): CrediCard
      crediCards(Customer_Age: Int, Gender: String, Marital_Status: String, Card_Category: String, Months_on_book: Int,): [CrediCard]
    },
    type CrediCard {
      CLIENTNUM: Int,
      Attrition_Flag: String,
      Customer_Age: Int,
      Gender: String,
      Dependent_count: Int,
      Education_Level: String,
      Marital_Status: String,
      Income_Category: String,
      Card_Category: String,
      Months_on_book: Int,
      Total_Relationship_Count: Int,
      Months_Inactive_12_mon: Int,
      Contacts_Count_12_mon: Int,
      Credit_Limit: Int,
      Total_Trans_Amt: Int,
      Total_Trans_Ct: Int
    }
`);

module.exports = schema;