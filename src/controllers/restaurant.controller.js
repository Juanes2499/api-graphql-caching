const restaurantModel = require("../models/restaurant.model");

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

module.exports = {
    getData: async (req, res, next) => {
        try {
            const restaurants = await restaurantModel.find({});
            res.status(200).json(restaurants);
        } catch (error) {
            res.status(500).json({ error: 'Ha ocurrido un error al momento de consultar los restaurantes.' });
        }
    },
    postData: async (req, res, next) => {
        try {
            const newRestaurant = new restaurantModel(req.body);
            const restaurantCreated = await newRestaurant.save();
            res.status(201).json(restaurantCreated);
        } catch (error) {
            res.status(500).json({ error: 'Ha ocurrido un error al momento de crear un restaurante.' });
        }
    },
    getDataById: async (req, res, next) => {
        try {
            const { restaurantId } = req.params;
            const restaurant = await restaurantModel.findById(restaurantId);
            res.status(200).json(restaurant);
        } catch (error) {
            res.status(500).json({ error: 'Ha ocurrido un error al momento de consultar un restaurante por ID.' });
        }
    },
    updateData: async (req, res, next) => {
        try {
            const { restaurantId } = req.params;
            const restaurantUpdate = req.body;
            const oldRestaurant = await restaurantModel.findByIdAndUpdate(restaurantId, restaurantUpdate);
            res.status(200).json({ succes: true, oldData: oldRestaurant });
        } catch (error) {
            res.status(500).json({ error: 'Ha ocurrido un error al momento de actualizar un restaurante por ID.' });
        }
    },
    deleteData: async (req, res, next) => {
        try {
            const { restaurantId } = req.params;
            const restaurant = await restaurantModel.findById(restaurantId);
            const oldRestaurant = await restaurantModel.deleteOne(restaurant);
            res.status(200).json({ succes: true, deletedData: oldRestaurant });
        } catch (error) {
            res.status(500).json({ error: 'Ha ocurrido un error al momento de eliminar un restaurante por ID.' });
        }
    }
};