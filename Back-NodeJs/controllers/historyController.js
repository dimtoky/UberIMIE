//Imports
const bcrypt = require('bcryptjs');
const jwtUtils = require('../utils/jwt.utils');
const User = require("../models/User");
const { registerValidation, loginValidation } = require('../utils/validation');

const sgMail = require('@sendgrid/mail');
const History = require('../models/History');
sgMail.setApiKey('secret');

//Routes
module.exports = {

    getHistory: async (req, res) => {
        let email = req.body.email
       
       const histories = await History.find({email: email});

       console.log(histories);

       return res.status(200).json({histories});

    },

    newHistory: async (req, res) => {
        let email = req.body.email
        let data = req.body.data
        console.log(email);
        const history = new History({
            email: email,
            itineraryData: data
        });
        try {
            const savedItinerary = await history.save();
            return res.status(200).json({ error: null, savedItinerary });
        } catch (error) {
            return res.status(400).json({ error });
        }
    }
}
