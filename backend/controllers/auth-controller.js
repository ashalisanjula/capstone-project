const User = require('../models/user');

exports.singup = (req, res, next) => {
    let user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    let isEmailExist = User.checkEmailExists(user.email);

    if (isEmailExist) {
        console.log(isEmailExist);
    }

    user.save()
    .then((savedDob) => {
        res.status(200).json({sts: 1});
    }).catch((error) => {
        console.log(error);
        res.status(500).json({sts: -1, erorr: 'Internal Server Error'})
    })

}

exports.signin = async (req, res, next) => {
    const user = await User.login(req.body.email, req.body.password);
    
    if (user) {
        user.password = undefined; 
        console.log(user);
        res.status(200).json({sts: 1, user: user});
    } else {
        res.status(401).json({sts: -1});
    }
}
