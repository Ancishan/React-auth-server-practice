const User = require('../models/user.models');
const generateToken = require('../utils/jwtUtils');
const bcrypt = require('bcrypt');

async function login(email , password) {

    try{
        const existingUser = await User.findOne({email})
        if(!existingUser){
            throw new Error('User not found')
        } 
        const passwordValid = bcrypt.compare(password, existingUser.password)
        if(!passwordValid){
            throw new Error ('password incorrect')
        }
        const token = generateToken(existingUser);
        return token;

    } catch(error){
        throw new Error ('Invalid credential');
    }
    
}

module.exports = {
    login
}