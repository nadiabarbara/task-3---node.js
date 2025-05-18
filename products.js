const express = require("express");
const router = express.Router();
const data = require("../data");

// GET /api/products - Returns a list of all products
router.get("/", (req, res) => {
  res.json({ products: data.products });
});

// GET /api/products/:id - Returns product details by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = data.products.find((item) => item.id === parseInt(id));
  if (product) res.json(product);
  else res.status(404).json({ message: `Product with ID: ${id} not found` });
});

// POST /api/products - Adds a new product
router.post("/", (req, res) => {
  const productData = req.body;

  // Validation checks
  if (productData.hasOwnProperty("id")) {
    const exists = data.products.some((item) => item.id === productData.id);
    if (exists) {
      return res.status(400).json({ message: "Product ID already exists" });
    }
  }
  if (!productData.name) {
    return res.status(400).json({ message: "Product name is required" });
  }
  if (productData.price < 0) {
    return res.status(400).json({ message: "Price must be 0 or greater" });
  }
  if (!Number.isInteger(productData.stock) || productData.stock < 0) {
    return res
      .status(400)
      .json({ message: "Stock must be a non-negative integer" });
  }

  data.products.push(productData);
  res.json({ message: `Product added`, products: data.products });
});

// PUT /api/products/:id - Updates product details by ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const productData = req.body;
  const productIndex = data.products.findIndex(
    (item) => item.id === parseInt(id)
  );

  if (productIndex !== -1) {
    data.products[productIndex] = {
      ...data.products[productIndex],
      ...productData,
    };
    res.json({
      message: `Product with ID: ${id} updated`,
      products: data.products,
    });
  } else {
    res.status(404).json({ message: `Product with ID: ${id} not found` });
  }
});

// DELETE /api/products/:id - Deletes a product by ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const productIndex = data.products.findIndex(
    (item) => item.id === parseInt(id)
  );

  if (productIndex !== -1) {
    data.products.splice(productIndex, 1);
    res.json({
      message: `Product with ID: ${id} deleted`,
      products: data.products,
    });
  } else {
    res.status(404).json({ message: `Product with ID: ${id} not found` });
  }
});

module.exports = router;
