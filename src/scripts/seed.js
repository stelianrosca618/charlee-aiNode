const db = require('../config/database');
const logger = require('../utils/logger');
const bcrypt = require('bcrypt');

const seedDatabase = async () => {
  try {
    logger.info('Starting database seeding...');

    // Hash password for demo user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);

    // Seed users table
    await db.query(`
      INSERT INTO users (name, email, password)
      VALUES
        ('Admin User', 'admin@example.com', ?),
        ('Test User', 'user@example.com', ?)
      ON DUPLICATE KEY UPDATE
        name = VALUES(name);
    `, [hashedPassword, hashedPassword]);

    // Seed products table
    await db.query(`
      INSERT INTO products (name, description, price, stock)
      VALUES
        ('Laptop', 'High-performance laptop with 16GB RAM', 1299.99, 15),
        ('Smartphone', 'Latest model with 5G capability', 999.99, 25),
        ('Headphones', 'Noise-cancelling wireless headphones', 249.99, 40),
        ('Tablet', '10-inch tablet with retina display', 599.99, 10),
        ('Smartwatch', 'Fitness tracker with heart rate monitor', 199.99, 30)
      ON DUPLICATE KEY UPDATE
        name = VALUES(name);
    `);

    logger.info('✅ Database seeding completed successfully');
  } catch (error) {
    logger.error('❌ Database seeding failed:', error.message);
    throw error;
  }
};

// Run seeding if script is executed directly
if (require.main === module) {
  (async () => {
    try {
      await seedDatabase();
      process.exit(0);
    } catch (error) {
      process.exit(1);
    }
  })();
}

module.exports = seedDatabase;