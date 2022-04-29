const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = new Schema ({
    firstname: String,
    lastname: String,
    password: String,
    level: String, 
    profileimage: File,
    comments: Array
})

module.exports = mongoose.model('users', user);