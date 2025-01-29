const User = require('../models/user.models');
const generateToken = require('../utils/jwtUtils');  // Ensure this import matches the export
const bcrypt = require('bcrypt');

async function login(email, password) {
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password); // Add 'await' for async function
        if (!isPasswordValid) {
            throw new Error('Password incorrect');
        }

        const token = generateToken(existingUser);  // Use the function correctly
        return token;
    } catch (error) {
        console.log(error);
        throw new Error('Invalid credential');
    }
}

module.exports = { login };
