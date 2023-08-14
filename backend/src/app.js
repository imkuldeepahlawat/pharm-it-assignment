const express = require("express");
const cors = require("cors");
const Product = require("./models/products.model");
const app = express();
// const routes = require("./routes");
app.use(cors());
app.use(express.json());
// GET: /products - To retrieve a list of all products.
app.get("/products", async (req, res) => {
  try {
    console.log("fetching all products");
    const response = await Product.find({});
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});
// GET: /products/{id} - To retrieve a specific product by its ID.
app.get("/products/:productId", async (req, res) => {
  try {
    const response = await Product.findById(req.params.productId);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});
// POST: /products - To add a new product.
app.post("/products", async (req, res) => {
  const data = req.body;
  try {
    const response = await Product.create(data);
    res.status(201).send(response);
  } catch (error) {
    res.status(401).send(error);
  }
});
// PUT: /products/{id} - To update the details of an existing product.
app.put("/products/:productId", async (req, res) => {
  const id = req.params.productId;
  const { name, qty } = req.body;

  const prod = await Product.findById(id);
  if (name) {
    prod.name = name;
  } else if (qty) {
    prod.qty = qty;
  }
  await prod.save();
  res.send(prod);
});
// DELETE: /products/{id} - To delete a product.
app.delete("/products/:productId", async (req, res) => {
  const productId = req.params.productId;
  console.log("from delete");
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    
    if (!deletedProduct) {
      return res.status(404).send({ message: "Product not found" });
    }
    
    console.log("Product deleted:", deletedProduct);
    return res.send({ message: "Product deleted" });
  } catch (error) {
    res
      .status(500)
      .send("An error occurred while trying to delete the product.");
  }
});


module.exports = app;
