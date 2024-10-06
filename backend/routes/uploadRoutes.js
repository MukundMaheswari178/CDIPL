const express = require('express');
const { uploadFiles, fetchUploadsByProjectTitle } = require('../controllers/uploadController');
const upload = require('../middleware/upload'); // Set to handle multiple files
const router = express.Router();

// Route to upload multiple files for a specific category
router.post('/upload/:title/:category', upload.array('files'), uploadFiles);

// Route to fetch uploads by project title
router.get('/uploads/:title', fetchUploadsByProjectTitle);

module.exports = router;
