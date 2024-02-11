const express = require('express')
const router = express.Router();

router.post('/login', function (req, res) {
    let username = req.body.username;
    let pass = req.body.password;

    console.log(username);
    console.log(pass);

    if (username === 'abc' && pass === 'xyz') {
        res.status(200);
        res.send({sts: 1});
    } else {
        res.status(401);
        res.send({sts: 0});
    }

})

router.get('/signup', function (req, res) {
    res.status(200);
    res.send('Hello Signup'); 
})


module.exports = router;