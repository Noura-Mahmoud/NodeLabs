const ObjectId = require("mongoose").Types.ObjectId;
const validatePatient = require("../utils/patientSchema");
const patientModel = require("../Models/PatientsModel");

// const { ObjectId } = require('mongoose').Types;

//#region Patients
// name, age, email, password, specialization
//{"name":"Hossam" , "age":30 , "email" :"hossam@gmail.com", "password": "123"}
let Patients = patientModel;
//#endregion

let GetAllPatients = async (req, res) => {
  let patients = await Patients.find({}).exec();
  res.status(200).json(patients);
};

const GetPatientById = async (req, res) => {
  const id = req.params.id.toString();
  if (id.length !== 24 || !ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid id." });
  }
  try {
    const patient = await Patients.findById(id);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found." });
    }
    res.status(200).json({ message: "Patient found.", data: patient });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the patient." });
  }
};

let AddPatient = (req, res) => {
  let newPatient = req.body;
  if (validatePatient(newPatient)) {
    Patients.create(newPatient);
    res.json({ message: "Created successfully", data: newPatient });
  } else {
    res.send("please check input data");
  }
};

let UpdatePatient = async (req, res) => {
  const ID = req.params.id;
  const updatedPatient = req.body;

  if (validatePatient(updatedPatient)) {
    try {
      const foundPatient = await Patients.findByIdAndUpdate(
        new ObjectId(ID),
        updatedPatient
      );
      if (!foundPatient) {
        return res.status(404).json({ message: "Patient not found." });
      }
      res
        .status(200)
        .json({
          message: "Patient updated successfully.",
          data: updatedPatient,
        });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "An error occurred while updating the Patient." });
    }
  } else {
    res.status(400).json({ message: "Invalid Patient data." });
  }
};

let DeletePatient = async (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid id." });
  }
  try {
    const Patient = await Patients.findByIdAndDelete(id);
    if (!Patient) {
      return res.status(404).json({ message: "Patient not found." });
    }
    res.status(200).json({ message: "Patient deleted successfully." });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the Patient." });
  }
};

module.exports = {
  GetAllPatients,
  GetPatientById,
  AddPatient,
  UpdatePatient,
  DeletePatient,
};
