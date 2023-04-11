const express = require("express");
const router = new express.Router();
const DoctorController = require("../Controllers/DoctorsController");

//#region doctors endpoints
    // get all doctors
    router.get("/", DoctorController.GetAllDoctors);

    //get doctor by id
    router.get("/:id", DoctorController.GetDoctorById)

    //add doctor
    router.post("/", DoctorController.AddDoctor)

    //update doctor
    router.put("/:id", DoctorController.UpdateDoctor)

    //delete doctor
    router.delete("/:id", DoctorController.DeleteDoctor)
//#endregion

module.exports = router;