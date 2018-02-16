const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// Do work here
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', storeController.createStore);


module.exports = router;


//req: has all of the information coming in
//res: has all the methods for sending data back
//res.query: to get query params
//res.params: used to access the things that are in the url