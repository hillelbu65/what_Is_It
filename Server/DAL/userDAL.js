require('../configs/mongodbConction')
const userModel = require('../models/user')

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        userModel.find({}, (error, data) => {
            if (error) {
                reject(error)
            } else {
                resolve(data)
            }
        })
    })
}

// getAllUsers()
// const foo = getAllUsers();
// console.log(foo)

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        userModel.findById(id, (error, data) => {
            if(error){
                reject(error);
            }else {
                resolve(data) 
            }
        })
    })
}

// getUser('626bb46e43d71645d61d999f')

const addUser = (obj) => {
    const newUser = new userModel(obj)
    return new Promise((resolve, reject) => {
        newUser.save((error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data)
            }
        })
    })
}

// addUser({ 
//     firstname: 'String',
//     lastname: 'String',
//     password: 'String',
//     email: 'hilleltest@gmail.com',
//     level: 'String', 
//     comments: [1, 2, 3]
// })

const updateUser = (id, obj) => {
    return new Promise((resolve,  reject) => {
        userModel.findByIdAndUpdate(id, obj,  (error, data) => {
            if(error) {
                reject(error); 
            }else {
                resolve(data)
            }
        })
    })
}

// updateUser('626bb46e43d71645d61d999f', {userId: 'youUpdateTEST'})


const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        userModel.findByIdAndDelete(id,  (error, data) => {
            if(error) {
                reject(error);
            }else {
                resolve(data) 
            }
        })
    })
}

// deleteUser('626bb46e43d71645d61d999f')
module.exports = {getAllUsers, getUser, addUser, updateUser, deleteUser}