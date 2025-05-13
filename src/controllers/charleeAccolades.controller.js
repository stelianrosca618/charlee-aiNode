const CharleeAccolades = require('../models/charleeAccolades.model');

// Get all accolades
const getAllAccolades = async (req, res, next) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      order = 'name-asc',
      searchWord = '',
      filters
    } = req.query;
    
    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      order: [],
      searchWord,
      filters: [],
    };

    if (order === 'name-asc') {
      options.order = [['Author', 'ASC']];
    } else if (order === 'name-desc') {
      options.order = [['Author', 'DESC']];
    } else if (order === 'title-asc') {
      options.order = [['title', 'ASC']];
    } else if (order === 'title-desc') {
      options.order = [['title', 'DESC']];
    } else if (order === 'relevance') {
      options.order = [['Relevance', 'ASC']];
    }
    if(filters){
      const filterKeys = Object.keys(filters);
      filterKeys.map(keyItem => {
        options.filters.push([keyItem, filters[keyItem]])
      })
    }
    const accolades = await CharleeAccolades.findAll(options);
    const total = await CharleeAccolades.count(options);

    res.status(200).json({
      success: true,
      data: {
        accolades,
        pagination: {
          total,
          page: options.page,
          limit: options.limit,
          pages: Math.ceil(total / options.limit)
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

// Get a single accolade
const getAccoladeById = async (req, res, next) => {
  try {
    const accolade = await CharleeAccolades.findById(req.params.id);

    if (!accolade) {
      const error = new Error('Accolade not found');
      error.status = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      data: accolade
    });
  } catch (error) {
    next(error);
  }
};

// Create a new accolade
const createAccolade = async (req, res, next) => {
  try {
    const accoladeId = await CharleeAccolades.create(req.body);
    const newAccolade = await CharleeAccolades.findById(accoladeId);

    res.status(201).json({
      success: true,
      data: newAccolade
    });
  } catch (error) {
    next(error);
  }
};

// Update an accolade
const updateAccolade = async (req, res, next) => {
  try {
    const accoladeId = req.params.id;

    // Check if accolade exists
    const accolade = await CharleeAccolades.findById(accoladeId);

    if (!accolade) {
      const error = new Error('Accolade not found');
      error.status = 404;
      throw error;
    }

    const updated = await CharleeAccolades.update(accoladeId, req.body);

    if (!updated) {
      const error = new Error('Failed to update accolade');
      error.status = 500;
      throw error;
    }

    const updatedAccolade = await CharleeAccolades.findById(accoladeId);

    res.status(200).json({
      success: true,
      data: updatedAccolade
    });
  } catch (error) {
    next(error);
  }
};

// Delete an accolade
const deleteAccolade = async (req, res, next) => {
  try {
    const accoladeId = req.params.id;

    // Check if accolade exists
    const accolade = await CharleeAccolades.findById(accoladeId);

    if (!accolade) {
      const error = new Error('Accolade not found');
      error.status = 404;
      throw error;
    }

    await CharleeAccolades.delete(accoladeId);

    res.status(200).json({
      success: true,
      message: 'Accolade deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllAccolades,
  getAccoladeById,
  createAccolade,
  updateAccolade,
  deleteAccolade
};