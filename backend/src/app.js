const express = require("express");
const cors = require("cors");

const { getAllProducts, getProductById, createNewProduct, updateProduct, deletedProduct } = require("./controllers/product.controller");
const { validMongoId, validInput } = require("./middleware/product.middleware");
const app = express();
// const routes = require("./routes");
app.use(cors());
app.use(express.json());
// GET: /products - To retrieve a list of all products.
app.get("/products", getAllProducts);
// GET: /products/{id} - To retrieve a specific product by its ID.
app.get("/products/:productId",validMongoId, getProductById);
// POST: /products - To add a new product.
app.post("/products",validInput, createNewProduct);
// PUT: /products/{id} - To update the details of an existing product.
app.put("/products/:productId",validMongoId, updateProduct);
// DELETE: /products/{id} - To delete a product.
app.delete("/products/:productId",validMongoId, deletedProduct);


module.exports = app;
