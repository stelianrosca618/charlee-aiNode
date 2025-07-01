const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//user login
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findByEmail(email);
    if (!user) {
      const error = new Error('Invalid email or password');
      error.status = 401;
      throw error;
    }

    // Compare password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(`Has`, hashedPassword);
    console.log(`Haa`, user);
    const isMatch = await bcrypt.compare(password, user.UserPwd);
    if (!isMatch) {
      const error = new Error('Invalid email or password');
      error.status = 401;
      throw error;
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '7d' }
    );

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user.user_id,
        email: user.UserLogin,
        name: user.UserFullName
        // add other fields as needed
      }
    });
  } catch (error) {
    next(error);
  }
};

// Get all users
const getAllUsers = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    
    const users = await User.findAll(page, limit);
    const total = await User.count();
    
    res.status(200).json({
      success: true,
      data: {
        users,
        pagination: {
          total,
          page,
          limit,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

// Get a single user
const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      const error = new Error('User not found');
      error.status = 404;
      throw error;
    }
    
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

// Create a new user
const createUser = async (req, res, next) => {
  try {
    // Check if email already exists
    console.log(req.body);
    const existingUser = await User.findByEmail(req.body.email);
    
    if (existingUser) {
      const error = new Error('User with this email already exists');
      error.status = 400;
      throw error;
    }
    
    const userId = await User.create(req.body);
    const newUser = await User.findById(userId);
    
    res.status(201).json({
      success: true,
      data: newUser
    });
  } catch (error) {
    next(error);
  }
};

// Update a user
const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    
    // Check if user exists
    const user = await User.findById(userId);
    
    if (!user) {
      const error = new Error('User not found');
      error.status = 404;
      throw error;
    }
    
    // Check if email is taken by another user
    if (req.body.email && req.body.email !== user.email) {
      const existingUser = await User.findByEmail(req.body.email);
      
      if (existingUser) {
        const error = new Error('Email already in use');
        error.status = 400;
        throw error;
      }
    }
    
    const updated = await User.update(userId, req.body);
    
    if (!updated) {
      const error = new Error('Failed to update user');
      error.status = 500;
      throw error;
    }
    
    const updatedUser = await User.findById(userId);
    
    res.status(200).json({
      success: true,
      data: updatedUser
    });
  } catch (error) {
    next(error);
  }
};

// Delete a user
const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    
    // Check if user exists
    const user = await User.findById(userId);
    
    if (!user) {
      const error = new Error('User not found');
      error.status = 404;
      throw error;
    }
    
    await User.delete(userId);
    
    res.status(200).json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser
};