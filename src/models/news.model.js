const db = require('../config/database');

class News {
  static tableName = 'CharleeNews';

  // Create a new news entry
  static async create(newsData) {
    const {
      ContentType, Description, Title, Graphic1, Graphic2, Body,
      Source, DatePublished, Relevance, Status, LastUpdated,
      LastUpdatedBy, PDFVersion
    } = newsData;

    const sql = `
      INSERT INTO ${this.tableName} (
        ContentType, Description, Title, Graphic1, Graphic2, Body,
        Source, DatePublished, Relevance, Status, LastUpdated,
        LastUpdatedBy, PDFVersion
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const result = await db.query(sql, [
      ContentType, Description, Title, Graphic1, Graphic2, Body,
      Source, DatePublished, Relevance, Status, LastUpdated,
      LastUpdatedBy, PDFVersion
    ]);
    return result.insertId;
  }

  // Find news by ID
  static async findById(id) {
    const sql = `
      SELECT *
      FROM ${this.tableName}
      WHERE Id = ?
    `;
    const news = await db.query(sql, [id]);
    return news[0] || null;
  }

  // Update news
  static async update(id, newsData) {
    const fields = [];
    const values = [];

    for (const key of [
      'ContentType', 'Description', 'Title', 'Graphic1', 'Graphic2', 'Body',
      'Source', 'Relevance', 'Status', 'LastUpdated',
      'LastUpdatedBy', 'PDFVersion'
    ]) {
      if (newsData[key] !== undefined) {
        fields.push(`${key} = ?`);
        values.push(newsData[key]);
      }
    }

    if (fields.length === 0) return false;

    values.push(id);

    const sql = `
      UPDATE ${this.tableName}
      SET ${fields.join(', ')}
      WHERE Id = ?
    `;
    const result = await db.query(sql, values);
    return result.affectedRows > 0;
  }

  // Delete news
  static async delete(id) {
    const sql = `
      DELETE FROM ${this.tableName}
      WHERE Id = ?
    `;
    const result = await db.query(sql, [id]);
    return result.affectedRows > 0;
  }

  // Get all news with pagination and filtering
  static async findAll(options = {}) {
    const {
      page = 1,
      limit = 10,
      sortBy = 'DatePublished',
      sortOrder = 'DESC',
      status,
      source,
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

    if (source) {
      sql += ` AND Source = ?`;
      params.push(source);
    }

    if (search) {
      sql += ` AND (Title LIKE ? OR Description LIKE ? OR Body LIKE ?)`;
      params.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }

    sql += ` ORDER BY ${sortBy} ${sortOrder === 'ASC' ? 'ASC' : 'DESC'}`;
    sql += ` LIMIT ? OFFSET ?`;
    params.push(limit, offset);

    return await db.query(sql, params);
  }

  // Count total news with filters
  static async count(options = {}) {
    const { status, source, search } = options;
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

    if (source) {
      sql += ` AND Source = ?`;
      params.push(source);
    }

    if (search) {
      sql += ` AND (Title LIKE ? OR Description LIKE ? OR Body LIKE ?)`;
      params.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }

    const result = await db.query(sql, params);
    return result[0].total;
  }
}

module.exports = News;