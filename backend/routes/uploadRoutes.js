const express = require('express');
const { uploadFiles, fetchUploadsByProjectTitle } = require('../controllers/uploadController');
const upload = require('../middleware/upload'); // Multer middleware
const router = express.Router();

// Route to upload a file
router.post('/upload', upload.single('file'), uploadFiles);

// Route to fetch uploads by project title
router.get('/uploads/:title', fetchUploadsByProjectTitle);

module.exports = router;
