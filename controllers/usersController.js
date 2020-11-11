//Imports
const bcrypt = require('bcryptjs');
const jwtUtils = require('../utils/jwt.utils');
const User = require("../models/User");
const { registerValidation, loginValidation } = require('../utils/validation');


//Routes
module.exports = {

    register: async (req, res) => {
        let name = req.body.name
        let email = req.body.email
        let password = req.body.password


        // validate the user
        const { error } = registerValidation(req.body);
        if (error)
            return res.status(400).json({ error: error.details[0].message });


        const isEmailExist = await User.findOne({ email: email });
        if (isEmailExist)
            return res.status(400).json({ error: "Email already exists" });

        // hash the password
        const salt = await bcrypt.genSalt(10);
        const cryptedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            name: name,
            email: email,
            password: cryptedPassword,
        });
        try {
            const savedUser = await user.save();
            return res.status(200).json({ error: null, data: savedUser });
        } catch (error) {
            return res.status(400).json({ error });
        }



    },

    login: async (req, res) => {
        let email = req.body.email
        let password = req.body.password

        // validate  user
        const { error } = loginValidation(req.body);
        // throw validation errors
        if (error)
            return res.status(400).json({ error: error.details[0].message });

        const user = await User.findOne({ email: email });
        // throw error when email is wrong
        if (!user)
            return res.status(400).json({ error: "Email is wrong" });
        // check for password correctness
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword)
            return res.status(400).json({ error: "Password is wrong" });


        const token = jwtUtils.generateTokenForUser(user)

        res.status(200).json({
            error: null,
            data: {
                message: "Login successful",
                token: token
            },
        });
    },


    forgotPassword: function (req, res) {
        //TO DO

        return res.status(200).json({
            //TO DO
            'forgot': 'ok'
        });


    },


    test: (req, res) => {
        res.json({
            error: null,
            data: {
                success: "success"
            },
        });
    },





}
