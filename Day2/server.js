// arrow function padhna h.../

const server=require("http");
console.log("this is server");
server.createServer((req,res)=>{
    res.write("<h1>this is my first server</h1>");
    res.end("");
})
.listen(4000,()=>{
    console.log("server started");
});