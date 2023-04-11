const userModel = require("../Models/UsersModel");
const bcrypt = require("bcrypt");


let AddNewUser = async (req, res)=>{
    let newUser =req.body;
    let foundUser = await userModel.findOne({email: newUser.email}).exec();
    if(foundUser) return res.status(401).json({message:"User Alredy Exists"});
    
    let genSalt = await  bcrypt.genSalt(10);

    let hashedPassword = await bcrypt.hash(newUser.password, genSalt);
    newUser.password = hashedPassword;

    let newUSER = new userModel(newUser);
    await newUSER.save();

    return res.status(201).json({message:"User Added successfully", data: newUSER});
}
let LoginUser = async (req, res)=>{
    let logUser = req.body;
    let foundUser = await userModel.findOne({email: logUser.email}).exec();
    if(!foundUser) return res.status(401).json({message: "Invalid email or password"});

    let checkPass = bcrypt.compareSync(logUser.password, foundUser.password);
    if (!checkPass) return res.status(401).json({message:"Invalid email or password"});

    res.status(201).json({message:"Logged-In successfully"});
}

module.exports = {
    AddNewUser,
    LoginUser
}