const multer = require('multer');
const path = require('path');

// Storage for images
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/uploads/images/'); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Storage for PDFs
const pdfStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/uploads/pdfs/'); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// File filter for images only
const imageFileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'));
  }
};

// File filter for PDFs only
const pdfFileFilter = (req, file, cb) => {
  const allowedTypes = /pdf/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = file.mimetype === 'application/pdf';
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Only PDF files are allowed!'));
  }
};

// Multer instances
const uploadImage = multer({ storage: imageStorage, fileFilter: imageFileFilter });
const uploadPdf = multer({ storage: pdfStorage, fileFilter: pdfFileFilter });

// Controller function for image upload
exports.uploadImage = [
  uploadImage.single('image'),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded or invalid file type.' });
    }
    res.status(201).json({
      message: 'Image uploaded successfully',
      filename: req.file.filename,
      path: req.file.path
    });
  }
];

exports.uploadEditImages = [
  uploadImage.array('files[]', 10), // Limit to 10 images
  (req, res) => {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded or invalid file type.' });
    }
    const fileUrls = req.files.map(f => `/uploads/images/${f.filename}`);
    res.json({status: 'success', files: fileUrls });
    // res.status(200).json({
    //   status: 'success',
    //   files: fileUrls,
    // });
  }
];
// Controller function for PDF upload
exports.uploadPdf = [
  uploadPdf.single('pdf'),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded or invalid file type.' });
    }
    res.status(201).json({
      message: 'PDF uploaded successfully',
      filename: req.file.filename,
      path: req.file.path
    });
  }
];

