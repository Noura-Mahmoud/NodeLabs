const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");

let port = process.env.PORT||7001;

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "../Client/main.html"))
    })
app.get("/style.css", (req, res)=>{
    res.sendFile(path.join(__dirname, "../Client/style.css"))
    })
app.get("/styleInfo.css", (req, res)=>{
    res.sendFile(path.join(__dirname, "../Client/styleInfo.css"))
    })
app.get("/script.js", (req, res)=>{
    res.sendFile(path.join(__dirname, "../Client/script.js"))
    })
app.get("/favicon.ico", (req, res)=>{
    res.sendFile(path.join(__dirname, "../Client/Icons/favicon.ico"))
    })
app.get("/info", (req, res)=>{
    let fileData = fs.readFileSync(path.join(__dirname, "./data.json")).toString();
    res.send(fileData)
    })
app.get("/*", (req, res)=>{
    res.sendFile(path.join(__dirname, "../Client/main.html"))
    })

app.post("/", (req, res)=>{
    req.on("data", (data)=>{
        userName = data.toString().split("=")[1].split("&")[0];
        Mobile = data.toString().split("=")[2].split("&")[0];
        Email = data.toString().split("=")[3].split("&")[0].replace(/%/g, '@');;
        Address = data.toString().split("=")[4].split("&")[0];
        // let saveData =  path.join(__dirname, "../Client/profile.html").replace( "{ clientName }", userName );
        const filePath = path.join(__dirname, `../Client/profile.html`);
        const saveData = fs.readFileSync(filePath).toString().replace("{ clientName }", userName).replace("{ MobileNumber }",Mobile).replace("{ Email }",Email).replace("{ Address }",Address);

        // Create an object to write to the JSON file
        const userData = {
            Name: userName,
            Mobile: Mobile,
            Email: Email,
            Address: Address
        };

        const datajs = fs.readFileSync('data.json');
        let jsonData = [];
        if(!!datajs.toString())
        {
            jsonData = JSON.parse(datajs);
        }
        jsonData.push(userData);
        const jsonString = JSON.stringify(jsonData);

        fs.writeFileSync('data.json', jsonString, (err)=>{
            if(err)
            {
                console.log('Error in writing file:', err);
            }
            else{
                console.log('Data written to file successfully');
            }
        });
        res.send(saveData);
    })
})

app.listen(port, ()=>{console.log("http://localhost:"+port)})
// app.listen(port, ()=>{console.log("http://www.localhost:"+port)})
// http://localhost:7001/
