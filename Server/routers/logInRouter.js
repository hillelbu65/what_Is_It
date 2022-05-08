const { logIn, singUp } = require('../utils/logInUtils');
const router = require('express').Router();

router.route('/').post( async (req, res)=> {
    if(req.requestType === 'logIn') {
        const logInData = logIn(req.email, req.password);
        return res.json(logInData);
    } else if (req.requestType === 'singUp') {
        const singUpData = singUp(req.email, req.password);
        return res.json(singUpData)
    }
});