//Imports
const express = require('express');
const jwtUtils = require('./utils/jwt.utils');
const usersController = require('./controllers/usersController');

//Router
exports.router = (function () {
    var router = express.Router();

    //User routes
    router.route('/users/register/').post(usersController.register);

    router.route('/users/login/').post(usersController.login);

    router.route('/users/forgotpswd/').post(usersController.forgotPassword);
    
    router.route('/users/test/').get(jwtUtils.verifyJWTToken, usersController.test);
    
    router.route('/test/').post(usersController.dijkstraTest);
    
    return router;
})();

