const User = require('../models/user');
const jwt = require('jsonwebtoken');
const appConfig = require('../app-configs');

exports.singup =  async (req, res, next) => {
    let user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    let isEmailExist = User.checkEmailExists(user.email);
    let isUsernameExists = await User.checkUsernameExists(user.username);

    if (isEmailExist) {
        res.status(400).json({sts: -1, error: 'Email already exists'})
    }else if(isUsernameExists) {
        res.status(400).json({sts: -1, error: 'Username already exists'})
    } else {
        let savedDoc = await user.save();
    
        if (savedDoc){
            res.status(200).json({sts: 1})
        }else {
            console.log(error);
        res.status(500).json({sts: -1, error: 'Internal Server Error'})
        }
        
    }

}

exports.signin = async (req, res, next) => {
    const user = await User.login(req.body.email, req.body.password);
    
    if (user) {
        let token = jwt.sign({userId: user.id}, appConfig.jwtSecretKey, {expiresIn: '6h'});
        user.password = undefined; 
        user.token = token;
        console.log(user);
        res.status(200).json({sts: 1, user: user});
    } else {
        res.status(401).json({sts: -1, error: 'Username or password incorrect'});
    }
}
