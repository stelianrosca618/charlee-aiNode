const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news.controller');

// Create a new news entry
router.post('/', newsController.createNews);

// Get all news with pagination and filtering
router.get('/', newsController.getAllNews);

// Get news by ID
router.get('/:id', newsController.getNewsById);

// Update news by ID
router.put('/:id', newsController.updateNews);

// Delete news by ID
router.delete('/:id', newsController.deleteNews);

module.exports = router;