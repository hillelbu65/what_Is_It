const {scryptSync, randomBytes} = require('crypto');
const {getAllUsers, addUser} = require('../DAL/userDAL');
const user = require('../models/user');

const hashAndSalt = (input) => {
    const salt = randomBytes(19).toString('hex');
    const hashedPassword = scryptSync(input, salt, 64);
    return `${salt}:${hashedPassword}`; 
};

const singUp = async (newUserObject) => {
    const resoltFromDBInArray = await getAllUsers(); // return [...] Array.

    if (resoltFromDBInArray.length > 0) {
        const filteredResolt = resoltFromDBInArray.filter((user) => user.email === newUserObject.email);

        if (filteredResolt.length > 0) {
            return ({
                status: 'SingUp Error',
                description: 'User olrdy exist.',
                from: 'singUp fuction in logInUtils file.'
            });

        } else {
            const newHashedPassword = hashAndSalt(newUserObject.password);
            addUser({
                    firstname: newUserObject.firstname,
                    lastname: newUserObject.lastname,
                    password: newHashedPassword,
                    email: newUserObject.email,
                    level: 1, 
                    comments: []
            });
        };
    };
};

const logIn = async (email, password) => {
    const allUserFromDBInArraay = await getAllUsers();

    if(allUserFromDBInArraay.length > 0 ) {
        filteredUserInArray = allUserFromDBInArraay.filter((user) => user.email === email);

        if(filteredUserInArray.length > 0) {
            const userPassword = filteredUserInArray[0].password.split(':');
            const userSalt = userPassword[0]
            const recomposeHash = scryptSync(password, userSalt, 64);

            if(recomposeHash.toString() === userPassword[1]){
                return({
                        firstname: filteredUserInArray[0].firstname,
                        lastname: filteredUserInArray[0].lastname,
                        email: filteredUserInArray[0].email,
                        level: filteredUserInArray[0].level, 
                        comments: filteredUserInArray[0].comments 
                })
            }
        }
    }
}

module.exports = {singUp, logIn}