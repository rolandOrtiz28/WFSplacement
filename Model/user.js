const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    score: {
        type: Number
    },
    percentage: {
        type: Number
    },
    qualification: {
        type: String
    }


}, { timestamps: true })


module.exports = mongoose.model('User', UserSchema);