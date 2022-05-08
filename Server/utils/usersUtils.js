const { getAllUsers, getUser, addUser, updateUser, deleteUser } = require("../DAL/userDAL")

const AllUsers = async () => {
    const Users = await getAllUsers();
    return Users;
}; 
const User = async () => {
    const User = await getUser()[0];
    return User;
};

const insertUser = async (newUserAsObj) => {
    const newUser = await addUser(newUserAsObj);
    return newUser;
};

const chaingeUser = async (id, obj) => {
    const chainge = await updateUser(id, obj);
    return chainge
} 

const removeUser = async (id) => {
    const removedUser = await deleteUser(id)
    return removedUser 
} 

module.exports = { AllUsers, User, insertUser, chaingeUser, removeUser};