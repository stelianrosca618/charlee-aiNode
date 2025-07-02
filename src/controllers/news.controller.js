const News = require('../models/news.model');

// Create a new news entry
exports.createNews = async (req, res) => {
  try {
    const newsId = await News.create(req.body);
    res.status(201).json({ message: 'News created', id: newsId });
  } catch (error) {
    console.error('Error creating news:', error);
    res.status(500).json({ message: 'Error creating news', error: error.message });
  }
};

// Get news by ID
exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ message: 'Error fetching news', error: error.message });
  }
};

// Update news by ID
exports.updateNews = async (req, res) => {
  try {
    const updated = await News.update(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ message: 'News not found or no fields to update' });
    }
    res.json({ message: 'News updated' });
  } catch (error) {
    console.error('Error updating news:', error);
    res.status(500).json({ message: 'Error updating news', error: error.message });
  }
};

// Delete news by ID
exports.deleteNews = async (req, res) => {
  try {
    const deleted = await News.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.json({ message: 'News deleted' });
  } catch (error) {
    console.error('Error deleting news:', error);
    res.status(500).json({ message: 'Error deleting news', error: error.message });
  }
};

// Get all news with pagination and filtering
exports.getAllNews = async (req, res) => {
  try {
    const options = {
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10,
      sortBy: req.query.sortBy || 'DatePublished',
      sortOrder: req.query.sortOrder || 'DESC',
      status: req.query.status,
      source: req.query.source,
      search: req.query.search
    };
    const newsList = await News.findAll(options);
    const total = await News.count(options);
    // res.json({
    //   data: newsList,
    //   total,
    //   page: options.page,
    //   limit: options.limit
    // });
    res.json(newsList);
  } catch (error) {
    console.error('Error fetching news list:', error);
    res.status(500).json({ message: 'Error fetching news list', error: error.message });
  }
};