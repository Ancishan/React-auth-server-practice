const jwt = require('jsonwebtoken');
const { secretKey } = require('../configuration/jwtConfigure');  // Import the secret key

function generateToken(user) {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role
    };

    return jwt.sign(payload, secretKey, { expiresIn: '1h' });  // Ensure secretKey is valid
}

module.exports = generateToken;
