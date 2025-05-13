const express = require('express');
const { 
  getAllProducts, 
  getProductById, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} = require('../controllers/product.controller');
const { 
  productValidationRules, 
  handleValidationErrors 
} = require('../middleware/validators');

const router = express.Router();

// GET all products
router.get('/', getAllProducts);

// GET a single product
router.get('/:id', getProductById);

// POST create a new product
router.post(
  '/', 
  productValidationRules.create,
  handleValidationErrors,
  createProduct
);

// PUT update a product
router.put(
  '/:id', 
  productValidationRules.update,
  handleValidationErrors,
  updateProduct
);

// DELETE a product
router.delete('/:id', deleteProduct);

module.exports = router;