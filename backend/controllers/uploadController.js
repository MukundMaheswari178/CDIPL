const Upload = require('../models/Upload');
const path = require('path');
const fs = require('fs');

// Upload a file
const uploadFiles = async (req, res) => {
  const { title, category } = req.params;

  if (!title || !category || !req.files) {
    return res.status(400).json({ success: false, message: 'Project title, category, and files are required.' });
  }

  try {
    const uploads = await Promise.all(req.files.map(async (file) => {
      const fileUrl = path.join('/uploads/', title, category, file.filename); // Create file URL

      // Save the uploaded file details to the database
      return await Upload.create({
        projectTitle: title,
        fileName: file.filename,
        fileType: file.mimetype,
        fileCategory: category,
        fileUrl,
      });
    }));

    res.status(201).json({
      success: true,
      message: `${category.charAt(0).toUpperCase() + category.slice(1)} uploaded successfully!`,
      uploads,
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ success: false, message: 'File upload failed', error: error.message });
  }
};

// Fetch files by project title
const fetchUploadsByProjectTitle = async (req, res) => {
  const { title } = req.params;
  const uploadsPath = path.join(__dirname, '../uploads', title); // Adjust path as necessary

  try {
    if (!fs.existsSync(uploadsPath)) {
      return res.status(404).json({ success: false, message: 'Project not found.' });
    }

    const categories = fs.readdirSync(uploadsPath);
    const categorizedImages = {
      mainGallery: [],
      gallery: [],
      paymentPlan: [],
      logo: [],
    };

    // Read each category directory and gather images
    for (const category of categories) {
      const categoryPath = path.join(uploadsPath, category);
      
      if (fs.lstatSync(categoryPath).isDirectory()) {
        const images = fs.readdirSync(categoryPath).map(file => ({
          fileName: file,
          filePath: path.join('/uploads', title, category, file),
        }));

        if (categorizedImages[category]) {
          categorizedImages[category] = images;
        }
      }
    }

    res.status(200).json({ success: true, images: categorizedImages });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching uploads', error: error.message });
  }
};

module.exports = { uploadFiles, fetchUploadsByProjectTitle };
