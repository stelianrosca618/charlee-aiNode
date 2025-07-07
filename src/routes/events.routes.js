const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events.controller');

// Create a new event
router.post('/', eventsController.create);

// Get all events with pagination/filtering
router.get('/', eventsController.findAll);

// Get event by ID
router.get('/:id', eventsController.findById);

// Update event
router.put('/:id', eventsController.update);

// Delete event
router.delete('/:id', eventsController.delete);

module.exports = router;