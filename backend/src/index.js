const mongoose = require("mongoose");
const app = require("./app")
require('dotenv').config();
const mongodbUrl = process.env.MONGODB_URL
const port = process.env.PORT 
let server;


mongoose.connect(mongodbUrl).then(()=>{
    console.log("mongodb is connected");
    server = app.listen(port,()=>{
        console.log("mongodb is listening on",port);
    })
    
})