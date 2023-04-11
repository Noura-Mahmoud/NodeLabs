const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/NodeTask");


//#region Patients
// name, age, email, password, specialization
//{"name":"Hossam" , "age":30 , "email" :"hossam@gmail.com", "password": "123"}
//#endregion

//#region PatientsSchema
PatientsSchema =new mongoose.Schema({
    name: String,
    age:Number,
    email:String,
    password:String
    })

module.exports = mongoose.model("patients", PatientsSchema);