const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');

router.get('/', dashboardController.getDashboardData);
router.get('/getActivites', dashboardController.getRecentActivities);
module.exports = router;