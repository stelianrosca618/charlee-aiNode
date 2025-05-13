const db = require('../config/database');
const bcrypt = require('bcrypt');

class User {
  static tableName = 'users';

  // Create a new user
  static async create(userData) {
    const { name, email, password } = userData;
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const sql = `
      INSERT INTO ${this.tableName} (name, email, password)
      VALUES (?, ?, ?)
    `;
    
    const result = await db.query(sql, [name, email, hashedPassword]);
    return result.insertId;
  }

  // Find user by ID
  static async findById(id) {
    const sql = `
      SELECT id, name, email, created_at, updated_at
      FROM ${this.tableName}
      WHERE id = ?
    `;
    
    const users = await db.query(sql, [id]);
    return users[0] || null;
  }

  // Find user by email
  static async findByEmail(email) {
    const sql = `
      SELECT id, name, email, password, created_at, updated_at
      FROM ${this.tableName}
      WHERE email = ?
    `;
    
    const users = await db.query(sql, [email]);
    return users[0] || null;
  }

  // Update user
  static async update(id, userData) {
    const fields = [];
    const values = [];
    
    // Only update provided fields
    if (userData.name) {
      fields.push('name = ?');
      values.push(userData.name);
    }
    
    if (userData.email) {
      fields.push('email = ?');
      values.push(userData.email);
    }
    
    if (userData.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password, salt);
      fields.push('password = ?');
      values.push(hashedPassword);
    }
    
    // Add updated_at field
    fields.push('updated_at = NOW()');
    
    // Add id for WHERE clause
    values.push(id);
    
    const sql = `
      UPDATE ${this.tableName}
      SET ${fields.join(', ')}
      WHERE id = ?
    `;
    
    const result = await db.query(sql, values);
    return result.affectedRows > 0;
  }

  // Delete user
  static async delete(id) {
    const sql = `
      DELETE FROM ${this.tableName}
      WHERE id = ?
    `;
    
    const result = await db.query(sql, [id]);
    return result.affectedRows > 0;
  }

  // Get all users with pagination
  static async findAll(page = 1, limit = 10) {
    const offset = (page - 1) * limit;
    
    const sql = `
      SELECT id, name, email, created_at, updated_at
      FROM ${this.tableName}
      ORDER BY created_at DESC
      LIMIT ? OFFSET ?
    `;
    
    return await db.query(sql, [limit, offset]);
  }

  // Verify password
  static async verifyPassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }

  // Count total users
  static async count() {
    const sql = `
      SELECT COUNT(*) as total
      FROM ${this.tableName}
    `;
    
    const result = await db.query(sql);
    return result[0].total;
  }
}

module.exports = User;