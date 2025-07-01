const db = require('../config/database');

class Blog {
  static tableName = 'CharleeBlogs';

  // Create a new blog
  static async create(blogData) {
    const {
      Content_Type, Description, Title, Graphic1, Graphic2, Body,
      Author, AuthorTitle, AuthorCompany, DateWritten, Relevance,
      Status, LastUpdated, LastUpdatedBy, PDFVersion
    } = blogData;

    const sql = `
      INSERT INTO ${this.tableName} (
        Content_Type, Description, Title, Graphic1, Graphic2, Body,
        Author, AuthorTitle, AuthorCompany, Relevance,
        Status, LastUpdatedBy, PDFVersion
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const result = await db.query(sql, [
      Content_Type, Description, Title, Graphic1, Graphic2, Body,
      Author, AuthorTitle, AuthorCompany, Relevance,
      Status, LastUpdatedBy, PDFVersion
    ]);
    return result.insertId;
  }

  // Find blog by ID
  static async findById(id) {
    const sql = `
      SELECT *
      FROM ${this.tableName}
      WHERE id = ?
    `;
    const blogs = await db.query(sql, [id]);
    return blogs[0] || null;
  }

  // Update blog
  static async update(id, blogData) {
    const fields = [];
    const values = [];

    // Only update provided fields
    for (const key of [
      'Content_Type', 'Description', 'Title', 'Graphic1', 'Graphic2', 'Body',
      'Author', 'AuthorTitle', 'AuthorCompany', 'Relevance',
      'Status', 'LastUpdated', 'LastUpdatedBy', 'PDFVersion'
    ]) {
      if (blogData[key] !== undefined) {
        fields.push(`${key} = ?`);
        values.push(blogData[key]);
      }
    }

    if (fields.length === 0) return false;

    values.push(id);

    const sql = `
      UPDATE ${this.tableName}
      SET ${fields.join(', ')}
      WHERE id = ?
    `;
    const result = await db.query(sql, values);
    return result.affectedRows > 0;
  }

  // Delete blog
  static async delete(id) {
    const sql = `
      DELETE FROM ${this.tableName}
      WHERE id = ?
    `;
    const result = await db.query(sql, [id]);
    return result.affectedRows > 0;
  }

  // Get all blogs with pagination and filtering
  static async findAll(options = {}) {
    const {
      page = 1,
      limit = 10,
      sortBy = 'DateWritten',
      sortOrder = 'DESC',
      status,
      author,
      search
    } = options;

    const offset = (page - 1) * limit;
    const params = [];

    let sql = `
      SELECT *
      FROM ${this.tableName}
      WHERE 1=1
    `;

    if (status) {
      sql += ` AND Status = ?`;
      params.push(status);
    }

    if (author) {
      sql += ` AND 
      0 = ?`;
      params.push(author);
    }

    if (search) {
      sql += ` AND (Title LIKE ? OR Description LIKE ? OR Body LIKE ?)`;
      params.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }

    sql += ` ORDER BY ${sortBy} ${sortOrder === 'ASC' ? 'ASC' : 'DESC'}`;
    // sql += ` LIMIT ? OFFSET ?`;
    // params.push(limit, offset);

    return await db.query(sql, params);
  }

  // Count total blogs with filters
  static async count(options = {}) {
    const { status, author, search } = options;
    const params = [];

    let sql = `
      SELECT COUNT(*) as total
      FROM ${this.tableName}
      WHERE 1=1
    `;

    if (status) {
      sql += ` AND Status = ?`;
      params.push(status);
    }

    if (author) {
      sql += ` AND Author = ?`;
      params.push(author);
    }

    if (search) {
      sql += ` AND (Title LIKE ? OR Description LIKE ? OR Body LIKE ?)`;
      params.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }

    const result = await db.query(sql, params);
    return result[0].total;
  }
}

module.exports = Blog;