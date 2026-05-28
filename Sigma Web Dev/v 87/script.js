console.log("fs what is fs file working");

const fs = require("fs");

console.log("starting");
// fs.writeFileSync("harry.txt","this is LORD BILLUS world");
fs.writeFile("hary2.txt","i am writing a txt file",()=>{
    console.log("writing is Done");
    fs.readFile("hary2.txt",(error,data)=>{
        console.log(error,data.toString());
    });
});
console.log("ending");


