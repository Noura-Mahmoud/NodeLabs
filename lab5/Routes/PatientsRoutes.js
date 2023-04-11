const express = require("express");
const router = express.Router();

const PatientsController = require("../Controllers/PatientsControllers");

//#region patients endpoints
    // get all patients
    router.get("/",PatientsController.GetAllPatients)

    //get Patient by id
    router.get("/:id", PatientsController.GetPatientById)

    //add Patient
    router.post("/",PatientsController.AddPatient )

    //update Patient
    router.put("/:id", PatientsController.UpdatePatient)

    //delete Patient
    router.delete("/:id", PatientsController.DeletePatient)
//#endregion

module.exports = router;