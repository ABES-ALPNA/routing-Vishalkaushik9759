const data=require("fs");
data.writeFileSync("Hello.txt","Hello.js");
const readdata=data.readFileSync("Hello.txt","utf-8");
console.log(readdata);
data.appendFileSync("Hello.txt","  prectice makes perfect");
const readdata1=data.readFileSync("Hello.txt","utf-8");
console.log(readdata1);