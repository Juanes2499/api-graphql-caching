const mongoose = require('mongoose');
const { Schema } = mongoose;

const crediCardsSchema = new Schema({
    _id: Object,
    CLIENTNUM: String,
    Attrition_Flag: String,
    Customer_Age: String,
    Gender: String,
    Dependent_count: String,
    Education_Level: String,
    Marital_Status: String,
    Income_Category: String,
    Card_Category: String,
    Months_on_book: String,
    Total_Relationship_Count: String,
    Months_Inactive_12_mon: String,
    Contacts_Count_12_mon: String,
    Credit_Limit: String,
    Total_Trans_Amt: String,
    Total_Trans_Ct: String,
    Total_Ct_Chng_Q4_Q1: String,
    Avg_Utilization_Ratio: String,
    Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Count_12_mon_Dependent_count_Education_Level_Months_Inactive_12_mon_1: String,
    Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Count_12_mon_Dependent_count_Education_Level_Months_Inactive_12_mon_2: String
});

module.exports = mongoose.model('CrediCards', crediCardsSchema, 'CrediCards');