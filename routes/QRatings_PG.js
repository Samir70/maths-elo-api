const express = require('express');
const ratingsController = require('../controllers/QRatings_PG');

handleRatingsPG = express.Router();

handleRatingsPG.get('/all', ratingsController.getAllRatings);
handleRatingsPG.get('/get1rating', ratingsController.get1Rating);
handleRatingsPG.post('/new-data', ratingsController.updateRatings);

module.exports = handleRatingsPG;