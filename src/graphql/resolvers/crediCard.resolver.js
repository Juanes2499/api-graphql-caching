const crediCardModel = require("../../models/crediCards.model");

// The root provides a resolver function for each API endpoint
var root = {
    crediCard: async (args) => {
        const clientNum = args.clientNum;
        const crediCardData = await crediCardModel.findOne({CLIENTNUM: clientNum});
        return crediCardData
        // return crediCardData.filter(crediCard => {
        //     return crediCard._id.toString() === _id;
        // })[0];
    },
    crediCards: async (args) => {
        const crediCardData = await crediCardModel.find({});
        let result = crediCardData;
        if (args.type) {
            result = result.filter(crediCard => crediCard.type === args.type);
        }
        if (args.stars) {
            result = result.filter(crediCard => crediCard.stars === args.stars);
        }
        return result;
    }
};

module.exports = root;