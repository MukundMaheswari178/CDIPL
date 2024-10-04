// controllers/uploadController.js
const Upload = require('../models/Upload');
const path = require('path');

const uploadFiles = async (req, res) => {
  const { projectTitle } = req.body;

  if (!projectTitle || !req.file) {
    return res.status(400).json({ success: false, message: 'Project title and file are required.' });
  }

  try {
    const fileUrl = path.join('/uploads/', req.file.filename); // Save the relative file path

    // Create an entry in the Upload table
    const upload = await Upload.create({
      projectTitle,
      fileName: req.file.filename,
      fileType: req.file.mimetype,
      fileUrl,
    });

    res.status(201).json({
      success: true,
      message: 'File uploaded successfully!',
      upload,
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ success: false, message: 'File upload failed', error: error.message });
  }
};

// Fetch all uploads for a specific project title
const fetchUploadsByProjectTitle = async (req, res) => {
  const { title } = req.params;

  try {
    const uploads = await Upload.findAll({ where: { projectTitle: title } });
    res.status(200).json({ success: true, uploads });
  } catch (error) {
    console.error('Error fetching uploads:', error);
    res.status(500).json({ success: false, message: 'Error fetching uploads', error: error.message });
  }
};

module.exports = { uploadFiles, fetchUploadsByProjectTitle };
