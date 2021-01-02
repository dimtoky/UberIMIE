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
            const savedHistory = history.save();
            return res.status(200).json({ error: null, data: savedHistory });
        } catch (error) {
            return res.status(400).json({ error });
        }



    },

    newHistory: async (req, res) => {
        let email = req.body.email
        // let password = req.body.password
        // // validate  user
        // const { error } = loginValidation(req.body);
        // // throw validation errors
        // if (error)
        //     return res.status(400).json({ error: error.details[0].message });

        // const user = await User.findOne({ email: email });
        // // throw error when email is wrong
        // if (!user)
        //     return res.status(400).json({ error: "Email is wrong" });
        // // check for password correctness
        // const validPassword = await bcrypt.compare(password, user.password);

        // if (!validPassword)
        //     return res.status(400).json({ error: "Password is wrong" });


        // const token = jwtUtils.generateTokenForUser(user)

        // res.status(200).json({
        //     error: null,
        //     data: {
        //         message: "Login successful",
        //         token: token
        //     },
        // });
        console.log(emails);
        const history = new History({
            email: emails
        });
        try {
            const savedHistory = await history.save();
            return res.status(200).json({ error: null, data: savedHistory });
        } catch (error) {
            return res.status(400).json({ error });
        }
    }
}
