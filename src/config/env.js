require('dotenv').config();

// Server configuration
const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || 'production';

// Database configuration
const DB_HOST = process.env.DB_HOST || '35.237.255.39';
const DB_USER = process.env.DB_USER || 'DEV_CHARLEE_ACLDS';
const DB_PASSWORD = process.env.DB_PASSWORD || 'HUc0PM7WF}F}WKrj';
const DB_NAME = process.env.DB_NAME || 'DEV_CHARLEE_ACLDS';
const DB_PORT = process.env.DB_PORT || 3306;
const DB_CONNECTION_LIMIT = process.env.DB_CONNECTION_LIMIT || 10;

// Security configuration
const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret_key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';

module.exports = {
  PORT,
  NODE_ENV,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT,
  DB_CONNECTION_LIMIT,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  IS_PRODUCTION: NODE_ENV === 'production',
  IS_DEVELOPMENT: NODE_ENV === 'development',
  IS_TEST: NODE_ENV === 'test'
};