const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { PORT } = require('./config/env');
const db = require('./config/database');
const routes = require('./routes');
const logger = require('./utils/logger');
const path = require('path');
const requestLogger = require('./middleware/requestLogger');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');

// Initialize express app
const app = express();

// Apply middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(requestLogger); // Request logging

// API routes
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', routes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
const startServer = async () => {
  try {
    // Test database connection
    const connected = await db.testConnection();
    
    if (!connected) {
      logger.error('Failed to connect to database. Exiting...');
      process.exit(1);
    }
    
    // Start server
    app.listen(PORT, () => {
      logger.info(`✅ Server running on port ${PORT}`);
      logger.info(`📚 API Documentation: http://localhost:${PORT}/api`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  logger.error('UNHANDLED REJECTION:', err);
  // Close server & exit process
  process.exit(1);
});

// Start the server
startServer();

module.exports = app; // Export for testing