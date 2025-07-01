const express = require('express');
const router = express.Router();
const blogsController = require('../controllers/blogs.controller');

// Create a new blog
router.post('/', blogsController.createBlog);

// Get all blogs
router.get('/', blogsController.getAllBlogs);

// Get a blog by ID
router.get('/:id', blogsController.getBlogById);

// Update a blog by ID
router.put('/:id', blogsController.updateBlog);

// Delete a blog by ID
router.delete('/:id', blogsController.deleteBlog);

module.exports = router;