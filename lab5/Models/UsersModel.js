const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/NodeTask");


//#region usersSchema
UsersSchema =new mongoose.Schema({
    name: String,
    age:Number,
    email:String,
    password:String
    })

module.exports = mongoose.model("users", UsersSchema);

