const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantSchema = new Schema({
    id: Number,
    name: String,
    type: String,
    stars: Number,
    map: String
});

module.exports = mongoose.model('restaurant', restaurantSchema);