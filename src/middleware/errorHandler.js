const logger = require('../utils/logger');
const { IS_PRODUCTION } = require('../config/env');

// Not found middleware
const notFoundHandler = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  error.status = 404;
  next(error);
};

// Global error handling middleware
const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  
  // Log error
  if (statusCode === 500) {
    logger.error(`${statusCode} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    logger.error(err.stack);
  } else {
    logger.warn(`${statusCode} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  }

  // Send error response
  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: err.message,
    stack: IS_PRODUCTION ? '🥞' : err.stack,
    timestamp: new Date().toISOString()
  });
};

module.exports = {
  notFoundHandler,
  errorHandler
};