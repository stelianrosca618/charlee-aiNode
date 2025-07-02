const express = require('express');
const router = express.Router();
const {modifyBlogs, insertBlogDB, insertNewsDB} = require('../controllers/datamodify.controller');

router.get('/blogs', modifyBlogs);
router.get('/insertBlogDB', insertBlogDB);
router.get('/insertNewsDB', insertNewsDB);
module.exports = router;