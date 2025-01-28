const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/auth_db")

mongoose.connection.on("connected",() =>{
    console.log("connected to mongodb");
})

// mongoose.connection.on("error", (err) =>{
//     console.log(`mongodb connection error: ${err}`)
// })

module.exports = mongoose;