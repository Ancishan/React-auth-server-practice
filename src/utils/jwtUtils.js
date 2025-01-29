
const jwt = require('jsonwebtoken');
const secretKey = require('../configuration/jwtConfigure')

function generateToken (user) {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role
    }

    return jwt.sign(secretKey, payload, {expiresIn: '1h'} );
}

module.exports = {
    generateToken
}