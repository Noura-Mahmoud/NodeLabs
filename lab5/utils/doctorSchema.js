const Ajv = require("ajv");
const ajv = new Ajv(); 

//#region doctorsShema
const DoctorsSchema = {
    type:"object", 
    properties:{
        name: {type:"string", pattern:"^[a-zA-z]+$"},
        age:{type:"number", minimum:20},
        email:{type:"string"},
        password:{type:"string"},
        specialization: {type:"string"}
    },
    required:["name", "age", "email", "password", "specialization"],
    additionalProperties: false
}
// let validateDoctor = ajv.compile(DoctorsShema);
module.exports = ajv.compile(DoctorsSchema);
//#endregion