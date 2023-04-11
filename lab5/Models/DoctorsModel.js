const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/NodeTask");


//#region doctors
// name, age, email, password, specialization
//{"name":"Hossam" , "age":30 , "email" :"hossam.gmail.com", "password": "123", "specialization":"surgery" }
//#endregion

//#region DoctorsSchema
DoctorsSchema =new mongoose.Schema({
    name: String,
    age:Number,
    email:String,
    password:String,
    specialization:String
    })

module.exports = mongoose.model("doctors", DoctorsSchema);