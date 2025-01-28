
const userServices = require('../services/signup')

async function createdUser(req, res) {
    try {
        const UserData = req.body;
        const user = await userServices.createUser(UserData);
        res.status(200).json({ User: user, message: 'user created successfully' })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })
    }
}

module.exports = {createdUser}