const Ajv = require("ajv");
const ajv = new Ajv(); 

//#region patientssShema
const PatientsShema = {
    type:"object", 
    properties:{
        name: {type:"string", pattern:"^[a-zA-z]+$"},
        age:{type:"number", minimum:1},
        email:{type:"string"},
        password:{type:"string"}
    },
    required:["name", "age", "email", "password"],
    additionalProperties: false
}
// let validatePatient = ajv.compile(PatientsShema);
module.exports = ajv.compile(PatientsShema);
//#endregion
