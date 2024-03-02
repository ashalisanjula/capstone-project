const express = require('express')
const router = express.Router();
const authController = require('../controllers/auth-controller');
// const {check, validationResult, body } = require('express-validator');
const isValidDate = require('../utils/formatters/date-formatter');
const User = require('../models/user');

router.post('/signup', (req, res, next) => {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    if (!username) {
        res.send({sts: -1, error: 'username is required'});
    } else if (!email) {
        res.send({sts: -1, error: 'email is required'});
    } else if (!password) {
        res.send({sts: -1, error: 'password is required'});
    } else {
        authController.singup(req, res);
    }


});

// router.post('/signin', 
//     (req, res, next) => {
//         if (req.method !== 'POST') {
//             next({sts: 405, error: 'Method not Allowed'})
//         }
//         next();
//     },
//     check('email').isLength({min: 1})
//     .withMessage('Username cannot be empty'),
//     check('password').isLength({min: 1})
//     .withMessage('Password cannot be empty'), 
//     authController.signin)

module.exports = router;