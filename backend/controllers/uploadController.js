const Upload = require('../models/Upload');
const path = require('path');

const uploadFiles = async (req, res) => {
  const { projectTitle } = req.body;

  if (!projectTitle || !req.file) {
    return res.status(400).json({ success: false, message: 'Project title and file are required.' });
  }

  try {
    const fileUrl = path.join('/uploads/', req.file.filename); // Create the relative file path

    // Save the uploaded file details to the database
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
    if (uploads.length === 0) {
      return res.status(404).json({ success: false, message: 'No uploads found for this project.' });
    }
    res.status(200).json({ success: true, uploads });
  } catch (error) {
    console.error('Error fetching uploads:', error);
    res.status(500).json({ success: false, message: 'Error fetching uploads', error: error.message });
  }
};

module.exports = { uploadFiles, fetchUploadsByProjectTitle };
