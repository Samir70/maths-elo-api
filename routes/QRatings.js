const express = require('express');
const ratingsController = require('../controllers/QRatings_PG');

handleRatings = express.Router();

handleRatings.get('/all', ratingsController.getAllRatings);
handleRatings.get('/get1rating', ratingsController.get1Rating);
handleRatings.post('/new-data', ratingsController.updateRatings);

module.exports = handleRatings;