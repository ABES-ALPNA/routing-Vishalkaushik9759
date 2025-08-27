// Day 1.------


console.log("this is my first porgram");

 const data=require("fs");
 data.writeFileSync("abc.txt","hello txt file");
 const readdata=data.readFileSync("abc.txt","utf-8");
 console.log(readdata);

