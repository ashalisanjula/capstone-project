const express = require('express');
const app = express();
const appConfig = require('./app-configs');
const jwt = require('jsonwebtoken');

const authRouter = require('./routes/auth-router');
const workspaceRouter = require('./routes/workspace-router');
const connectMongo = require('./db-connect');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ //This middleware configuration allows the application to parse incoming request bodies in URL-encoded and JSON formats.
    extended: true
  }));

app.use(bodyParser.json());


app.use('/', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
    next();
});

app.use('/auth', authRouter);

app.use('/', (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        res.status(401).json({ error: 'Token is required, Access denied' })
    } else {
        const decodedToken = jwt.verify(token, appConfig.jwtSecretKey);
        console.log(req.body.userId);
        console.log(decodedToken);
        if (req.body.userId !== decodedToken.userId) {
            
            res.status(401).json({ error: 'Token is invalid, Access denied' })
        } else { 
            next();
        }
    }
})

app.use('/ws', workspaceRouter);

app.use('/', (req, res, next) => { 
    res.status(404).json({sts: -1, error: 'Invalid URL or request method'});
});

// app.use('/', (req,res, next) =>{
//     const 
// })



connectMongo().then (() => {
    console.log(`Database Connected`); 
    let port = appConfig.connectionPort || 3000
    app.listen(port, () => {
        console.log(`Server is listening in port ${port}`);
    });
}).catch((error) => {
    console.log('Database connection failed', error);
})

