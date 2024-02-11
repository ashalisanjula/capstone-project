const express = require('express');
const bodyParser = require('body-parser');
// const expressSanitizer = require('express-sanitizer');
// const conn = require('./db');
const authRouter = require('./routers/auth-router');

const app = express();
const port = 3000;

// console.log('Database Connected');

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(expressSanitizer());

// routes(app);

app.use('/auth', authRouter);


app.listen(port);

console.log('Server started on: ' + port);