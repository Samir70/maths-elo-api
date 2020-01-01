const express = require('express');
const ratingsController = require('../controllers/QRatings');

handleRatings = express.Router();

handleRatings.get('/all', ratingsController.getAllRatings);
handleRatings.get('/get1rating', ratingsController.get1Rating);
handleRatings.put('/new-data', ratingsController.updateRatings);

module.exports = handleRatings;