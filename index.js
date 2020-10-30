//TODO LO DE EXPRESS
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const morgan = require('morgan');

//MIDDLEWARE

app.use(express.json());
app.use(morgan('dev'));

//ROUTES

// routes: localhost:7000/user
app.use('/user', userRouter);

module.exports = app;