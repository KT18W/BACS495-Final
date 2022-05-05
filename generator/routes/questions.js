const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: {
        type: String,
        required: true,
        minLength: 1
        //could validate stuff here
    },
    answers: {
        type: [String],
        requried: false,
        minLength: 1
    },
    votes: {
        type: Number,
        required: false,
        min: 0
    }
});

const Questions = mongoose.model('questions', questionSchema);
module.exports = Questions;