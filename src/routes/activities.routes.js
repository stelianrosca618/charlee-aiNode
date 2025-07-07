const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activities.controller');

router.get('/', activityController.getAll);
router.get('/blogs', activityController.getAllBlogs);
router.get('/blogs/:name', activityController.getBlogByName);
router.get('/podcasts', activityController.getAllPodCasts);
router.get('/events', activityController.getAllEvents);
router.get('/events/:name', activityController.getEventByName);
router.get('/news', activityController.getAllNews);
module.exports = router;