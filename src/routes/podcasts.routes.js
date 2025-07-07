const express = require('express');
const router = express.Router();
const podcastsController = require('../controllers/podcasts.controller');

// Create a new podcast
router.post('/', podcastsController.createPodcast);

// Get all podcasts with pagination and filtering
router.get('/', podcastsController.getAllPodcasts);

// Get podcast by ID
router.get('/:id', podcastsController.getPodcastById);

// Update podcast by ID
router.put('/:id', podcastsController.updatePodcast);

// Delete podcast by ID
router.delete('/:id', podcastsController.deletePodcast);

module.exports = router;