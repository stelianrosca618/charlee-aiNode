const Podcast = require('../models/podcasts.model');

// Create a new podcast
exports.createPodcast = async (req, res) => {
  try {
    const podcastId = await Podcast.create(req.body);
    res.status(201).json({ message: 'Podcast created', id: podcastId });
  } catch (error) {
    console.error('Error creating podcast:', error);
    res.status(500).json({ message: 'Error creating podcast', error: error.message });
  }
};

// Get podcast by ID
exports.getPodcastById = async (req, res) => {
  try {
    const podcast = await Podcast.findById(req.params.id);
    if (!podcast) {
      return res.status(404).json({ message: 'Podcast not found' });
    }
    res.json(podcast);
  } catch (error) {
    console.error('Error fetching podcast:', error);
    res.status(500).json({ message: 'Error fetching podcast', error: error.message });
  }
};

// Update podcast by ID
exports.updatePodcast = async (req, res) => {
  try {
    const updated = await Podcast.update(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ message: 'Podcast not found or no fields to update' });
    }
    res.json({ message: 'Podcast updated' });
  } catch (error) {
    console.error('Error updating podcast:', error);
    res.status(500).json({ message: 'Error updating podcast', error: error.message });
  }
};

// Delete podcast by ID
exports.deletePodcast = async (req, res) => {
  try {
    const deleted = await Podcast.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Podcast not found' });
    }
    res.json({ message: 'Podcast deleted' });
  } catch (error) {
    console.error('Error deleting podcast:', error);
    res.status(500).json({ message: 'Error deleting podcast', error: error.message });
  }
};

// Get all podcasts with pagination and filtering
exports.getAllPodcasts = async (req, res) => {
  try {
    const options = {
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10,
      sortBy: req.query.sortBy || 'DatePublished',
      sortOrder: req.query.sortOrder || 'DESC',
      status: req.query.status,
      author: req.query.author,
      search: req.query.search
    };
    const podcasts = await Podcast.findAll(options);
    const total = await Podcast.count(options);
    res.json(podcasts);
    // res.json({
    //   data: podcasts,
    //   total,
    //   page: options.page,
    //   limit: options.limit
    // });
  } catch (error) {
    console.error('Error fetching podcasts:', error);
    res.status(500).json({ message: 'Error fetching podcasts', error: error.message });
  }
};