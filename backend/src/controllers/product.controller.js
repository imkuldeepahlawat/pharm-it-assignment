const Product = require("../models/products.model");

const getAllProducts = async (req, res) => {
  try {
    console.log("fetching all products");
    const response = await Product.find({});
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
const getProductById = async (req, res) => {
  console.log("fetching one product");
  try {
    const response = await Product.findById(req.params.productId);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createNewProduct = async (req, res) => {
    console.log("new product added");
    const data = req.body;
    try {
      const response = await Product.create(data);
      res.status(201).send(response);
    } catch (error) {
      res.status(401).send(error);
    }
  }

  const updateProduct = async (req, res) => {
    console.log("change happen");
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
  }

  const deletedProduct = async (req, res) => {
    const productId = req.params.productId;
    console.log(" delete Product");
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
  }

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  deletedProduct
};
