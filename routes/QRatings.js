const express = require('express');
const ratingsController = require('../controllers/QRatings');

handleRatings = express.Router();

handleRatings.get('/all', ratingsController.getAllRatings);
handleRatings.post('/new-data', ratingsController.updateRatings);

module.exports = handleRatings;