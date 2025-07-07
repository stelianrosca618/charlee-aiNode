const db = require('../config/database');

class Podcast {
  static tableName = 'CharleePodcasts';

  // Create a new podcast
  static async create(podcastData) {
    const {
      Content_Type, Description, Title, Graphic1, Graphic2, Body,
      Author, DateWritten, Relevance,
      Status, LastUpdated, LastUpdatedBy, PDFVersion
    } = podcastData;

    const sql = `
      INSERT INTO ${this.tableName} (
        ContentType, Description, Title, Graphic1, Graphic2, Body,
        Author, Relevance,
        Status, LastUpdatedBy, PDFVersion
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const result = await db.query(sql, [
      Content_Type, Description, Title, Graphic1, Graphic2, Body,
      Author, Relevance,
      Status, LastUpdatedBy, PDFVersion
    ]);
    return result.insertId;
  }

  // Find podcast by ID
  static async findById(id) {
    const sql = `
      SELECT *
      FROM ${this.tableName}
      WHERE id = ?
    `;
    const blogs = await db.query(sql, [id]);
    return blogs[0] || null;
  }

  // Update podcast
  static async update(id, podcastData) {
    const fields = [];
    const values = [];

    // Only update provided fields
    for (const key of [
      'ContentType', 'Description', 'Title', 'Graphic1', 'Graphic2', 'Body',
      'Author', 'Relevance',
      'Status', 'LastUpdated', 'LastUpdatedBy', 'PDFVersion'
    ]) {
      if (podcastData[key] !== undefined) {
        fields.push(`${key} = ?`);
        values.push(podcastData[key]);
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

  // Delete podcast
  static async delete(id) {
    const sql = `
      DELETE FROM ${this.tableName}
      WHERE id = ?
    `;
    const result = await db.query(sql, [id]);
    return result.affectedRows > 0;
  }

  static async findPodCastssAll() {
    let sql = `
      SELECT Id, ContentType, Title, DatePublished, Graphic1, Relevance, Author, Description
      FROM ${this.tableName}
      ORDER BY DatePublished DESC
    `;
    const params = [];

    return await db.query(sql, params);
  }
  // Get all podcasts with pagination and filtering
  static async findAll(options = {}) {
    const {
      page = 1,
      limit = 10,
      sortBy = 'DatePublished',
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

  // Count total podcasts with filters
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

module.exports = Podcast;