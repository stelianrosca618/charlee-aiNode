const express = require('express');
const router = express.Router();
const {
  getAllAccolades,
  getAccoladeById,
  createAccolade,
  updateAccolade,
  deleteAccolade
} = require('../controllers/charleeAccolades.controller');

// Route to get all accolades
router.get('/', getAllAccolades);

// Route to get a single accolade by ID
router.get('/:id', getAccoladeById);

// Route to create a new accolade
router.post('/', createAccolade);

// Route to update an accolade by ID
router.put('/:id', updateAccolade);

// Route to delete an accolade by ID
router.delete('/:id', deleteAccolade);

module.exports = router;