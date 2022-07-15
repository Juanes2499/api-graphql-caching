require("dotenv").config();
const express = require('express');
const app = express();
const morgan = require('morgan');
// const bodyParser = require('body-parser');
const routers = require('./routes/index');
const mongoose = require('mongoose');

// BD
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, {dbName:process.env.MONGO_DB})
    .then(db => console.log('DB Mongo is connected'))
    .catch(err => console.log(err));

// Settings
app.set('port', process.env.PORT||3000);
app.set('json spaces', 2); // Give some space for the response body

// Middleware
app.use(morgan('combined')); //It is used when it is in a development environment to be able to print a log in the console
app.use(express.urlencoded({extended: false})) //Allows the server to understand forms sent from HTML
app.use(express.json()); //Allows the server to receive JSON formats and understand them

// Routers
app.use('/api',routers);

// Starting server
app.listen(app.get('port'), () => {
    console.log(`API Cache GraphQL running on port ${app.get('port')}.`);
});