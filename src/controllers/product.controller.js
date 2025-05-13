const Product = require('../models/product.model');

// Get all products
const getAllProducts = async (req, res, next) => {
  try {
    const { 
      page = 1, 
      limit = 10,
      sortBy = 'created_at',
      sortOrder = 'DESC',
      minPrice,
      maxPrice,
      search
    } = req.query;
    
    // Parse numeric values
    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sortBy,
      sortOrder,
      minPrice: minPrice ? parseFloat(minPrice) : undefined,
      maxPrice: maxPrice ? parseFloat(maxPrice) : undefined,
      search
    };
    
    const products = await Product.findAll(options);
    const total = await Product.count(options);
    
    res.status(200).json({
      success: true,
      data: {
        products,
        pagination: {
          total,
          page: options.page,
          limit: options.limit,
          pages: Math.ceil(total / options.limit)
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

// Get a single product
const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      const error = new Error('Product not found');
      error.status = 404;
      throw error;
    }
    
    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};

// Create a new product
const createProduct = async (req, res, next) => {
  try {
    const productId = await Product.create(req.body);
    const newProduct = await Product.findById(productId);
    
    res.status(201).json({
      success: true,
      data: newProduct
    });
  } catch (error) {
    next(error);
  }
};

// Update a product
const updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    
    // Check if product exists
    const product = await Product.findById(productId);
    
    if (!product) {
      const error = new Error('Product not found');
      error.status = 404;
      throw error;
    }
    
    const updated = await Product.update(productId, req.body);
    
    if (!updated) {
      const error = new Error('Failed to update product');
      error.status = 500;
      throw error;
    }
    
    const updatedProduct = await Product.findById(productId);
    
    res.status(200).json({
      success: true,
      data: updatedProduct
    });
  } catch (error) {
    next(error);
  }
};

// Delete a product
const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    
    // Check if product exists
    const product = await Product.findById(productId);
    
    if (!product) {
      const error = new Error('Product not found');
      error.status = 404;
      throw error;
    }
    
    await Product.delete(productId);
    
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};