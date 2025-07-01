const express = require('express');
const router = express.Router();
const {modifyBlogs, insertBlogDB} = require('../controllers/datamodify.controller');

router.get('/blogs', modifyBlogs);
router.get('/insertBlogDB', insertBlogDB);
module.exports = router;