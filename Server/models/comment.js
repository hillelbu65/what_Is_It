const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comment = new Schema ({
    userId: String,
    content: String
})

module.exports = mongoose.model('comments', comment);