const FloorDetails = require('../models/floorDetailsModel');
const path = require('path');
const fs = require('fs');

// Create new floor details with image upload
const createFloorDetails = async (req, res) => {
  try {
    const { bhk, area, price } = req.body;

    // Ensure tittle is provided
    const { tittle } = req.params;
    if (!tittle) {
      return res.status(400).json({ message: 'Title is required' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided' });
    }

    // Sanitize title to create a valid folder name
    const sanitizedTittle = tittle.replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    const folderPath = path.join(__dirname, `../uploads/floorplans/${sanitizedTittle}`);

    // Define the uploaded file URL path
    const imageUrl = `/uploads/floorplans/${sanitizedTittle}/${req.file.filename}`;

    // Move the file to the correct directory
    const targetPath = path.join(folderPath, req.file.filename);
    fs.renameSync(req.file.path, targetPath); // Move file to the target directory

    // Save floor details to the database
    const newFloorDetail = await FloorDetails.create({
      tittle: sanitizedTittle,
      bhk,
      area,
      price,
      imageUrl,
    });

    res.status(201).json({ message: 'Floor plan details saved successfully', data: newFloorDetail });
  } catch (error) {
    console.error(`Error saving floor details: ${error.message}`);
    res.status(500).json({ message: 'Error saving floor details', error: error.message });
  }
};

// Fetch floor plans by title
const getFloorDetailsByTittle = async (req, res) => {
  try {
    const { tittle } = req.params;
    
    // Ensure tittle is provided
    if (!tittle) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const floorPlans = await FloorDetails.findAll({ where: { tittle } });

    if (!floorPlans.length) {
      return res.status(404).json({ message: 'No floor plans found for this title' });
    }

    res.status(200).json(floorPlans);
  } catch (error) {
    console.error(`Error fetching floor details: ${error.message}`);
    res.status(500).json({ message: 'Error fetching floor details', error: error.message });
  }
};

module.exports = {
  createFloorDetails,
  getFloorDetailsByTittle,
};
