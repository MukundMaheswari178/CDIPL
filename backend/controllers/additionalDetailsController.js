// controllers/additionalDetailsController.js
const AdditionalDetails = require('../models/AdditionalDetails');

// Create or add additional details
exports.addAdditionalDetails = async (req, res) => {
  const { title } = req.params;
  const { youtubeLink, description, locationLink } = req.body;

  try {
    const newDetails = await AdditionalDetails.create({
      title,
      youtubeLink,
      description,
      locationLink,
    });
    res.status(201).json(newDetails);
  } catch (error) {
    res.status(500).json({ message: 'Error creating additional details', error });
  }
};

// Get additional details by title
exports.getAdditionalDetails = async (req, res) => {
  const { title } = req.params;

  try {
    const details = await AdditionalDetails.findOne({ where: { title } });
    if (!details) {
      return res.status(404).json({ message: 'Details not found' });
    }
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching details', error });
  }
};
