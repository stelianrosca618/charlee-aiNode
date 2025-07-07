const db = require('../config/database');

class Event {
  static tableName = 'CharleeEvents';

  // Create a new event entry
  static async create(eventData) {
    const {
      ContentType, Description, Title, Graphic1, Graphic2, Body,
      EventPath, Phone, Address, Country, City, State, Zip,
      StartDate, EndDate, Relevance, Status, LastUpdated, LastUpdatedBy
    } = eventData;

    const sql = `
      INSERT INTO ${this.tableName} (
        ContentType, Description, Title, Graphic1, Graphic2, Body,
        EventPath, Phone, Address, Country, City, State, Zip,
        StartDate, EndDate, Relevance, Status, LastUpdatedBy
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const result = await db.query(sql, [
      ContentType, Description, Title, Graphic1, Graphic2, Body,
      EventPath, Phone, Address, Country, City, State, Zip,
      StartDate, EndDate, Relevance, Status, LastUpdated, LastUpdatedBy
    ]);
    return result.insertId;
  }

  // Find event by Name
  static async findByName(name){
    const sql = `
      SELECT *
      FROM ${this.tableName}
      WHERE Relevance = ?
    `;
    const events = await db.query(sql, [name]);
    return events[0] || null;
  }
  // Find event by ID
  static async findById(id) {
    const sql = `
      SELECT *
      FROM ${this.tableName}
      WHERE id = ?
    `;
    const events = await db.query(sql, [id]);
    return events[0] || null;
  }

  // Update event
  static async update(id, eventData) {
    const fields = [];
    const values = [];

    for (const key of [
      'ContentType', 'Description', 'Title', 'Graphic1', 'Graphic2', 'Body',
      'EventPath', 'Phone', 'Address', 'Country', 'City', 'State', 'Zip',
      'StartDate', 'EndDate', 'Relevance', 'Status', 'LastUpdated', 'LastUpdatedBy'
    ]) {
      if (eventData[key] !== undefined) {
        fields.push(`${key} = ?`);
        values.push(eventData[key]);
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

  // Delete event
  static async delete(id) {
    const sql = `
      DELETE FROM ${this.tableName}
      WHERE id = ?
    `;
    const result = await db.query(sql, [id]);
    return result.affectedRows > 0;
  }

  static async findEventsAll() {
    let sql = `
      SELECT id, ContentType, Title, LastUpdated, Graphic1, Relevance, StartDate, EndDate
      FROM ${this.tableName}
      ORDER BY StartDate DESC
    `;
    const params = [];

    return await db.query(sql, params);
  }
  // Get all events with pagination and filtering
  static async findAll(options = {}) {
    const {
      page = 1,
      limit = 10,
      sortBy = 'StartDate',
      sortOrder = 'DESC',
      status,
      city,
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

    if (city) {
      sql += ` AND City = ?`;
      params.push(city);
    }

    if (search) {
      sql += ` AND (Title LIKE ? OR Description LIKE ? OR Body LIKE ?)`;
      params.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }

    sql += ` ORDER BY ${sortBy} ${sortOrder === 'ASC' ? 'ASC' : 'DESC'}`;
    // sql += ` LIMIT ? OFFSET ?`;
    params.push(limit, offset);

    return await db.query(sql, params);
  }

  // Count total events with filters
  static async count(options = {}) {
    const { status, city, search } = options;
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

    if (city) {
      sql += ` AND City = ?`;
      params.push(city);
    }

    if (search) {
      sql += ` AND (Title LIKE ? OR Description LIKE ? OR Body LIKE ?)`;
      params.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }

    const result = await db.query(sql, params);
    return result[0].total;
  }
}

module.exports = Event;