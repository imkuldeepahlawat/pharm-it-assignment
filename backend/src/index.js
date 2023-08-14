const mongoose = require("mongoose");
const app = require("./app")
let server;


mongoose.connect("mongodb+srv://imkuldeepahlawat:IJOWjfDHiDEtxDEP@pharmit.3daj5up.mongodb.net/pharmit?retryWrites=true&w=majority").then(()=>{
    console.log("mongodb is connected");
    server = app.listen(8082,()=>{
        console.log("mongodb is listening on",8082);
    })
    
})