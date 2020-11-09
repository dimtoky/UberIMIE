//Imports
const express = require('express');
var usersController = require('./controllers/usersController');

//Router
exports.router = (function () {
    var router = express.Router();

    //User routes
    router.route('/users/register/').post(usersController.register);

    router.route('/users/login/').post(usersController.login);

    router.route('/users/frogotpswd/').post(usersController.forgotPassword);


    return router;
})();
