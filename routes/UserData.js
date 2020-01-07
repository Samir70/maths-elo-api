const express = require('express');
const userController = require('../controllers/UserData');

handleUserData = express.Router();

handleUserData.put('/login', userController.get1User);

module.exports = handleUserData;