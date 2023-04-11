//#region Requires
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const logging = require("./MiddleWares/loggingMW");
const PORT = process.env.PORT || 7010;
//#endregion

//#region MiddleWares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(logging)
//#endregion

//#region Doctors Routes
const DoctorsRoutes = require("./Routes/DoctorsRoutes");
app.use("/api/doctors", DoctorsRoutes);
//#endregion

//#region Patient Routes
const PatientsRoutes = require("./Routes/PatientsRoutes");
app.use("/api/patients", PatientsRoutes);
//#endregion

     
//#region Auth
const UsersRoutes = require("./Routes/UseresRoutes");
app.use("/api/users", UsersRoutes);
//#endregion


app.listen(PORT, ()=>{console.log("http://localhost:"+PORT)})