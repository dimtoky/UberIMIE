//Imports
const express = require('express');
const jwtUtils = require('./utils/jwt.utils');
const usersController = require('./controllers/usersController');
const itinaryController = require('./controllers/itinaryController');
const historyController = require('./controllers/historyController');

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
    router.route('/itinary/').post(itinaryController.dijkstraTest);

    router.route('/itinary/save/').post( historyController.newHistory);


    return router;
})();

