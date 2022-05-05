var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var newQuestionsRouter = require('./routes/newQuestions');
var questionsRouter = require('./routes/questions');

var app = express();

const dbURI = 'mongodb+srv://kdog42:kdog42@cluster0.c15j3.mongodb.net/usersdb?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then((result) => console.log("mongoose connected"))
    .catch((err) => console.log(err))

app.use(cors({origin: "*"}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/questions', questionsRouter);
app.use('/newQuestions', newQuestionsRouter);

module.exports = app;
