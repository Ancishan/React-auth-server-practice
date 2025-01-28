const User = require('../models/user.models')
const bcrypt = require("bcrypt")

async function createUser (userData) {

    const {name, email, password} = userData
    const hashPassword = await bcrypt.hash(password, 10)

    const createdUser = new User ({
        name, 
        email, 
        password: hashPassword,
        role: "customer"
    })

    const saveUser = await createdUser.save();
    return saveUser;
}

module.exports = {createUser}