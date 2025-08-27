const server=require("http");
const { url } = require("inspector");
console.log("this is soutint server");
server
.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("<h1>this is first page</h1>");
        res.end("");
    }else if(req.url=="/contact"){
        res.write("<h1>this is contact server</h1>");
        res.end("");
    }else{
        res.end("<h1>wrong url</h1>");
    }
})
.listen(5000,()=>{
    console.log("server.started");
});