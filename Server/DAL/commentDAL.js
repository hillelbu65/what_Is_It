require('../configs/mongodbConction')
const commentModel = require('../models/comment')

const getAllComments = () => {
    return new Promise((resolve, reject) => {
        commentModel.find({}, (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data)
            }
        })
    })
}

// getAllComment()

const getComment = (id) => {
    return new Promise((resolve, reject) => {
        commentModel.findById(id, (error, data) => {
            if(error){
                reject(error);
            }else {
                resolve(data) 
            }
        })
    })
}

// getComment('626bb46e43d71645d61d999f')

const addComment = (obj) => {
    const newComment = new commentModel(obj)
    return new Promise((resolve, reject) => {
        newComment.save( (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data)
            }
        })
    })
}

// addComment({userId: 'you68', content: 'TEST'})

const updateComment = (id, obj) => {
    return new Promise((resolve,  reject) => {
        commentModel.findByIdAndUpdate(id, obj,  (error, data) => {
            if(error) {
                reject(error); 
            }else {
                resolve(data)
            }
        })
    })
}

// updateComment('626bb46e43d71645d61d999f', {userId: 'youUpdateTEST'})


const deleteComment = (id) => {
    return new Promise((resolve, reject) => {
        commentModel.findByIdAndDelete(id,  (error, data) => {
            if(error) {
                reject(error);
            }else {
                resolve(data) 
            }
        })
    })
}

// deleteComment('626bb46e43d71645d61d999f')
module.exports = {getAllComments, getComment, addComment, updateComment, deleteComment}