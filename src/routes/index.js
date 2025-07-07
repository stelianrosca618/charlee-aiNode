const express = require('express');
const userRoutes = require('./user.routes');
const productRoutes = require('./product.routes');
const charleeAccoladesRoutes = require('./charleeAccolades.routes');
const fileUploadRoutes = require('./fileUpload.routes');
const dashboardRoutes = require('./dashboard.routes'); // Assuming dashboard.routes.js exists
const blogsRoutes = require('./blogs.routes'); // Assuming blogs.routes.js exists
const podcastsRoutes = require('./podcasts.routes'); // Assuming podcasts.routes.js exists
const newsRoutes = require('./news.routes'); // Assuming news.routes.js exists
const eventsRoutes = require('./events.routes'); // Assuming events.routes.js exists
const modifyRoutes = require('./modify.routes'); // Assuming modify.routes.js exists
const emailRoutes = require('./email.routes'); // Assuming email.routes.js exists
const router = express.Router();

// API Information route
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Node MySQL API',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      products: '/api/products',
      charleeAccolades: '/api/charlee-accolades',
      fileUpload: '/api/files/upload',
      blogs: '/api/blogs',
      podcasts: '/api/podcasts',
      news: '/api/news',
      events: '/api/events',
      modify: '/api/modify'
    }
  });
});

// API Routes
router.use('/email', emailRoutes); 
router.use('/charlee-accolades', charleeAccoladesRoutes);
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/files', fileUploadRoutes);
router.use('/blogs', blogsRoutes); // Assuming blogs.routes.js exists
router.use('/podcasts', podcastsRoutes); // Assuming podcasts.routes.js exists
router.use('/modify', modifyRoutes); // Assuming modify.routes.js exists
router.use('/dashboard', dashboardRoutes); // Assuming dashboard.routes.js exists
router.use('/news', newsRoutes); // Assuming news.routes.js exists
router.use('/events', eventsRoutes); // Assuming events.routes.js exists
module.exports = router;