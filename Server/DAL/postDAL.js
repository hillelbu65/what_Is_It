require('../configs/mongodbConction')
const postModel = require('../models/post')

const getAllPosts = () => {
    return new Promise((resolve, reject) => {
        postModel.find({}, (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data)
            }
        })
    })
}

// getAllPosts()

const getPost = (id) => {
    return new Promise((resolve, reject) => {
        postModel.findById(id, (error, data) => {
            if(error){
                reject(error);
            }else {
                resolve(data) 
            }
        })
    })
}

// getPost('626bb46e43d71645d61d999f')

const addPost = (obj) => {
    const newPost = new postModel(obj)
    return new Promise((resolve, reject) => {
        newPost.save( (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data)
            }
        })
    })
}

// addPost({userId: 'you68', content: 'TEST'})

const updatePost = (id, obj) => {
    return new Promise((resolve,  reject) => {
        postModel.findByIdAndUpdate(id, obj,  (error, data) => {
            if(error) {
                reject(error); 
            }else {
                resolve(data)
            }
        })
    })
}

// updatePost('626bb46e43d71645d61d999f', {userId: 'youUpdateTEST'})


const deletePost = (id) => {
    return new Promise((resolve, reject) => {
        postModel.findByIdAndDelete(id,  (error, data) => {
            if(error) {
                reject(error);
            }else {
                resolve(data) 
            }
        })
    })
}


// deletePost('626bb46e43d71645d61d999f')

module.exports = {getAllPosts, getPost, addPost, updatePost, deletePost}