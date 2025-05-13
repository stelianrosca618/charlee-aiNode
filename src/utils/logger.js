const winston = require('winston');
const { NODE_ENV } = require('../config/env');

// Define log formats
const formats = {
  console: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(
      info => `${info.timestamp} ${info.level}: ${info.message}`
    )
  )
};

// Create the logger
const logger = winston.createLogger({
  level: NODE_ENV === 'production' ? 'info' : 'debug',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      format: formats.console
    }),
    // Add file transports for production
    ...(NODE_ENV === 'production' ? [
      new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
      new winston.transports.File({ filename: 'logs/combined.log' })
    ] : [])
  ],
  // Don't exit on error
  exitOnError: false
});

// Stream for Morgan
logger.stream = {
  write: message => logger.info(message.trim())
};

module.exports = logger;