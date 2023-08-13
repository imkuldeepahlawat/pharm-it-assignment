const express = require("express");
const cors = require('cors');
const app = express();
// const routes = require("./routes");
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
// GET: /products - To retrieve a list of all products.
app.get("/products",(req,res)=>{

} );
// GET: /products/{id} - To retrieve a specific product by its ID.
app.get("/products:productId",(req,res)=>{

} );
// POST: /products - To add a new product.
app.post("/products:productId",(req,res)=>{

} );
// PUT: /products/{id} - To update the details of an existing product.
app.put("/products:productId",(req,res)=>{

} );
// DELETE: /products/{id} - To delete a product.
app.delete("/products:productId",(req,res)=>{

} );
module.exports = app;