const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = new Schema ({
    title: String, 
    description: String,
    images: Image,
    comments: Array,
    likes: Number
})

module.exports = mongoose.model('posts', post);