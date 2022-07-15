const {Router} = require('express');
const router = Router(); //Allows to create new routes
const {getData, postData, getDataById, updateData, deleteData } = require('../controllers/restaurant.controller');

router.get('/', getData);
router.post('/', postData);
router.get('/:restaurantId', getDataById);
router.put('/:restaurantId', updateData);
router.delete('/:restaurantId', deleteData);


module.exports = router;