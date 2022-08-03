const restaurantModel = require("../../models/restaurant.model");

// The root provides a resolver function for each API endpoint
var root = {
    restaurant: async (args) => {
        var id = args.id;
        const restaurantData = await restaurantModel.find({});
        return restaurantData.filter(restaurant => {
            return restaurant.id == id;
        })[0];
    },
    restaurants: async (args) => {
        const restaurantData = await restaurantModel.find({});
        var result = restaurantData;
        if (args.type) {
            result = result.filter(restaurant => restaurant.type === args.type);
        }
        if (args.stars) {
            result = result.filter(restaurant => restaurant.stars === args.stars);
        }

        return result;
    }
};

module.exports = root;