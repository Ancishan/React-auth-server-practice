const mongoose = require('../configuration/dbConfiguration')

const userSchema = new mongoose.Schema({
    name:String,
    email:{type: String, unique: true, required: true},
    password:String,
    role:{type: String, enum:['admin', 'customer'], default:'customer'}
})

module.exports = mongoose.model("User", userSchema);