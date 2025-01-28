
const express = require('express')

const signUpController = require('../controller/signUp')

const router =  express.Router();

router.post('/register', signUpController.createdUser)


module.exports = router;