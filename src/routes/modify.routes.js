const express = require('express');
const router = express.Router();
const {modifyBlogs, insertBlogDB, insertNewsDB, insertEventsDB} = require('../controllers/datamodify.controller');

router.get('/blogs', modifyBlogs);
router.get('/insertBlogDB', insertBlogDB);
router.get('/insertNewsDB', insertNewsDB);
router.get('/insertEventsDB', insertEventsDB);

module.exports = router;