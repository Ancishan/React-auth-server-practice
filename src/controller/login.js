
const authServices = require('../services/login');

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const token = await authServices.login(email, password);
        res.json({ token });
    } catch (error) {
        res.status(404).json({ message: 'Invalid credential' });
    }
}

module.exports = { login };
