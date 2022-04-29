require('../configs/mongodbConction')
const commentModel = require('../models/comment')

const getAllComment = () => {
    commentModel.find({}, async (error, data) => {
        if (error) {
            const e = await error;
            console.log(e)
        } else {
            const resolt = await data;
            console.log(resolt)
        }
    })
}

// getAllComment()

getComment = (id) => {
    commentModel.findById(id, async (error, data) => {
        if(error){
            const e = await error;
            console.log(e)
        }else {
            const resolt = await data;
            console.log(resolt)
        }
    })
}

// getComment('626bb46e43d71645d61d999f')

const addComment = (obj) => {
    const newComment = new commentModel(obj)
    newComment.save(async (error, data) => {
        if(error){
            const e = await error;
            console.log(e)
        }else {
            const resolt = await data;
            console.log(resolt)
        }
    })
}

// addComment({userId: 'you68', content: 'TEST'})

const updateComment = (id, obj) => {
    commentModel.findByIdAndUpdate(id, obj, async (error, data) => {
        if(error) {
            const e = await error;
            console.log(e)
        }else {
            const resolt = await data;
            console.log(resolt)
        }
    })
}

// updateComment('626bb46e43d71645d61d999f', {userId: 'youUpdateTEST'})


const deleteComment = (id) => {
    commentModel.findByIdAndDelete(id, async (error, data) => {
        if(error) {
            const e = await error;
            console.log(e)
        }else {
            const resolt = await data;
            console.log(resolt)
        }
    })
}

// deleteComment('626bb46e43d71645d61d999f')