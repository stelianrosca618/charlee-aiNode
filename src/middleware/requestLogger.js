const morgan = require('morgan');
const logger = require('../utils/logger');
const { IS_PRODUCTION, IS_TEST } = require('../config/env');

// Skip logging in test environment
const skip = () => IS_TEST;

// Use different formats based on environment
const format = IS_PRODUCTION
  ? 'combined'
  : ':method :url :status :response-time ms - :res[content-length]';

// Create Morgan middleware that streams to Winston
const requestLogger = morgan(format, {
  stream: logger.stream,
  skip
});

module.exports = requestLogger;