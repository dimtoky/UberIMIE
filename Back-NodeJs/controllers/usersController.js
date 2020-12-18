//Imports
const bcrypt = require('bcryptjs');
const jwtUtils = require('../utils/jwt.utils');
const User = require("../models/User");
const { registerValidation, loginValidation } = require('../utils/validation');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('secret');

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

    test: (req, res) => {
        res.json({
            error: null,
            data: {
                success: "success"
            },
        });
    },

    forgotPassword: (req, res) => {
        User.findOne({email: req.body.email})
            .then(user => {
                if (!user) return res.status(401).json({message: 'The email address ' + req.body.email + ' is not associated with any account. Double-check your email address and try again.'});
    
                //Generate and set password reset token
                user.generatePasswordReset();
    
                // Save the updated user object
                user.save()
                    .then(user => {
                        // send email
                        let link = "http://localhost:3000/resetpassword/" + user.resetPasswordToken;
                        const mailOptions = {
                            to: user.email,
                            from: 'dimension43@hotmail.fr',
                            subject: "Uber - Demande de réinitialisation du mot de passe",
                            html: `<p style="text-align: center">Bonjour ${user.name}</p>
                            <p style="text-align: center">Ton mot de passe Uber peut être réinitialisé en cliquant sur le lien ci-dessous.</p>
                            <a href="${link}" style="display:block; text-align: center">Lien de réinitialisation du mot de passe</a>
                            <p style="text-align: center">Si tu n'as pas demandé un nouveau mot de passe, ignore cet e-mail.</p>
                               `,
                        };
    
                        sgMail.send(mailOptions, (error, result) => {
                            if (error) return res.status(500).json({message: error.message});
    
                            res.status(200).json({message: 'A reset email has been sent to ' + user.email + '.'});
                        });
                    })
                    .catch(err => res.status(500).json({message: err.message}));
            })
            .catch(err => res.status(500).json({message: err.message}));
    },
    
    // @route POST api/auth/reset
    // @desc Reset Password - Validate password reset token and shows the password reset view
    // @access Public
    reset: (req, res) => {
        User.findOne({resetPasswordToken: req.params.token, resetPasswordExpires: {$gt: Date.now()}})
            .then((user) => {
                if (!user) return res.status(401).json({message: 'Password reset token is invalid or has expired.'});
    
                //Redirect user to form with the email address
                res.render('reset', {user});
            })
            .catch(err => res.status(500).json({message: err.message}));
    },
    
    
    // @route POST api/auth/reset
    // @desc Reset Password
    // @access Public
    resetPassword: (req, res) => {
        console.log(req.body.token)

        token = req.body.token

        User.findOne({resetPasswordToken: token, resetPasswordExpires: {$gt: Date.now()}})
            .then((user) => {
                if (!user) return res.status(401).json({message: 'Password reset token is invalid or has expired.'});
    
                //Set the new password
                user.password = req.body.password;
                user.resetPasswordToken = undefined;
                user.resetPasswordExpires = undefined;
    
                // Save
                user.save((err) => {
                    if (err) return res.status(500).json({message: err.message});
    
                    // send email
                    const mailOptions = {
                        to: user.email,
                        from: 'dimension43@hotmail.fr',
                        subject: "Uber - réinitialisation du mot de passe réussie",
                        text: `Hi ${user.username} \n 
                        Nous vous confirmons que le mot de passe associé à la boite mail ${user.email} a été modifié avec succés.\n`
                    };
    
                    sgMail.send(mailOptions, (error, result) => {
                        if (error) return res.status(500).json({message: error.message});
    
                        res.status(200).json({message: 'Your password has been updated.'});
                    });
                });
            });
    }


}
