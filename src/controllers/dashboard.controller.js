const Blog = require('../models/blogs.model');
const Event = require('../models/events.model');
const Podcast = require('../models/podcasts.model');
const News = require('../models/news.model');

exports.getDashboardData = async (req, res) => {
    try {
        const blogs = await Blog.count();
        const events = await Event.count();
        const podcasts = await Podcast.count();
        const news = await News.count();

        res.json({
        blogs,
        events,
        podcasts,
        news
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getRecentActivities = async (req, res) => {
    try {
        const recentBlogsArr = await Blog.findAll({ order: [['DateWritten', 'DESC']], limit: 5 });
        const recentEventsArr = await Event.findAll({ order: [['LastUpdated', 'DESC']], limit: 5 });
        const recentPodcastsArr = await Podcast.findAll({ order: [['DatePublished', 'DESC']], limit: 5 });
        const recentNewsArr = await News.findAll({ order: [['DatePublished', 'DESC']], limit: 5 });

        const recentBlogs = recentBlogsArr && recentBlogsArr.length > 0 ? recentBlogsArr[0] : null;
        const recentEvents = recentEventsArr && recentEventsArr.length > 0 ? recentEventsArr[0] : null;
        const recentPodcasts = recentPodcastsArr && recentPodcastsArr.length > 0 ? recentPodcastsArr[0] : null;
        const recentNews = recentNewsArr && recentNewsArr.length > 0 ?recentNewsArr[0] : null;
        res.json({
            recentBlogs,
            recentEvents,
            recentPodcasts,
            recentNews
        });        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}