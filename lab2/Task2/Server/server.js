const http = require("http");
const fs = require("fs");

// const express = require('express');
// const { check, validationResult } = require('express-validator');

// const app = express();

// app.use(express.urlencoded({ extended: true }));

// Define the validation rules
// const validationRules = [
//   check('usrnm').not().isEmpty().withMessage('Name is required'),
//   check('email').not().isEmpty().withMessage('Email is required')
//     .isEmail().withMessage('Email must be in a valid format'),
//   check('mobile').not().isEmpty().withMessage('Mobile number is required'),
//   check('address').not().isEmpty().withMessage('Address is required')
// ];


let formHtml = fs.readFileSync("../Client/main.html").toString();
let profileHtml = fs.readFileSync("../Client/profile.html").toString();
let updatedHtml = fs.readFileSync("../Client/updated.html").toString();
let style = fs.readFileSync("../Client/style.css").toString();
let styleInfo = fs.readFileSync("../Client/styleInfo.css").toString();
let favIcon = fs.readFileSync("../Client/Icons/favicon.ico").toString();
let script = fs.readFileSync("../Client/script.js").toString();
let userName = "";
let Mobile = "";
let Email ="";
let Address ="";

// app.post('/', [
//     check('userName').notEmpty().withMessage('Name is required'),
//     check('Mobile').notEmpty().withMessage('Mobile number is required'),
//     check('Mobile').isMobilePhone('en-IN').withMessage('Mobile number must be in Indian format'),
//     check('Email').notEmpty().withMessage('Email is required'),
//     check('Email').isEmail().withMessage('Email must be a valid email address'),
//     check('Address').notEmpty().withMessage('Address is required')
//   ],(req, res)=>{
    http.createServer(async (req, res)=>{
    if(req.method == "GET"){
        switch(req.url){
            case '/':
            case '/main.html':
            case '/client/main.html':
                res.write(formHtml);
                break;
            
            case '/style.css':
            case '/client/style.css':
                res.write(style);
                break;
            case '/styleInfo.css':
            case '/client/styleInfo.css':
                res.write(styleInfo);
                break;
            case '/script.js':
            case '/client/script.js':
                res.write(script);
                break;
            case '/favicon.ico':
            case '/client/favicon.ico':
            case '/client/Icons/favicon.ico':
                res.write(favIcon);
                break;
            case '/data':
                await loadData();
                updatedHtml = fs.readFileSync("../Client/updated.html").toString();
                res.write(updatedHtml);
                break;
            case '/info':
            case '/client/info':
                let fileData = fs.readFileSync("./data.json").toString();
                res.write(fileData)
            break;
            default:
                if(req.url.includes("?usrnm")){
                    res.write(formHtml);
                }
                break;
        }
        res.end();

        // console.log("get"); 
    }
    else if(req.method=="POST"){
        
        console.log(req.url)

        req.on("data", (data)=>{
            console.log("Data POST Here")
            userName = data.toString().split("=")[1].split("&")[0];
            Mobile = data.toString().split("=")[2].split("&")[0];
            Email = data.toString().split("=")[3].split("&")[0].replace(/%/g, '@');;
            Address = data.toString().split("=")[4].split("&")[0];
            let saveData =  profileHtml.replace("{clientName}", userName).replace("{ MobileNumber }",Mobile).replace("{ Email }",Email).replace("{ Address }",Address)
            
            // Create an object to write to the JSON file
            const userData = {
                Name: userName,
                Mobile: Mobile,
                Email: Email,
                Address: Address
            };
            // Convert the object to a JSON string
            const datajs = fs.readFileSync('data.json');
            let jsonData = [];
            if(!!datajs.toString())
            {
                jsonData = JSON.parse(datajs);
            }
            jsonData.push(userData);
            console.log(jsonData)

            const jsonString = JSON.stringify(jsonData);
            
            // Write the JSON string to a file
            fs.writeFileSync('data.json', jsonString, (err) => {
                if (err) {
                    console.log('Error writing to file:', err);
                } else {
                    console.log('Data written to file successfully!');
                }
            });
            res.write(saveData);
        })
        req.on("end",()=>{
            res.end();
        })
    }
    }
).listen(7000, ()=>{console.log("listening on port 7000");})


async function loadData() {
    const jsonData = fs.readFileSync('data.json');
    const data = await JSON.parse(jsonData);
    console.log("load data");
   
    fs.readFile('../Client/main.html', 'utf8', (err, html) => {
        if (err) {
            console.error(err);
            return;
        }
        
        // const updatedHtml = html.replace('<!-- INSERT TABLE HERE -->', tableHtml);
        
        fs.writeFile('..//Client/updated.html', updatedHtml, (err) => {
            if (err) {
            console.error(err);
            return;
            }
            console.log('Table inserted successfully!');
        });
    });
}