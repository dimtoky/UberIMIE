//Imports
var bcrypt = require('bcryptjs');
var jwtUtils = require('../utils/jwt.utils');

const NUMBER_REGEX = /^(0|(\+)?[1-9]{1}[0-9]{0,8}|(\+)?[1-3]{1}[0-9]{1,9}|(\+)?[4]{1}([0-1]{1}[0-9]{8}|[2]{1}([0-8]{1}[0-9]{7}|[9]{1}([0-3]{1}[0-9]{6}|[4]{1}([0-8]{1}[0-9]{5}|[9]{1}([0-5]{1}[0-9]{4}|[6]{1}([0-6]{1}[0-9]{3}|[7]{1}([0-1]{1}[0-9]{2}|[2]{1}([0-8]{1}[0-9]{1}|[9]{1}[0-5]{1})))))))))$/;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20}/;


//Routes
module.exports = {
    register: function (req, res) {
        //TO DO

        return res.status(200).json({
            //TO DO
            'register': 'ok'
        });

    },

    login: function (req, res) {
        //TO DO

        return res.status(200).json({
            //TO DO

            'login': 'ok'
        });


    },


    forgotPassword: function (req, res) {
        //TO DO

        return res.status(200).json({
            //TO DO
            'forgot': 'ok'
        });


    },








}
