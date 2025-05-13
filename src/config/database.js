const mysql = require('mysql2');
const logger = require('../utils/logger');
const { 
  DB_HOST, 
  DB_USER, 
  DB_PASSWORD, 
  DB_NAME, 
  DB_PORT, 
  DB_CONNECTION_LIMIT 
} = require('./env');

// Create connection pool
const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
  connectionLimit: parseInt(DB_CONNECTION_LIMIT, 10) || 10,
  waitForConnections: true,
  queueLimit: 0
});

// Get a promise-based interface
const promisePool = pool.promise();

// Test the connection
const testConnection = async () => {
  try {
    const [result] = await promisePool.query('SELECT 1');
    logger.info('✅ MySQL connection established successfully');
    return true;
  } catch (error) {
    logger.error('❌ MySQL connection failed:', error.message);
    return false;
  }
};

// Helper function to execute queries
const query = async (sql, params) => {
  try {
    const [results] = await promisePool.query(sql, params);
    return results;
  } catch (error) {
    logger.error(`Query error: ${sql}`, error);
    throw error;
  }
};

process.on('SIGINT', () => {
  pool.end(err => {
    if (err) {
      logger.error('Error closing MySQL connection pool', err);
    } else {
      logger.info('MySQL connection pool closed');
    }
    process.exit(0);
  });
});

module.exports = {
  pool: promisePool,
  query,
  testConnection
};