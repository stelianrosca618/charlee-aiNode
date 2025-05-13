const express = require('express');
const userRoutes = require('./user.routes');
const productRoutes = require('./product.routes');
const charleeAccoladesRoutes = require('./charleeAccolades.routes');
const router = express.Router();

// API Information route
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Node MySQL API',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      products: '/api/products'
    }
  });
});

// API Routes
router.use('/charlee-accolades', charleeAccoladesRoutes);
router.use('/users', userRoutes);
router.use('/products', productRoutes);

module.exports = router;