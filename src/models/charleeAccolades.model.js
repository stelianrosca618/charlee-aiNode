const db = require('../config/database');

class CharleeAccolades {
  static tableName = 'CharleeAccolades';

  // Create a new accolade
  static async create(accoladeData) {
    const sql = `
      INSERT INTO ${this.tableName} (
        ContentType, Description, title, LOB, Role, Product, Area, Graphic1, Graphic2, Body,
        CustomerQuote, CustomerTitle, CustomerCompany, Author, AuthorTitle, AuthorCompany,
        ArticleDate, Relevance, ArticleStatus, LastUpdated, LastUpdatedBy
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      accoladeData.ContentType, accoladeData.Description, accoladeData.title, accoladeData.LOB, accoladeData.Role,
      accoladeData.Product, accoladeData.Area, accoladeData.Graphic1, accoladeData.Graphic2,
      accoladeData.Body, accoladeData.CustomerQuote, accoladeData.CustomerTitle,
      accoladeData.CustomerCompany, accoladeData.Author, accoladeData.AuthorTitle,
      accoladeData.AuthorCompany, accoladeData.ArticleDate, accoladeData.Relevance,
      accoladeData.ArticleStatus, accoladeData.LastUpdated, accoladeData.LastUpdatedBy
    ];

    const result = await db.query(sql, values);
    return result.insertId;
  }

  // Find accolade by ID
  static async findById(id) {
    const sql = `
      SELECT *
      FROM ${this.tableName}
      WHERE id = ?
    `;

    const accolades = await db.query(sql, [id]);
    return accolades[0] || null;
  }

  // Update an accolade
  static async update(id, accoladeData) {
    const fields = [];
    const values = [];

    // Only update provided fields
    for (const [key, value] of Object.entries(accoladeData)) {
      if (value !== undefined) {
        fields.push(`${key} = ?`);
        values.push(value);
      }
    }

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

  // Delete an accolade
  static async delete(id) {
    const sql = `
      DELETE FROM ${this.tableName}
      WHERE id = ?
    `;

    const result = await db.query(sql, [id]);
    return result.affectedRows > 0;
  }

  // Get all accolades with pagination, ordering, and optional search
  static async findAll(options) {
    const {
      page = 1,
      limit = 10,
      order = [['Relevance', 'ASC']],
      searchWord = '',
      filters
    } = options;
    const offset = (page - 1) * limit;
    
    // Construct the ORDER BY clause dynamically
    const orderClause = order
      .map(([column, direction]) => `${column} ${direction}`)
      .join(', ');

    // Add search condition if searchWord is provided
    let searchCondition = '';
    if(filters.length > 0){
      searchCondition = 'WHERE ' + this.filterCondition(filters);
      searchCondition += searchWord? ' AND title LIKE ? OR Author LIKE ?' : '';
    }else{
      searchCondition = searchWord
      ? `WHERE title LIKE ? OR Author LIKE ?`
      : '';
    }
    
    const sql = `
      SELECT *
      FROM ${this.tableName}
      ${searchCondition}
      ORDER BY ${orderClause}
      LIMIT ? OFFSET ?
    `;
    console.log(sql);
    const values = searchWord
      ? [`%${searchWord}%`, `%${searchWord}%`, limit, offset]
      : [limit, offset];

    return await db.query(sql, values);
  }

  static filterCondition(filters) {
    let filterConditionStrs = [];
    filters.map(([column, values]) => {
      switch(column.toLowerCase()){
        case 'ContentType'.toLowerCase():
          filterConditionStrs.push(`ContentType IN (${values.map(value => `'${value}'`).join(', ')})`);
          break;
        case 'LOB'.toLowerCase():
          filterConditionStrs.push(values.map(id => `LOB LIKE '%${id}%'`).join(' OR '));
          break;
        case 'Role'.toLowerCase():
          filterConditionStrs.push(values.map(id => `Role LIKE '%${id}%'`).join(' OR '));
          break;
        case 'Product'.toLowerCase():
          filterConditionStrs.push(`Product IN (${values.map(value => `'${value}'`).join(', ')})`);
          break;
        case 'Area'.toLowerCase():
          filterConditionStrs.push(values.map(id => `Area LIKE '%${id}%'`).join(' OR '));
          break;
      }
    })
    return filterConditionStrs.join(' AND ');
  }
  // Count total accolades with optional search
  static async count(options) {
    const {
      searchWord = '',
      filters
    } = options;

    let searchCondition = '';
    if(filters.length > 0){
      searchCondition = 'WHERE ' + this.filterCondition(filters);
      searchCondition += searchWord? ' AND title LIKE ? OR Author LIKE ?' : '';
    }else{
      searchCondition = searchWord
      ? `WHERE title LIKE ? OR Author LIKE ?`
      : '';
    }
    // const searchCondition = searchWord
    //   ? `WHERE title LIKE ? OR Author LIKE ?`
    //   : '';

    const sql = `
      SELECT COUNT(*) as total
      FROM ${this.tableName}
      ${searchCondition}
    `;

    const values = searchWord
      ? [`%${searchWord}%`, `%${searchWord}%`]
      : [];

    const result = await db.query(sql, values);
    return result[0].total;
  }
}

module.exports = CharleeAccolades;