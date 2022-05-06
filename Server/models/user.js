const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema ({
    firstname: String,
    lastname: String,
    password: String,
    email: String,
    level: Number, 
    comments: Array
})

module.exports = mongoose.model('users', user);