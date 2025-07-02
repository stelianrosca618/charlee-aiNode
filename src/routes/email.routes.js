const express = require('express');
const router = express.Router();
const emailController = require('../controllers/email.controller');

router.post('/send-contact-us', emailController.sendContactUsEmail);
router.post('/send-request-demo', emailController.sendRequestDemoEmail);
router.post('/send-learn-mode', emailController.sendLearnModeEmail);

module.exports = router;