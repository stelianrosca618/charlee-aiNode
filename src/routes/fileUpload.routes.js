const express = require('express');
const router = express.Router();
const fileUploadController = require('../controllers/fileUpload.controller');

router.post('/imageupload', fileUploadController.uploadImage);
router.post('/pdfupload', fileUploadController.uploadPdf);
router.post('/uploadEditImages', fileUploadController.uploadEditImages);
module.exports = router;