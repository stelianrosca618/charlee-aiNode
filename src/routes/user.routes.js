const express = require('express');
const { 
  loginUser,
  getAllUsers, 
  getUserById, 
  createUser, 
  updateUser, 
  deleteUser 
} = require('../controllers/user.controller');
const { 
  userValidationRules, 
  handleValidationErrors 
} = require('../middleware/validators');

const router = express.Router();
//login user
router.post('/login', loginUser);
// GET all users
router.get('/', getAllUsers);

// GET a single user
router.get('/:id', getUserById);

// POST create a new user
router.post(
  '/', 
  userValidationRules.create,
  handleValidationErrors,
  createUser
);

// PUT update a user
router.put(
  '/:id', 
  userValidationRules.update,
  handleValidationErrors,
  updateUser
);

// DELETE a user
router.delete('/:id', deleteUser);

module.exports = router;