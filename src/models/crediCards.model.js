const mongoose = require('mongoose');
const { Schema } = mongoose;

const crediCardsSchema = new Schema({
    _id: Object,
    CLIENTNUM: Number,
    Attrition_Flag: String,
    Customer_Age: Number,
    Gender: String,
    Dependent_count: Number,
    Education_Level: String,
    Marital_Status: String,
    Income_Category: String,
    Card_Category: String,
    Months_on_book: Number,
    Total_Relationship_Count: Number,
    Months_Inactive_12_mon: Number,
    Contacts_Count_12_mon: Number,
    Credit_Limit: Number,
    Total_Trans_Amt: Number,
    Total_Trans_Ct: Number
});

module.exports = mongoose.model('CrediCards', crediCardsSchema, 'CrediCards');