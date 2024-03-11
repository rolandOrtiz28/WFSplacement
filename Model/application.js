const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ApplicationSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false,
    },
    age: {
        type: Number,
        required: true,
        unique: false,
    },
    gender: {
        type: String,
        required: true,
        unique: false,
    },
    position: {
        type: String,
        required: true,
        unique: false,
    },
    score: {
        type: Number,
        unique: false,
    },
    percentage: {
        type: Number,
        unique: false,
    },
    qualification: {
        type: String,
        unique: false
    }
   


}, { timestamps: true })


module.exports = mongoose.model('Application', ApplicationSchema);