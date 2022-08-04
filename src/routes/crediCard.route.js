const {Router} = require('express');
const router = Router(); //Allows to create new routes
const {getData, postData, getDataById, updateData, deleteData } = require('../controllers/crediCards.controller');

router.get('/', getData);
router.post('/', postData);
router.get('/:clientNum', getDataById);
router.put('/:clientNum', updateData);
router.delete('/:clientNum', deleteData);

module.exports = router;