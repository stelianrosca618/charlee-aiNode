const Blog = require('../models/blogs.model');
const Event = require('../models/events.model');
const Podcast = require('../models/podcasts.model');
const News = require('../models/news.model');

exports.getAll = async (req, res) => {
  try {
    const blogs = await Blog.findBlogsAll();
    const events = await Event.findEventsAll();
    const podcasts = await Podcast.findPodCastssAll();
    const news = await News.findNewsAll();

    res.json({
        blogs,
        events,
        podcasts,
        news
    });    
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findBlogsAll();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

exports.getAllPodCasts = async (req, res) => {
  try {
    const podcasts = await Podcast.findPodCastssAll();
    res.json(podcasts);
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findEventsAll();
    res.json(events);
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

exports.getAllNews = async (req, res) => {
  try {
    const news = await News.findNewsAll();
    res.json(news);
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

exports.getBlogByName = async (req, res) => {
  try {
    const blog = await Blog.findByName(req.params.name);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.getEventByName = async (req, res) => {
  try {
    const blog = await Event.findByName(req.params.name);
    if (!blog) return res.status(404).json({ error: 'Event not found' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
}