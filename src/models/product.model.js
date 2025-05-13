const db = require('../config/database');

class Product {
  static tableName = 'products';

  // Create a new product
  static async create(productData) {
    const { name, description, price, stock = 0 } = productData;
    
    const sql = `
      INSERT INTO ${this.tableName} (name, description, price, stock)
      VALUES (?, ?, ?, ?)
    `;
    
    const result = await db.query(sql, [name, description, price, stock]);
    return result.insertId;
  }

  // Find product by ID
  static async findById(id) {
    const sql = `
      SELECT id, name, description, price, stock, created_at, updated_at
      FROM ${this.tableName}
      WHERE id = ?
    `;
    
    const products = await db.query(sql, [id]);
    return products[0] || null;
  }

  // Update product
  static async update(id, productData) {
    const fields = [];
    const values = [];
    
    // Only update provided fields
    if (productData.name !== undefined) {
      fields.push('name = ?');
      values.push(productData.name);
    }
    
    if (productData.description !== undefined) {
      fields.push('description = ?');
      values.push(productData.description);
    }
    
    if (productData.price !== undefined) {
      fields.push('price = ?');
      values.push(productData.price);
    }
    
    if (productData.stock !== undefined) {
      fields.push('stock = ?');
      values.push(productData.stock);
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

  // Delete product
  static async delete(id) {
    const sql = `
      DELETE FROM ${this.tableName}
      WHERE id = ?
    `;
    
    const result = await db.query(sql, [id]);
    return result.affectedRows > 0;
  }

  // Get all products with pagination and filtering
  static async findAll(options = {}) {
    const { 
      page = 1, 
      limit = 10,
      sortBy = 'created_at',
      sortOrder = 'DESC',
      minPrice,
      maxPrice,
      search
    } = options;
    
    const offset = (page - 1) * limit;
    const params = [];
    
    let sql = `
      SELECT id, name, description, price, stock, created_at, updated_at
      FROM ${this.tableName}
      WHERE 1=1
    `;
    
    // Add filters
    if (minPrice !== undefined) {
      sql += ` AND price >= ?`;
      params.push(minPrice);
    }
    
    if (maxPrice !== undefined) {
      sql += ` AND price <= ?`;
      params.push(maxPrice);
    }
    
    if (search) {
      sql += ` AND (name LIKE ? OR description LIKE ?)`;
      params.push(`%${search}%`, `%${search}%`);
    }
    
    // Add sorting
    sql += ` ORDER BY ${sortBy} ${sortOrder === 'ASC' ? 'ASC' : 'DESC'}`;
    
    // Add pagination
    sql += ` LIMIT ? OFFSET ?`;
    params.push(limit, offset);
    
    return await db.query(sql, params);
  }

  // Count total products with filters
  static async count(options = {}) {
    const { minPrice, maxPrice, search } = options;
    const params = [];
    
    let sql = `
      SELECT COUNT(*) as total
      FROM ${this.tableName}
      WHERE 1=1
    `;
    
    // Add filters
    if (minPrice !== undefined) {
      sql += ` AND price >= ?`;
      params.push(minPrice);
    }
    
    if (maxPrice !== undefined) {
      sql += ` AND price <= ?`;
      params.push(maxPrice);
    }
    
    if (search) {
      sql += ` AND (name LIKE ? OR description LIKE ?)`;
      params.push(`%${search}%`, `%${search}%`);
    }
    
    const result = await db.query(sql, params);
    return result[0].total;
  }
}

module.exports = Product;