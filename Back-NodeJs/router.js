//Imports
const express = require('express');
const jwtUtils = require('./utils/jwt.utils');
const usersController = require('./controllers/usersController');
const historyController = require('./controllers/historyController');
const itinaryController = require('./controllers/itineraryController');

//Router
exports.router = (function () {
    var router = express.Router();

    //User routes
    router.route('/users/register/').post(usersController.register);

    router.route('/users/login/').post(usersController.login);

    router.route('/users/forgotpswd/').post(usersController.forgotPassword);

    router.route('/users/resetpswd/').post(usersController.resetPassword);
    
    router.route('/users/test/').get(jwtUtils.verifyJWTToken, usersController.test);

    // Itinary routes
    router.route('/itinerary/').post(itinaryController.dijkstraTest);

    router.route('/itinerary/save/').post( historyController.newHistory);

    router.route('/itinerary/load/').post( historyController.getHistory);



    return router;
})();

