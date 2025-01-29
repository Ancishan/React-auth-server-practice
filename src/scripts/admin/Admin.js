
const User = require('../../models/user.models');

const bcrypt = require('bcrypt');

async function createAdminUser() {
    try{
        const existingAdmin = await User.findOne({email: 'admin@test.com'});
        if(!existingAdmin) {
           const newAdmin = new User({
                name: 'admin',
                email: 'admin@test.com',
                password: await bcrypt.hash('admin',10),
                role:'admin'
            })

            await newAdmin.save();

        } else{
            console.log("admin already exist")
        }
    }
    catch(err){
        console.err(err.message)
    }
}

module.exports = createAdminUser;