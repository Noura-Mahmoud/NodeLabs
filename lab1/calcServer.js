const fs = require("fs");

const http = require("http");
http.createServer((req,res)=>{
    //logic
    if(req.url != "/favicon.ico"){
        res.writeHead(200,"ok",{"content-type":"text/html"})
        let txt = req.url;
        let op = txt.split("/")[1];
        let sum = 0;
        let mul = 1;
        let zeroFlag=0;
        let finalResult = 0;
        switch(op) {
            case "add":
                for(var i=2;i< txt.split("/").length;i++)
                {
                    sum+= Number(txt.split("/")[i]);
                }
                finalResult = sum;
                res.write(`<h1>The result is ${finalResult}</h1>`);
                break;
            case "sub":
                for(var i=2;i< txt.split("/").length;i++)
                {
                    sum-= Number(txt.split("/")[i]);
                }
                finalResult = sum;
                res.write(`<h1>The result is ${finalResult}</h1>`);
                break;
            case "multiply":
                for(var i=2;i< txt.split("/").length;i++)
                {
                    mul*= Number(txt.split("/")[i]);
                }
                finalResult = mul;
                res.write(`<h1>The result is ${finalResult}</h1>`);
                break;
            case "divide":
                var divide = Number(txt.split("/")[2]);
                for(var i=3;i< txt.split("/").length;i++)
                {
                    if(Number(txt.split("/")[i])==0)
                    {
                        zeroFlag = 1;
                        break;
                    }
                    else
                    {
                        divide/= Number(txt.split("/")[i]);
                    }
                }
                if(zeroFlag==1)
                {
                    res.write(`<h1>You can't divide over Zero</h1>`);
                    finalResult = "You can't divide over Zero";
                }
                else
                {
                    finalResult = divide;
                    res.write(`<h1>The result is ${finalResult}</h1>`);
                }
            break;
            default:
                text = "Hmmmmm I don'y know";
        }
        fs.writeFile("resultFile.txt",`The result is ${finalResult}`,()=>{})
        res.end();
    }
}).listen(7000)