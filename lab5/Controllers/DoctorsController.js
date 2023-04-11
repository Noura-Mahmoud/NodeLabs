const ObjectId = require("mongoose").Types.ObjectId;
const validateDoctor = require("../utils/doctorSchema");
const doctorModel = require("../Models/DoctorsModel");
//#region doctors
// name, age, email, password, specialization
//{"name":"Hossam" , "age":30 , "email" :"hossam.gmail.com", "password": "123", "specialization":"surgery" }
let Doctors = doctorModel;
//#endregion

let GetAllDoctors = async (req, res) => {
  let doctors = await Doctors.find({}).exec();
  res.status(200).json(doctors);
};

const GetDoctorById = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await Doctors.findById(id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found." });
    }
    res.status(200).json(doctor);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while retrieving the doctor." });
  }
};

let AddDoctor = (req, res) => {
  let newDoctor = req.body;
  if (validateDoctor(newDoctor)) {
    Doctors.create(newDoctor);
    res.json({ message: "Created successfully", data: newDoctor });
  } else {
    res.send("please check input data");
  }
};

let UpdateDoctor = async (req, res) => {
  const ID = req.params.id;
  const updatedDoctor = req.body;

  if (validateDoctor(updatedDoctor)) {
    try {
      const foundDoctor = await Doctors.findByIdAndUpdate(
        new ObjectId(ID),
        updatedDoctor
      );
      if (!foundDoctor) {
        return res.status(404).json({ message: "Doctor not found." });
      }
      res
        .status(200)
        .json({ message: "Doctor updated successfully.", data: updatedDoctor });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "An error occurred while updating the doctor." });
    }
  } else {
    res.status(400).json({ message: "Invalid doctor data." });
  }
};

let DeleteDoctor = async (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid id." });
  }
  try {
    const doctor = await Doctors.findByIdAndDelete(id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found." });
    }
    res.status(200).json({ message: "Doctor deleted successfully." });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the doctor." });
  }
};

module.exports = {
  GetAllDoctors,
  GetDoctorById,
  AddDoctor,
  UpdateDoctor,
  DeleteDoctor,
};
