const mongoose = require("mongoose");
const app = require("./app")
let server;


mongoose.connect("mongodb://127.0.0.1:27017/pharmit").then(()=>{
    console.log("mongodb is connected");
    server = app.listen(8082,()=>{
        console.log("mongodb is listening on",8082);
    })
    
})