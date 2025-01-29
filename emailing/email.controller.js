const express = require('express');
const router = express.Router();
const emailService = require('./email.service');

router.post('/send', sendEmail);
router.post('/send-contact-us', sendContactUsEmail);
router.post('/send-learn-mode', sendLearnModeEmail);
router.post('/send-request-demo', sendRequestDemoEmail);
router.post('/send-template', sendTemplateEmail);

module.exports = router;

async function sendEmail(req, res, next) {
    try {
        const result = await emailService.sendEmail(req.body);
        // const result = await emailService.sendEmail({
        //     to: "vtask118@outlook.com",
        //     toName: "Jvirtual task",
        //     subject: "Welcome",
        //     text: "Welcome to our service",
        //     html: "<h1>Welcome to our service</h1>"
        // });
        res.json(result);
    } catch (error) {
        next(error);
    }
}

async function sendContactUsEmail(req, res, next) {
    try {
        const result = await emailService.sendContactUsEmail(req.body);
        res.json(result);
    } catch (error) {
        next(error);
    }
}

async function sendLearnModeEmail(req, res, next) {
    try {
        const result = await emailService.sendLearnModeEmail(req.body);
        res.json(result);
    } catch (error) {
        next(error);
    }
}
async function sendRequestDemoEmail(req, res, next) {
    try {
        const result = await emailService.sendRequestDemoEmail(req.body);
        res.json(result);
    } catch (error) {
        next(error);
    }
}

async function sendTemplateEmail(req, res, next) {
    try {
        const result = await emailService.sendTemplateEmail(req.body);
        res.json(result);
    } catch (error) {
        next(error);
    }
}