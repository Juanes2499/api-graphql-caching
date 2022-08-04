const crediCardsModel = require("../models/crediCards.model");

// The root provides a resolver function for each API endpoint
// var root = {
//     restaurant: async (args) => {
//         var id = args.id;
//         const restaurantData = await crediCardsModel.find({});
//         return restaurantData.filter(restaurant => {
//             return restaurant.id == id;
//         })[0];
//     },
//     restaurants: async (args) => {
//         const restaurantData = await crediCardsModel.find({});
//         var result = restaurantData;
//         if (args.type) {
//             result = result.filter(restaurant => restaurant.type === args.type);
//         }
//         if (args.stars) {
//             result = result.filter(restaurant => restaurant.stars === args.stars);
//         }

//         return result;
//     }
// };

module.exports = {
    getData: async (req, res, next) => {
        try {
            const crediCards = await crediCardsModel.find({});
            res.status(200).json(crediCards);
        } catch (error) {
            res.status(500).json({ error: 'Ha ocurrido un error al momento de consultar los datos.' });
        }
    },
    postData: async (req, res, next) => {
        try {
            const newCrediCard = new crediCardsModel(req.body);
            const crediCardCreated = await newCrediCard.save();
            res.status(201).json(crediCardCreated);
        } catch (error) {
            res.status(500).json({ error: 'Ha ocurrido un error al momento de crear un dato.' });
        }
    },
    getDataById: async (req, res, next) => {
        try {
            const { clientNum } = req.params;
            const crediCard = await crediCardsModel.findOne({CLIENTNUM: clientNum});
            res.status(200).json(crediCard);
        } catch (error) {
            res.status(500).json({ error: 'Ha ocurrido un error al momento de consultar un dato por ID.' });
        }
    },
    updateData: async (req, res, next) => {
        try {
            const { clientNum } = req.params;
            const crediCardUpdate = req.body;
            const oldCrediCard = await crediCardsModel.findOneAndUpdate({CLIENTNUM: clientNum}, crediCardUpdate);
            res.status(200).json({ succes: true, oldData: oldCrediCard });
        } catch (error) {
            res.status(500).json({ error: 'Ha ocurrido un error al momento de actualizar un dato por ID.' });
        }
    },
    deleteData: async (req, res, next) => {
        try {
            const { clientNum } = req.params;
            const oldCrediCard = await crediCardsModel.findOneAndDelete({CLIENTNUM: clientNum});
            res.status(200).json({ succes: true, deletedData: oldCrediCard });
        } catch (error) {
            res.status(500).json({ error: 'Ha ocurrido un error al momento de eliminar un dato por ID.' });
        }
    }
};