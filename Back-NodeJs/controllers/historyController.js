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


        // validate the user
        const { error } = registerValidation(req.body);
        if (error)
            return res.status(400).json({ error: error.details[0].message });


        const isEmailExist = await User.findOne({ email: email });
        if (isEmailExist)
            return res.status(400).json({ error: "Email doesn`t exists" });
        console.log(isEmailExist);
        const history = new History({
            email: email
        });
        try {
            const savedUser = history.save();
            return res.status(200).json({ error: null, data: savedUser });
        } catch (error) {
            return res.status(400).json({ error });
        }



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
